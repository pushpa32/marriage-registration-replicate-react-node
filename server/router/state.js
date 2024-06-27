import express from 'express'
import * as states from '../controller/state.js'

export const state = express.Router()

state.get('/get/all', states.getStates)

//404
state.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})