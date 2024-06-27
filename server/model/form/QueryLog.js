import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";

const QueryLog = sequelize.define("query_logs", {
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
    query_text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_verified: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    sent_timestamp: {
        type: DataTypes.DATE,
        allowNull: false
    },
    recieved_timestamp: {
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default QueryLog;