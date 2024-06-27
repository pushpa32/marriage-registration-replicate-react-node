import { sequelize } from "./connection.js";
import Role from "./model/Role.js";
import User from "./model/User.js";
import Country from "./model/Country.js";
import State from "./model/State.js";
import QueryLog from "./model/form/QueryLog.js";

sequelize.sync()
    .then(() => {
        console.log('Database and tables created!');
    })
    .catch((err) => {
        console.log('Error:', err);
    });