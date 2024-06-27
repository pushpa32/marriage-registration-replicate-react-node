import { DataTypes } from "sequelize";
import { sequelize } from "../../connection.js";

const Dc = sequelize.define("dcs", {
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
    name: {
        type: DataTypes.STRING,
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
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
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

export default Dc;


// INSERT INTO dcs (id, userid, district_id, name, office_name, office_address, phone, email, status, created_at, updated_at)
// VALUES
// (1, 'DC1', 1, 'DC Bajali', 'Bajali', 'DC Office Bajali', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (2, 'DC2', 2, 'DC Baksa', 'Baksa', 'DC Office Baksa', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (3, 'DC3', 3, 'DC Barpeta', 'Barpeta', 'DC Office Barpeta', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (4, 'DC4', 4, 'DC Biswanath', 'Biswanath', 'DC Office Biswanath', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (5, 'DC5', 5, 'DC Bongaigaon', 'Bongaigaon', 'DC Office Bongaigaon', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (6, 'DC6', 6, 'DC Cachar', 'Cachar', 'DC Office Cachar', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (7, 'DC7', 7, 'DC Charaideo', 'Charaideo', 'DC Office Charaideo', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (8, 'DC8', 8, 'DC Chirang', 'Chirang', 'DC Office Chirang', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (9, 'DC9', 9, 'DC Darrang', 'Darrang', 'DC Office Darrang', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (10, 'DC10', 10, 'DC Dhemaji', 'Dhemaji', 'DC Office Dhemaji', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (11, 'DC11', 11, 'DC Dhubri', 'Dhubri', 'DC Office Dhubri', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (12, 'DC12', 12, 'DC Dibrugarh', 'Dibrugarh', 'DC Office Dibrugarh', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (13, 'DC13', 13, 'DC Dima Hasao', 'Dima Hasao', 'DC Office Dima Hasao', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (14, 'DC14', 14, 'DC Goalpara', 'Goalpara', 'DC Office Goalpara', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (15, 'DC15', 15, 'DC Golaghat', 'Golaghat', 'DC Office Golaghat', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (16, 'DC16', 16, 'DC Hailakandi', 'Hailakandi', 'DC Office Hailakandi', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (17, 'DC17', 17, 'DC Hojai', 'Hojai', 'DC Office Hojai', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (18, 'DC18', 18, 'DC Jorhat', 'Jorhat', 'DC Office Jorhat', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (19, 'DC19', 19, 'DC Kamrup', 'Kamrup', 'DC Office Kamrup', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (20, 'DC20', 20, 'DC Kamrup Metropolitan', 'Kamrup Metropolitan', 'DC Office Kamrup Metropolitan', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (21, 'DC21', 21, 'DC Karbi Anglong', 'Karbi Anglong', 'DC Office Karbi Anglong', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (22, 'DC22', 22, 'DC Karimganj', 'Karimganj', 'DC Office Karimganj', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (23, 'DC23', 23, 'DC Kokrajhar', 'Kokrajhar', 'DC Office Kokrajhar', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (24, 'DC24', 24, 'DC Lakhimpur', 'Lakhimpur', 'DC Office Lakhimpur', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (25, 'DC25', 25, 'DC Majuli', 'Majuli', 'DC Office Majuli', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (26, 'DC26', 26, 'DC Morigaon', 'Morigaon', 'DC Office Morigaon', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (27, 'DC27', 27, 'DC Nagaon', 'Nagaon', 'DC Office Nagaon', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (28, 'DC28', 28, 'DC Nalbari', 'Nalbari', 'DC Office Nalbari', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (29, 'DC29', 29, 'DC Sivasagar', 'Sivasagar', 'DC Office Sivasagar', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (30, 'DC30', 30, 'DC Sonitpur', 'Sonitpur', 'DC Office Sonitpur', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (31, 'DC31', 31, 'DC South Salmara Mankachar', 'South Salmara Mankachar', 'DC Office South Salmara Mankachar', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (32, 'DC32', 32, 'DC Tamulpur', 'Tamulpur', 'DC Office Tamulpur', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (33, 'DC33', 33, 'DC Tinsukia', 'Tinsukia', 'DC Office Tinsukia', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (34, 'DC34', 34, 'DC Udalguri', 'Udalguri', 'DC Office Udalguri', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9'),
// (35, 'DC35', 35, 'DC West Karbi Anglong', 'West Karbi Anglong', 'DC Office West Karbi Anglong', NULL, NULL, TRUE, '2023-07-02 00:53:46.9', '2023-07-02 00:53:46.9');
