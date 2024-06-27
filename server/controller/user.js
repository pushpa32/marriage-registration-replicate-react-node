import User from "../model/User.js"
import crypto from "crypto";
import dotenv from "dotenv"
import Jwt from 'jsonwebtoken'
import { sequelize } from "../connection.js";
import Sro from "../model/users/SRO.js";
import Dc from "../model/users/DC.js";
import Igr from "../model/users/IGR.js";
import Aigr from "../model/users/AIGR.js";
import { generateCommonPassword, generateOtherUserId, readMcqExcel } from "./reusable.js";
import { Op } from "sequelize";
import Test from "../model/Test.js";
import { checkFileMime } from "./form/form.js";

dotenv.config()

export const register = async (req, res) => {
    const out = {}
    try {
        if (!req.body.name) throw Error("Provide Name")
        if (!req.body.userid) throw Error("Provide User ID")
        if (!req.body.password) throw Error("Provide Password")
        if (!req.body.role) throw Error("Provide Role")

        const checkDup = await User.findAll({
            where: {
                userid: req.body.userid
                // [Op.and]: [
                //     { role: 2 },
                //     { email: req.body.email }
                // ]
            }
        })

        if (checkDup.length > 0) {
            out.message = "User ID already exists!";
            out.error = true;
            out.data = null
            res.send(out)
        } else {
            const hash = crypto
                .createHmac("sha256", process.env.PASSWORD_KEY)
                .update(req.body.password)
                .digest("hex");

            await User.create({
                name: req.body.name,
                userid: req.body.userid,
                password: hash,
                role: req.body.role,
            })

            out.message = "Success"
            out.error = false
            out.data = null
        }

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getUsers = async (req, res) => {
    const out = {}
    try {
        const data = await User.findAll({})

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const panelLogin = async (req, res) => {
    const out = {}
    if (!req.body.userid) throw Error("Provide User ID")
    if (!req.body.password) throw Error("Provide Password")

    const checkDup = await User.findAll({
        where: {
            userid: req.body.userid
        }
    })

    if (checkDup.length === 0) {
        out.message = "User id does not exists";
        out.error = true;
        out.data = null
        res.send(out)
    } else {
        const hash = crypto
            .createHmac("sha256", process.env.PASSWORD_KEY)
            .update(req.body.password)
            .digest("hex");

        if (hash === checkDup[0].password) {
            const updated = await sequelize.query(
                "SELECT users.*, roles.name as rolename, roles.id as roleid " +
                "FROM users " +
                "JOIN roles ON roles.id = users.role " +
                "Where users.id = :userId ",
                {
                    replacements: {
                        userId: checkDup[0].id,
                    },
                    type: sequelize.QueryTypes.SELECT
                }
            );
            const token = Jwt.sign({ user: updated[0] }, process.env.SECRET_JWT, { expiresIn: '30d' })

            res.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json({ "token": token, "error": false, "message": "Successfull" })
        } else {
            out.message = "Wrong Password!";
            out.error = true;
            out.data = null
            res.send(out)
        }
    }
};


// user role
export const addUserWithType = async (req, res) => {
    const out = {}
    try {
        if (!req.body.userType) throw Error("Provide User Type")
        if (!req.body.district) throw Error("Provide District")
        if (!req.body.userid) throw Error("Provide User ID")
        if (!req.body.name) throw Error("Provide Name")
        if (!req.body.phone) throw Error("Provide Phone Number")
        if (!req.body.office_address) throw Error("Provide Office Address")

        if (req.body.userType.toLowerCase() !== 'IGR'.toLowerCase() && req.body.userType.toLowerCase() !== 'AIGR'.toLowerCase())
            if (!req.body.office_name) throw Error("Provide Office Name")

        // check the database and store the data in respective database
        let dbConnection;
        if (req.body.userType.toLowerCase() === "SRO".toLowerCase())
            dbConnection = Sro;
        else if (req.body.userType.toLowerCase() === "DC".toLowerCase())
            dbConnection = Dc;
        else if (req.body.userType.toLowerCase() === "IGR".toLowerCase())
            dbConnection = Igr;
        else if (req.body.userType.toLowerCase() === "AIGR".toLowerCase())
            dbConnection = Aigr;

        // create user id and password
        // const userId = await generateOtherUserId(dbConnection, req.body.userType.toUpperCase())
        //generate password
        const hash = await generateCommonPassword()

        await dbConnection.create({
            userid: req.body.userid,
            ...(
                (req.body.userType.toLowerCase() !== 'IGR' && req.body.userType.toLowerCase() !== 'AIGR')
                    ? { district_id: req.body.district }
                    : {}
            ),
            office_name: (
                req.body.userType.toLowerCase() !== 'IGR' && req.body.userType.toLowerCase() !== 'AIGR'
                    ? req.body.office_name
                    : 'Assam'
            ),
            office_address: req.body.office_address,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            status: req.body.status ? 1 : 0,
        });


        await User.create({
            name: req.body.name,
            userid: req.body.userid,
            password: hash,
            role: req.body.role,
            status: req.body.status ? 1 : 0,
        })

        out.message = "Successfully Registered"
        out.error = false
        out.data = null

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const updateUserWithType = async (req, res) => {
    const out = {}
    try {
        if (!req.body.id) throw Error("Provide ID")
        if (!req.body.userid) throw Error("Provide User ID")
        if (!req.body.userType) throw Error("Provide User Type")
        if (!req.body.district) throw Error("Provide District")
        if (!req.body.name) throw Error("Provide Name")
        if (!req.body.userid) throw Error("Provide User ID")
        if (!req.body.phone) throw Error("Provide Phone Number")
        if (!req.body.office_address) throw Error("Provide Office Address")

        if (req.body.userType.toLowerCase() !== 'IGR'.toLowerCase() && req.body.userType.toLowerCase() !== 'AIGR'.toLowerCase())
            if (!req.body.office_name) throw Error("Provide Office Name")

        // check the database and store the data in respective database
        let dbConnection;
        if (req.body.userType.toLowerCase() === "SRO".toLowerCase())
            dbConnection = Sro;
        else if (req.body.userType.toLowerCase() === "DC".toLowerCase())
            dbConnection = Dc;
        else if (req.body.userType.toLowerCase() === "IGR".toLowerCase())
            dbConnection = Igr;
        else if (req.body.userType.toLowerCase() === "AIGR".toLowerCase())
            dbConnection = Aigr;

        await dbConnection.update({
            userid: req.body.userid,
            district_id: req.body.district,
            office_name: (req.body.userType.toLowerCase() !== 'IGR'.toLowerCase() && req.body.userType.toLowerCase() !== 'AIGR'.toLowerCase() ? req.body.office_name : "Assam"),
            office_address: req.body.office_address,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            status: req.body.status ? 1 : 0,
        }, {
            where: {
                id: req.body.id
            }
        })

        await User.update({
            userid: req.body.userid,
            name: req.body.name,
            role: req.body.role,
            status: req.body.status ? 1 : 0,
        }, {
            where: {
                userid: req.body.userid
            }
        })

        out.message = "Successfully Updated"
        out.error = false
        out.data = null

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getUserByType = async (req, res) => {
    const out = {}
    try {
        let dbConnection;
        if (req.body.label.toLowerCase() === "SRO".toLowerCase())
            dbConnection = 'sros';
        else if (req.body.label.toLowerCase() === "DC".toLowerCase())
            dbConnection = 'dcs';
        else if (req.body.label.toLowerCase() === "IGR".toLowerCase())
            dbConnection = 'igrs';
        else if (req.body.label.toLowerCase() === "AIGR".toLowerCase())
            dbConnection = 'aigrs';

        let query;
        if (dbConnection === 'igrs' || dbConnection === 'aigrs') {
            query = "SELECT " + dbConnection + ".*" +
                "FROM " + dbConnection;
        } else {
            query = "SELECT " + dbConnection + ".*, districts.name as district_name, districts.id as district " +
                "FROM " + dbConnection +
                " JOIN districts ON districts.id = " + dbConnection + ".district_id";
        }

        const data = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        });
        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

// sro
export const getSroByDistrict = async (req, res) => {
    const out = {}
    try {
        if (!req.body.dist_id) throw Error("Provide District")

        const data = await Sro.findAll({
            where: {
                [Op.and]: [
                    { 'district_id': req.body.dist_id },
                    { "status": true },
                ]

            }
        })
        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const addDcExcel = async (req, res) => {
    let out = {}
    try {
        if (!req.files) throw Error("No file uploaded")

        const data = readMcqExcel(req.files)

        if (data.length === 0) {
            out.error = true
            out.message = "No data"
            out.data = null
        } else {

            const rows = data.map(row => {
                return {
                    question_type: row[0],
                    question_type_link: row[1],
                    question_type_text: row[2],

                    option1_type: row[3],
                    option1_type_link: row[4],
                    option1_type_text: row[5],

                    option2_type: row[6],
                    option2_type_link: row[7],
                    option2_type_text: row[8],

                    option3_type: row[9],
                    option3_type_link: row[10],
                    option3_type_text: row[11],

                    option4_type: row[12],
                    option4_type_link: row[13],
                    option4_type_text: row[14],

                    answer: row[15],

                    // created_at: new Date(),
                    // updated_at: new Date()
                };
            });

            await Dc.bulkCreate(rows);

            out.error = false
            out.message = "Success"
            out.data = null
        }

    } catch (err) {
        out.error = true
        out.message = err.message
        out.data = null
    } finally {
        res.send(out)
    }
}

export const testValidate = async (req, res) => {
    let out = {}
    try {

        // await checkFileMime(req.files, "TEST");
        const validateData = {
            name: "dsasd",
            email: "sfdsdfdsf@gmail.com"
        }

        const testInstance = Test.build(validateData);

        // Validate the instance
        await testInstance.validate();
        const dd = await testInstance.save();

        console.log(res);

        out.error = false
        out.message = "Success"
        out.data = dd

    } catch (err) {
        let tempErrorData = []
        if (err.message.includes('\n')) {
            const spilted = err.message.split('\n')
            for (let i = 0; i < spilted.length; i++) {
                const dd = spilted[i].includes(':') ? spilted[i].split(':')[1].trim() : spilted[i]
                tempErrorData.push(dd)
            }
        } else if (err.message.includes(':')) {
            tempErrorData.push(err.message.split(":")[1].trim())
        } else {
            tempErrorData.push(err.message)
        }
        out.error = true
        out.message = tempErrorData
        out.data = null
    } finally {
        res.send(out)
    }
}