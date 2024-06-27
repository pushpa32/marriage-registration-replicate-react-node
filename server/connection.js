import dotenv from "dotenv"
import { Sequelize } from "sequelize"

dotenv.config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
// const DB_PORT = process.env.DB_PORT

export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    // port: DB_PORT,
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => {
        console.log('Database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });