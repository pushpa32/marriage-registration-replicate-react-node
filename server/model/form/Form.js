import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";

const Form = sequelize.define("forms", {
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
    non_verified: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    accept: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    rejected: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    query_status: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    query_text: {
        type: DataTypes.STRING,
        allowNull: true
    },
    query_response: { // edit and came for reverification
        type: DataTypes.INTEGER,
        allowNull: true
    },
    upload_image: { // verified and cretificate generated
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    certificate_generate: { // verified and cretificate generated
        type: DataTypes.INTEGER,
        allowNull: true
    },
    upload_certificate: { // signed and upload certificate
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    delivered: { // certificate scanned and uploaded
        type: DataTypes.INTEGER,
        allowNull: true
    },
    // non-verified   / Accept  / sent to query (stastus/query text) / query response (re verification) / certificate generate/ Delivered(certificate generate , signed and upload)
    //mantain a separate log table for the query response (re verification), sent time and recieved time (column)
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default Form;