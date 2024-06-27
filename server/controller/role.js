import { Op } from "sequelize"
import { sequelize } from "../connection.js"
import Role from "../model/Role.js"

export const add = async (req, res) => {
    const out = {}
    try {
        if (!req.body.name) throw Error("Provide Name")

        const checkDup = await Role.findAll({
            where: {
                [Op.and]: [
                    sequelize.where(
                        sequelize.fn('LOWER', sequelize.col('name')),
                        req.body.name.toLowerCase())
                ]
            }
        })

        if (checkDup.length === 0) {
            await Role.create({
                name: req.body.name,
            })

            out.message = "Success"
            out.error = false
            out.data = null
        } else {
            out.message = "The role name already exists"
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

export const getRoles = async (req, res) => {
    const out = {}
    try {
        const data = await Role.findAll({})

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

export const getRolesExcludeAdminKazi = async (req, res) => {
    const out = {}
    try {
        const excludedRoles = ['Admin', 'Kazi'];

        const data = await Role.findAll({
            where: {
                name: {
                    [Op.notIn]: excludedRoles,
                },
            },
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

export const updateRole = async (req, res) => {
    const out = {}
    try {
        if (!req.body.id) throw Error("Provide ID")
        if (!req.body.name) throw Error("Provide Name")

        await Role.update({
            name: req.body.name,
        }, {
            where: {
                id: req.body.id
            }
        })

        out.message = "Success"
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