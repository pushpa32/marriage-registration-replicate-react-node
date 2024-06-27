import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";
import { isEmailValidator, lengthValidator, notEmptyValidator } from "../../util/modelValidation.js";

const OtherDetails = sequelize.define("other_details", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    application_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lawyer_prefix: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Lawyer Prefix'
            },
            notEmpty: (value) => notEmptyValidator(value, "Lawyer Prefix"),
        }
    },
    lawyer_first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Lawyer First Name'
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Lawyer First Name"),
            notEmpty: (value) => notEmptyValidator(value, "Lawyer First Name"),
        }
    },
    lawyer_middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lawyer_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Lawyer Last Name'
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Lawyer Last Name"),
            notEmpty: (value) => notEmptyValidator(value, "Lawyer Last Name"),
        }
    },
    lawyer_gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Lawyer'
            },
            notEmpty: (value) => notEmptyValidator(value, "Lawyer"),
        }
    },
    lawyer_phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Lawyer's Phone Number"
            },
            notEmpty: (value) => notEmptyValidator(value, "Lawyer's Phone Number"),
        }
    },
    lawyer_state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Lawyer's State"
            },
            notEmpty: (value) => notEmptyValidator(value, "Lawyer's State"),
        }
    },
    lawyer_district: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Lawyer's District"
            },
            notEmpty: (value) => notEmptyValidator(value, "Lawyer's District"),
        }
    },
    lawyer_villagetowncity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Lawyer's address Village/City"
            },
            notEmpty: (value) => notEmptyValidator(value, "Lawyer's address Village/City"),
        }
    },
    lawyer_policestation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Lawyer's address Police Station"
            },
            notEmpty: (value) => notEmptyValidator(value, "Lawyer's address Police Station"),
        }
    },
    lawyer_postoffice: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Lawyer's address Post Office"
            },
            notEmpty: (value) => notEmptyValidator(value, "Lawyer's address Post Office"),
        }
    },
    lawyer_pincode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Lawyer's address Pin Code"
            },
            notEmpty: (value) => notEmptyValidator(value, "Lawyer's address Pin Code"),
        }
    },

    // WItness 1
    witness1_prefix: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Witness 1 Prefix'
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 1 Prefix"),
        }
    },
    witness1_first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Witness 1 First Name'
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Witness 1 First Name"),
            notEmpty: (value) => notEmptyValidator(value, "Witness 1 First Name"),
        }
    },
    witness1_middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    witness1_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Witness 1 Last Name'
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Witness 1 Last Name"),
            notEmpty: (value) => notEmptyValidator(value, "Witness 1 Last Name"),
        }
    },
    witness1_gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Witness 1'
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 1"),
        }
    },
    witness1_phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 1's Phone Number"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 1's Phone Number"),
        }
    },
    witness1_state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 1's State"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 1's State"),
        }
    },
    witness1_district: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 1's District"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 1's District"),
        }
    },
    witness1_villagetowncity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 1's address Village/City"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 1's address Village/City"),
        }
    },
    witness1_policestation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 1's address Police Station"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 1's address Police Station"),
        }
    },
    witness1_postoffice: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 1's address Post Office"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 1's address Post Office"),
        }
    },
    witness1_pincode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 1's address Pin Code"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 1's address Pin Code"),
        }
    },


    // witness 2
    witness2_prefix: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Witness 2 Prefix'
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 2 Prefix"),
        }
    },
    witness2_first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Witness 2 First Name'
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Witness 2 First Name"),
            notEmpty: (value) => notEmptyValidator(value, "Witness 2 First Name"),
        }
    },
    witness2_middle_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    witness2_last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Witness 2 Last Name'
            },
            len: (value) => lengthValidator(value, 2, 50, "Applicant Witness 2 Last Name"),
            notEmpty: (value) => notEmptyValidator(value, "Witness 2 Last Name"),
        }
    },
    witness2_gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Witness 2'
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 2"),
        }
    },
    witness2_phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 2's Phone Number"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 2's Phone Number"),
        }
    },
    witness2_state: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 2's State"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 2's State"),
        }
    },
    witness2_district: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 2's District"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 2's District"),
        }
    },
    witness2_villagetowncity: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 2's address Village/City"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 2's address Village/City"),
        }
    },
    witness2_policestation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 2's address Police Station"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 2's address Police Station"),
        }
    },
    witness2_postoffice: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 2's address Post Office"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 2's address Post Office"),
        }
    },
    witness2_pincode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide Witness 2's address Pin Code"
            },
            notEmpty: (value) => notEmptyValidator(value, "Witness 2's address Pin Code"),
        }
    },
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default OtherDetails;