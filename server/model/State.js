import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const State = sequelize.define("states", {
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
}, {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default State;

// ALTER TABLE states
// ALTER COLUMN updated_at SET DEFAULT CURRENT_TIMESTAMP;

// INSERT INTO states (name) VALUES
// ('Andaman Nicobar'),
// ('Andhra Pradesh'),
// ('Arunachal Pradesh'),
// ('Assam'),
// ('Bihar'),
// ('Chandigarh'),
// ('Chhattisgarh'),
// ('Dadra and Nagar Haveli and Daman and Diu'),
// ('Delhi'),
// ('Goa'),
// ('Gujarat'),
// ('Haryana'),
// ('Himachal Pradesh'),
// ('Jammu Kashmir'),
// ('Jharkhand'),
// ('Karnataka'),
// ('Kerala'),
// ('Ladakh'),
// ('Lakshadweep'),
// ('Madhya Pradesh'),
// ('Maharashtra'),
// ('Manipur'),
// ('Meghalaya'),
// ('Mizoram'),
// ('Nagaland'),
// ('Odisha'),
// ('Puducherry'),
// ('Punjab'),
// ('Rajasthan'),
// ('Sikkim'),
// ('Tamil Nadu'),
// ('Telangana'),
// ('Tripura'),
// ('Uttar Pradesh'),
// ('Uttarakhand'),
// ('West Bengal');