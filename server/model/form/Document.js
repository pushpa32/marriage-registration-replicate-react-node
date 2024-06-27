import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";
import { isEmailValidator, lengthValidator, notEmptyValidator } from "../../util/modelValidation.js";

const Document = sequelize.define("documents", {
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
    bride_identity_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Bride Identity Proof Type'
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride Identity Proof Type"),
        }
    },
    bride_identity_doc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Bride Identity Proof Document'
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride Identity Proof Document"),
        }
    },
    groom_identity_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Groom Identity Proof Type'
            },
            notEmpty: (value) => notEmptyValidator(value, "Groom Identity Proof Type"),
        }
    },
    groom_identity_doc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Groom Identity Proof Document'
            },
            notEmpty: (value) => notEmptyValidator(value, "Groom Identity Proof Document"),
        }
    },
    bride_age_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Bride Age Proof Type'
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride Age Proof Type"),
        }
    },
    bride_age_doc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Bride Age Proof Document'
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride Age Proof Document"),
        }
    },
    groom_age_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Groom Age Proof Type'
            },
            notEmpty: (value) => notEmptyValidator(value, "Groom Age Proof Type"),
        }
    },
    groom_age_doc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Groom Age Proof Document'
            },
            notEmpty: (value) => notEmptyValidator(value, "Groom Age Proof Document"),
        }
    },
    bride_present_address_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Bride present Address Proof Type'
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride present Address Proof Type"),
        }
    },
    bride_present_address_doc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Bride present Address Proof Document'
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride present Address Proof Document"),
        }
    },
    groom_present_address_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Groom present Address Proof Type'
            },
            notEmpty: (value) => notEmptyValidator(value, "Groom present Address Proof Type"),
        }
    },
    groom_present_address_doc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Groom present Address Proof Document'
            },
            notEmpty: (value) => notEmptyValidator(value, "Groom present Address Proof Document"),
        }
    },
    bride_permanent_address_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Bride permanent Address Proof Type'
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride permanent Address Proof Type"),
        }
    },
    bride_permanent_address_doc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Bride permanent Address Proof Document'
            },
            notEmpty: (value) => notEmptyValidator(value, "Bride permanent Address Proof Document"),
        }
    },
    groom_permanent_address_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Groom permanent Address Proof Type'
            },
            notEmpty: (value) => notEmptyValidator(value, "Groom permanent Address Proof Type"),
        }
    },
    groom_permanent_address_doc: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide Groom permanent Address Proof Document'
            },
            notEmpty: (value) => notEmptyValidator(value, "Groom permanent Address Proof Document"),
        }
    },
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default Document;