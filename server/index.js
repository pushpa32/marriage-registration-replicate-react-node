import express from "express"
import './connection.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
import { api } from "./router/_api.js"
import './database_sync.js'
import fileUpload from 'express-fileupload'
import { fileURLToPath } from 'url'
import path from 'path'


const PORT = process.env.PORT || 5000
const app = express()

app.use(
    cors({
        origin: "*",
        methods: ['GET', 'POST'],
        // allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    })
)

app.use(fileUpload({
    createParentPath: true
}));

const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

app.use(express.static('public'));

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.listen(PORT,
    () => console.log(`Server Started on port ${PORT}...`))

app.use("/api", api)