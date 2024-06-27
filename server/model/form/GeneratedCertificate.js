import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";
import { notEmptyValidator } from "../../util/modelValidation.js";

const GeneratedCertificate = sequelize.define("generated_certificates", {
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
    certificate_no: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide certificate no'
            },
            notEmpty: (value) => notEmptyValidator(value, "certificate no"),
        }
    },
    generated_Certificate_path: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide generated certificate'
            },
            notEmpty: (value) => notEmptyValidator(value, "generated certificate"),
        }
    },
    
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default GeneratedCertificate;