import { Op } from "sequelize"
import { sequelize } from "../connection.js"
import District from "../model/District.js"
import Country from "../model/Country.js"

export const addDistrict = async (req, res) => {
    const out = {}
    try {
        if (!req.body.name) throw Error("Provide Name")
        if (!req.body.lgd_code) throw Error("Provide LGD Code")
        if (!req.body.dist_code) throw Error("Provide District Code")

        const checkDup = await District.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn('LOWER', sequelize.col('name')),
                        req.body.name.toLowerCase())
                ]
            }
        })

        if (checkDup.length === 0) {
            // console.log("ASdasdasd",typeof(req.body.dist_code));

            await District.create({
                name: req.body.name,
                lgd_code: req.body.lgd_code,
                dist_code: req.body.dist_code,
                status: req.body.status ? 1 : 0,
            })

            out.message = "District added Successfully"
            out.error = false
            out.data = null
        } else {
            out.message = "The district already exists"
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

export const getDistricts = async (req, res) => {
    const out = {}
    try {
        const data = await District.findAll({})

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

export const getActiveDistrict = async (req, res) => {
    const out = {}
    try {
        const data = await District.findAll({
            where: {
                status: true
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

export const getDistrictByStateAndActive = async (req, res) => {
    const out = {}
    try {
        if (!req.body.state_id) throw Error("Provide Name")

        const data = await District.findAll({
            where: {
                [Op.and]: [
                    { state_id: req.body.state_id },
                    { status: true }
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

export const updateDistrict = async (req, res) => {
    const out = {}
    try {
        if (!req.body.id) throw Error("Provide District Id")
        if (!req.body.name) throw Error("Provide Name")
        if (!req.body.lgd_code) throw Error("Provide LGD Code")
        if (!req.body.dist_code) throw Error("Provide District Code")

        await District.update({
            name: req.body.name,
            lgd_code: req.body.lgd_code,
            dist_code: req.body.dist_code,
            status: req.body.status ? 1 : 0,
        }, {
            where: {
                id: req.body.id
            }
        })

        out.message = "District updated Successfully"
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

// 
export const getCountries = async (req, res) => {
    const out = {}
    try {
        const data = await Country.findAll({})

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
