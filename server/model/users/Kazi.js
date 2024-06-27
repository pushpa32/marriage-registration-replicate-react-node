import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";

const Kazi = sequelize.define("kazis", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    district_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    office_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    office_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    assosciated_sro: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: '[]',
        get: function () {
            return JSON.parse(this.getDataValue('assosciated_sro'));
        },
        set: function (val) {
            this.setDataValue('assosciated_sro', JSON.stringify(val));
        }
    },
    document_path: {
        type: DataTypes.STRING,
        allowNull: true
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

export default Kazi;