import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";
import { isEmailValidator, lengthValidator, notEmptyValidator } from "../../util/modelValidation.js";

const Groom = sequelize.define("grooms", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    application_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prefix: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Bride Prefix'
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride Prefix"),
        }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Bride First Name'
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Bride First Name"),
            notEmpty: (value) => notEmptyValidator(value, "Bride First Name"),
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
                msg: 'Provide Bride Last Name'
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Bride Last Name"),
            notEmpty: (value) => notEmptyValidator(value, "Bride Last Name"),
        }
    },
    father_prefix: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Father's Prefix"
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Bride's Father's Prefix"),
            notEmpty: (value) => notEmptyValidator(value, "Bride's Father's Prefix"),
        }
    },
    father_first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Father's First Name"
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Bride's Father's First Name"),
            notEmpty: (value) => notEmptyValidator(value, "Bride's Father's First Name"),
        }
    },
    father_middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    father_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Father's Last Name"
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Bride's Father's Last Name"),
            notEmpty: (value) => notEmptyValidator(value, "Bride's Father's Last Name"),
        }
    },
    mother_prefix: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Mother's Prefix"
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Bride's Mother's Prefix"),
            notEmpty: (value) => notEmptyValidator(value, "Bride's Mother's Prefix"),
        }
    },
    mother_first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Mother's First Name"
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Bride's Mother's First Name"),
            notEmpty: (value) => notEmptyValidator(value, "Bride's Mother's First Name"),
        }
    },
    mother_middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mother_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Mother's Last Name"
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Bride's Mother's Last Name"),
            notEmpty: (value) => notEmptyValidator(value, "Bride's Mother's Last Name"),
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Status"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Status"),
        }
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Occupation"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Occupation"),
        }
    },
    dob: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Date of Birth"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Date of Birth"),
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Phone Number"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Phone Number"),
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Email"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Email"),
        }
    },
    isdisability: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Disability(If Any)"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Disability(If Any)"),
        }
    },
    disability: {
        type: DataTypes.STRING,
        allowNull: true
    },

    present_country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Present address Country"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Present address Country"),
        }
    },
    present_state_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    present_province: {
        type: DataTypes.STRING,
        allowNull: true
    },
    present_district: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    present_villagetowncity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Present address Village/City"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Present address Village/City"),
        }
    },
    present_policestation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    present_postoffice: {
        type: DataTypes.STRING,
        allowNull: true
    },
    present_addressline1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    present_addressline2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    present_pincode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Present address Pin Code"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Present address Pin Code"),
        }
    },
    present_lac: {
        type: DataTypes.STRING,
        allowNull: false
    },
    present_residencyperiodmonth: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Present address Residency Month"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Present address Residency Month"),
        }
    },
    present_residencyperiodyear: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Bride's Present address Residency Year"
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride's Present address Residency Year"),
        }
    },

    is_permanent_same_as_present: {
        type: DataTypes.STRING,
        allowNull: false
    },

    permanent_country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    permanent_state_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    permanent_province: {
        type: DataTypes.STRING,
        allowNull: true
    },
    permanent_district: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    permanent_villagetowncity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permanent_policestation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    permanent_postOffice: {
        type: DataTypes.STRING,
        allowNull: true
    },
    permanent_addressline1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    permanent_addressline2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    permanent_pincode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permanent_lac: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permanent_residencyperiodmonth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permanent_residencyperiodyear: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default Groom;