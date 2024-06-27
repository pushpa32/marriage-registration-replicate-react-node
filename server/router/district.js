import express from 'express'
import * as districts from '../controller/district.js'

export const district = express.Router()

district.post('/add', districts.addDistrict)
district.get('/get/all', districts.getDistricts)
district.get('/get/active', districts.getActiveDistrict)
district.post('/get/by/state', districts.getDistrictByStateAndActive)
district.post('/update', districts.updateDistrict)

district.get('/get/country', districts.getCountries)

//404
district.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})