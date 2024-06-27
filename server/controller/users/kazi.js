import { Op } from "sequelize"
import Role from "../../model/Role.js"
import Kazi from "../../model/users/Kazi.js"
import { generateCommonPassword, generateKaziUserId, uploadFile } from "../reusable.js"
import { sequelize } from "../../connection.js"
import User from "../../model/User.js"

export const addKazi = async (req, res) => {
    const out = {}
    try {
        console.log(req);

        if (!req.body.district) throw Error("Provide District")
        if (!req.body.officeName) throw Error("Provide Office")
        if (!req.body.name) throw Error("Provide Name")
        if (!req.body.address) throw Error("Provide Address")
        if (!req.body.phone) throw Error("Provide Phone")
        if (!req.body.email) throw Error("Provide Email")
        if (!req.body.sroValue) throw Error("Provide SRO")

        const checkDup = await Kazi.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn('LOWER', sequelize.col('name')),
                        req.body.name.toLowerCase())
                ]
            }
        })

        if (checkDup.length === 0) {

            //create user id
            const userId = await generateKaziUserId();
            const hash = await generateCommonPassword()

            const kaziRoleId = await Role.findOne({
                where: {
                    [Op.and]: [
                        sequelize.where(
                            sequelize.fn('LOWER', sequelize.col('name')),
                            'Kazi'.toLowerCase())
                    ]
                }
            })

            //save document if provided
            let filePath = null;
            if (req.files)
                filePath = uploadFile('kazi', req.files.fileData);

            await Kazi.create({
                userid: userId,
                district_id: req.body.district,
                office_name: req.body.officeName,
                office_address: req.body.address,
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                assosciated_sro: req.body.sroValue,
                document_path: req.files != null ? (await filePath).toString() : null,
                status: req.body.status ? 1 : 0,
            })

            await User.create({
                name: req.body.name,
                userid: userId,
                password: hash,
                role: kaziRoleId.dataValues.id,
                status: req.body.status ? 1 : 0,
            })

            out.message = "Kazi Registered Successfully"
            out.error = false
            out.data = null
        } else {
            out.message = "Kazi already assigned to another office"
            out.error = true
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

export const getKazis = async (req, res) => {
    const out = {}
    try {
        const data = await Kazi.findAll({})

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

export const getByDistrictId = async (req, res) => {
    const out = {}
    try {
        if (!req.body.dist_id) throw Error("Provide District Id")
        const data = await Kazi.findAll({
            where: {
                district_id: req.body.dist_id
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



