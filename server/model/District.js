import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const District = sequelize.define("districts", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lgd_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dist_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, //0-> inactive 1-> active
        allowNull: false,
    }
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default District;