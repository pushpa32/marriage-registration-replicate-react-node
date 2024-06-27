import express from "express"
import { form } from "./form/form.js"
import { district } from "./district.js"
import { user } from "./user.js"
import { role } from "./role.js"
import { kazi } from "./users/kazi.js"
import { state } from "./state.js"
import { dashboard } from "./form/dashbaord.js"

export const api = express.Router()

api.use('/form', form)
api.use('/district', district)
api.use('/state', state)
api.use('/user', user)
api.use('/role', role)

api.use('/kazi', kazi)

// dashboard
api.use('/dashboard', dashboard)

