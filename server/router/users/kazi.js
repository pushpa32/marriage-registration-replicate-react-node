import express from 'express'
import * as kazis from '../../controller/users/kazi.js'

export const kazi = express.Router()

kazi.post('/add', kazis.addKazi)
kazi.get('/get/all', kazis.getKazis)
kazi.post('/get/byDistrictId', kazis.getByDistrictId)

//404
kazi.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})