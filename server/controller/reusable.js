import Form from "../model/form/Form.js";
import Kazi from "../model/users/Kazi.js";
import crypto from "crypto";
import dotenv from "dotenv"
import xlsx from 'xlsx';
import paths from 'path'
import GeneratedCertificate from "../model/form/GeneratedCertificate.js";

dotenv.config()
export async function generateApplicantNumber() {
    const currentYear = new Date().getFullYear();

    //check the last applicant number from database
    const lastApplicant = await Form.findOne({
        attributes: ['application_id'],
        order: [['created_at', 'DESC']],
    });

    let numericPortion = 1; // Default numeric portion if no previous applicant exists

    if (lastApplicant) {
        console.log(lastApplicant);
        // Extract the numeric portion from the last applicant number
        const lastNumericPortion = parseInt(lastApplicant.application_id.split('/').pop(), 10);
        if (!isNaN(lastNumericPortion)) {
            numericPortion = lastNumericPortion + 1;
        }
    }

    const applicantNumber = `APPLICANT/${currentYear}/${numericPortion.toString().padStart(2, '0')}`;

    // Return the generated applicant number
    return applicantNumber;
}

export async function generateKaziUserId() {

    //check the last applicant number from database
    const lastKazi = await Kazi.findOne({
        attributes: ['userid'],
        order: [['created_at', 'DESC']],
    });

    let kaziId = '0001';

    if (lastKazi) {
        const kaziIdNum = parseInt(lastKazi.userid.substring(4));
        const newUserIdNum = kaziIdNum + 1;
        const paddedNewUserIdNum = String(newUserIdNum).padStart(4, '0');
        kaziId = paddedNewUserIdNum;
    }
    return `KAZI${kaziId}`

}


export async function generateOtherUserId(dbConnection, userType) { //Dc sro, igr, aigr
    const lastUser = await dbConnection.findOne({
        attributes: ['userid'],
        order: [['created_at', 'DESC']],
    });

    let userId = 1;

    if (lastUser) {
        const lastUserId = lastUser.userid;
        const lastUserNumber = parseInt(lastUserId.replace(userType, ''));
        userId = lastUserNumber + 1;
    }

    return `${userType}${userId}`;
}

export async function generateCommonPassword() { //Dc sro, igr, aigr
    return crypto
        .createHmac("sha256", process.env.PASSWORD_KEY)
        .update("Password@123")
        .digest("hex");
}

// file upload
export async function uploadFile(folderName, file) {
    // const max_size = 5242880
    // if (file.size > max_size) throw Error('Max file is 5MB')

    const fileName = new Date().getTime() + paths.extname(file.name)
    const path = './public/upload/' + folderName + '/' + fileName

    file.mv(path)

    return '/upload/' + folderName + '/' + fileName;
}

// excel
export function readMcqExcel(fileData) {
    const file = xlsx.read(fileData.file.data, {
        type: "buffer",
        cellDates: true,
        cellNF: false,
        cellText: false,
    });
    const sheetName = file.SheetNames[0];
    const worksheet = file.Sheets[sheetName];
    const range = xlsx.utils.decode_range(worksheet['!ref']);
    range.s.r = 1;
    const data = [];
    for (let r = range.s.r; r <= range.e.r; r++) {
        const row = [];
        for (let c = range.s.c; c <= range.e.c; c++) {
            const cellAddress = xlsx.utils.encode_cell({ r, c });
            const cell = worksheet[cellAddress];
            row.push(cell ? cell.v : null);
        }
        data.push(row);
    }
    return data;
}


export async function generateMarraigeCertificateNo() {
    // pattern MRG/000000/YEAR
    const currentYear = new Date().getFullYear();

    const lastCertificate = await GeneratedCertificate.findOne({
        attributes: ['certificate_no'],
        order: [['created_at', 'DESC']],
    });

    let numericPortion = 1;

    if (lastCertificate) {
        console.log(lastCertificate.certificate_no);
        const parts = lastCertificate.certificate_no.split('/');
        const lastYearSaved = parseInt(parts[2], 10);
        const middleNumber = parseInt(parts[1]);

        if (lastYearSaved === currentYear.toString) {
            numericPortion = middleNumber + 1;
        } else {
            numericPortion = 1;
        }

    }

    const formattedNumericPortion = numericPortion.toString().padStart(6, '0');
    const certificateNo = `MRG/${formattedNumericPortion}/${currentYear}`;
    return certificateNo;
}
