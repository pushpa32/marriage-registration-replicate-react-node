import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";
import { notEmptyValidator } from "../../util/modelValidation.js";

const Capture = sequelize.define("image_captures", {
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
    image_path: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide captured image'
            },
            notEmpty: (value) => notEmptyValidator(value, "captured image"),
        }
    },
    
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default Capture;