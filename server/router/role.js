import express from 'express'
import * as roles from '../controller/role.js'

export const role = express.Router()

role.post('/add', roles.add)
role.get('/get/all', roles.getRoles)
role.get('/get/all/excludeAdminKazi', roles.getRolesExcludeAdminKazi)
role.post('/update/by/id', roles.updateRole)

//404
role.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})