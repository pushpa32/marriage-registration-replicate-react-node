import express from 'express'
import * as users from '../controller/user.js'

export const user = express.Router()

user.post('/login', users.panelLogin)

user.post('/register', users.register)
user.get('/get/all', users.getUsers)

// user role add
user.post('/add', users.addUserWithType)
user.post('/update', users.updateUserWithType)
user.post('/get/byType', users.getUserByType)

// sro
user.post('/get/sroByDistrict/active', users.getSroByDistrict)
user.post('/add/dc/byExcel', users.addDcExcel)


// test
user.post('/test', users.testValidate)

//404
user.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})