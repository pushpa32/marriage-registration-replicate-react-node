import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";
import { isEmailValidator, lengthValidator, notEmptyValidator } from "../../util/modelValidation.js";

const Applicant = sequelize.define("applicants", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    application_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Applicant Id'
            },
            notEmpty: (value) => notEmptyValidator(value, "Applicant Id"),
        }
    },
    prefix: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Applicant Prefix'
            },
            notEmpty: (value) => notEmptyValidator(value, "Applicant Prefix"),
        }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Applicant First Name'
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant First Name"),
            notEmpty: (value) => notEmptyValidator(value, "Applicant First Name"),
        }
    },
    middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Applicant Last Name'
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Last Name"),
            notEmpty: (value) => notEmptyValidator(value, "Applicant Last Name"),
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Applicant Phone Number'
            },
            len: (value) => lengthValidator(value, 10, 10, "Applicant Phone Number"),
            notEmpty: (value) => notEmptyValidator(value, "Applicant Phone Number"),
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Applicant Email'
            },
            isEmail: (value) => isEmailValidator(value, "Applicant"),
            notEmpty: (value) => notEmptyValidator(value, "Applicant Email"),
        }

    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Applicant Gender'
            },
            notEmpty: (value) => notEmptyValidator(value, "Applicant Gender"),
        }
    },
    district_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide District'
            },
        }
    },
    office_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Office Id'
            },
        }
    },
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default Applicant;