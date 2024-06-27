import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { isEmailValidator, lengthValidator, notEmptyValidator } from "../util/modelValidation.js";

const Test = sequelize.define("test", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Applicant Name'
            },
            len: (value) => lengthValidator(value, 4, 10, "Applicant Name"),
            notEmpty: (value) => notEmptyValidator(value, "Applicant Name"),
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: (value) => isEmailValidator(value, "Applicant"),
        }
    },
    // doc: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // },

}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default Test;