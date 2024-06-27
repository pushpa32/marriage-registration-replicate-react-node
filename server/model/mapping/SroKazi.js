import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";

const SroKazi = sequelize.define("sro_kazi_map", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    sro_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kazi_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default SroKazi;