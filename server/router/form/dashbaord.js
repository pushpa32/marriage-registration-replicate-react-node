import express from 'express'
import * as dash from '../../controller/form/dashboard.js'

export const dashboard = express.Router()

dashboard.get('/kazi', dash.kaziDashboard)