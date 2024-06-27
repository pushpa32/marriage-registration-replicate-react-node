import { sequelize } from "../../connection.js";
import { __dirname } from "../../index.js";
import Applicant from "../../model/form/Applicant.js";
import Bride from "../../model/form/Bride.js";
import Capture from "../../model/form/Capture.js";
import Document from "../../model/form/Document.js";
import Form from "../../model/form/Form.js";
import GeneratedCertificate from "../../model/form/GeneratedCertificate.js";
import Groom from "../../model/form/Groom.js";
import OtherDetails from "../../model/form/Other.js";
import QueryLog from "../../model/form/QueryLog.js";
import UploadCertificate from "../../model/form/UploadCertificate.js";
import { generateApplicantNumber, generateMarraigeCertificateNo, uploadFile } from "../reusable.js"
import mime from 'mime-types';
import path from 'path'
import { fileURLToPath } from 'url';


export async function checkFileMime(file, name) {
    try {
        if (file === null || file === undefined) {
            throw new Error(name + ": File is empty.");
        }
        const allowedMimeTypes = ['application/pdf', 'image/jpeg', 'image/png'];
        const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes

        const mimeType = mime.lookup(file.name);
        const fileSize = file.size;


        if (!allowedMimeTypes.includes(mimeType)) {
            throw new Error(name + ": Invalid file type. Only PDF and image files are allowed.");
        }

        if (fileSize > maxFileSize) {
            throw new Error(name + ": File size exceeds the limit. Maximum file size is 5MB.");
        }

    } catch (err) {
        throw err;
    }
}

export const saveForm = async (req, res) => {
    const out = {}
    try {

        const stepOneData = JSON.parse(req.body.stepOneData);
        const stepTwoData = JSON.parse(req.body.stepTwoData);
        const stepThreeData = JSON.parse(req.body.stepThreeData);
        const stepFourData = JSON.parse(req.body.stepFourData);
        const stepFiveData = JSON.parse(req.body.stepFiveData);

        const brideidentitydoc = req.files.brideidentitydoc;
        const groomidentitydoc = req.files.groomidentitydoc;
        const brideageproofdoc = req.files.brideageproofdoc;
        const groomageproofdoc = req.files.groomageproofdoc;
        const bridepresentaddressdoc = req.files.bridepresentaddressdoc;
        const bridepermanentaddressdoc = req.files.bridepermanentaddressdoc;
        const groompresentaddressdoc = req.files.groompresentaddressdoc;
        const groompermanentaddressdoc = req.files.groompermanentaddressdoc;

        checkFileMime(brideidentitydoc, "Bride Identity");
        checkFileMime(groomidentitydoc, "Groom Identity");
        checkFileMime(brideageproofdoc, "Bride Age Proof");
        checkFileMime(groomageproofdoc, "Groom Age Proof");
        checkFileMime(bridepresentaddressdoc, "Bride Present Address Proof");
        checkFileMime(groompresentaddressdoc, "Groom Present Address Proof");
        checkFileMime(bridepermanentaddressdoc, "Bride Permanent Address Proof");
        checkFileMime(groompermanentaddressdoc, "Groom Permanent Address Proof");

        const brideidentitydocPath = uploadFile('doc', brideidentitydoc);
        const groomidentitydocPath = uploadFile('doc', groomidentitydoc);
        const brideageproofdocPath = uploadFile('doc', brideageproofdoc);
        const groomageproofdocPath = uploadFile('doc', groomageproofdoc);
        const bridepresentaddressdocPath = uploadFile('doc', bridepresentaddressdoc);
        const groompresentaddressdocPath = uploadFile('doc', groompresentaddressdoc);
        const bridepermanentaddressdocPath = uploadFile('doc', bridepermanentaddressdoc);
        const groompermanentaddressdocPath = uploadFile('doc', groompermanentaddressdoc);

        const applicanNo = await generateApplicantNumber();

        const applicantData = {
            application_id: applicanNo,
            prefix: stepOneData.prefix.value,
            first_name: stepOneData.firstName,
            middle_name: stepOneData.middleName,
            last_name: stepOneData.lastName,
            phone: stepOneData.phone,
            email: stepOneData.email,
            gender: stepOneData.gender.value,
            district_id: stepOneData.district.value,
            office_id: stepOneData.office.value,
        }

        const brideData = {
            application_id: applicanNo,
            prefix: stepTwoData.prefix.value,
            first_name: stepTwoData.firstName,
            middle_name: stepTwoData.middleName,
            last_name: stepTwoData.lastName,

            father_prefix: stepTwoData.fatherprefix.value,
            father_first_name: stepTwoData.fatherfirstName,
            father_middle_name: stepTwoData.fathermiddleName,
            father_last_name: stepTwoData.fatherlastName,

            mother_prefix: stepTwoData.motherprefix.value,
            mother_first_name: stepTwoData.motherfirstName,
            mother_middle_name: stepTwoData.mothermiddleName,
            mother_last_name: stepTwoData.motherlastName,

            status: stepTwoData.status.value,
            occupation: stepTwoData.occupation.value,
            dob: stepTwoData.dob,
            phone: stepTwoData.phone,
            email: stepTwoData.email,
            isdisability: stepTwoData.isdisability.value,
            disability: stepTwoData.disability.value,

            present_country_id: stepTwoData.presentcountry.value,
            present_state_id: stepTwoData.presentstate.value,
            present_province: stepTwoData.presentprovince,
            present_district: stepTwoData.presentdistrict.value,
            present_villagetowncity: stepTwoData.presentvillagetowncity,
            present_policestation: stepTwoData.presentpolicestation,
            present_postoffice: stepTwoData.presentpostOffice,
            present_addressline1: stepTwoData.presentaddressline1,
            present_addressline2: stepTwoData.presentaddressline2,
            present_pincode: stepTwoData.presentpincode,
            present_lac: "LAC",
            present_residencyperiodmonth: stepTwoData.presentresidencyperiodmonth.value,
            present_residencyperiodyear: stepTwoData.presentresidencyperiodyear.value,

            is_permanent_same_as_present: stepTwoData.ispermanentsameaspresent === "yes" ? "yes" : "no",

            permanent_country_id: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentcountry.value : stepTwoData.permanentcountry.value,
            permanent_state_id: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentstate.value : stepTwoData.permanentstate.value,
            permanent_province: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentprovince : stepTwoData.permanentprovince,
            permanent_district: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentdistrict.value : stepTwoData.permanentdistrict.value,
            permanent_villagetowncity: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentvillagetowncity : stepTwoData.permanentvillagetowncity,
            permanent_policestation: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentpolicestation : stepTwoData.permanentpolicestation,
            permanent_postOffice: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentpostOffice : stepTwoData.permanentpostOffice,
            permanent_addressline1: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentaddressline1 : stepTwoData.permanentaddressline1,
            permanent_addressline2: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentaddressline2 : stepTwoData.permanentaddressline2,
            permanent_pincode: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentpincode : stepTwoData.permanentpincode,
            permanent_lac: stepTwoData.ispermanentsameaspresent === "yes" ? "LAC" : "LAC",
            permanent_residencyperiodmonth: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentresidencyperiodmonth.value : stepTwoData.permanentresidencyperiodmonth.value,
            permanent_residencyperiodyear: stepTwoData.ispermanentsameaspresent === "yes" ? stepTwoData.presentresidencyperiodyear.value : stepTwoData.permanentresidencyperiodyear.value,

        }

        const groomData = {
            application_id: applicanNo,
            prefix: stepThreeData.prefix.value,
            first_name: stepThreeData.firstName,
            middle_name: stepThreeData.middleName,
            last_name: stepThreeData.lastName,

            father_prefix: stepThreeData.fatherprefix.value,
            father_first_name: stepThreeData.fatherfirstName,
            father_middle_name: stepThreeData.fathermiddleName,
            father_last_name: stepThreeData.fatherlastName,

            mother_prefix: stepThreeData.motherprefix.value,
            mother_first_name: stepThreeData.motherfirstName,
            mother_middle_name: stepThreeData.mothermiddleName,
            mother_last_name: stepThreeData.motherlastName,

            status: stepThreeData.status.value,
            occupation: stepThreeData.occupation.value,
            dob: stepThreeData.dob,
            phone: stepThreeData.phone,
            email: stepThreeData.email,
            isdisability: stepThreeData.isdisability.value,
            disability: stepThreeData.disability.value,

            present_country_id: stepThreeData.presentcountry.value,
            present_state_id: stepThreeData.presentstate.value,
            present_province: stepThreeData.presentprovince,
            present_district: stepThreeData.presentdistrict.value,
            present_villagetowncity: stepThreeData.presentvillagetowncity,
            present_policestation: stepThreeData.presentpolicestation,
            present_postoffice: stepThreeData.presentpostOffice,
            present_addressline1: stepThreeData.presentaddressline1,
            present_addressline2: stepThreeData.presentaddressline2,
            present_pincode: stepThreeData.presentpincode,
            present_lac: "LAC",
            present_residencyperiodmonth: stepThreeData.presentresidencyperiodmonth.value,
            present_residencyperiodyear: stepThreeData.presentresidencyperiodyear.value,

            is_permanent_same_as_present: stepThreeData.ispermanentsameaspresent === "yes" ? "yes" : "no",

            permanent_country_id: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentcountry.value : stepThreeData.permanentcountry.value,
            permanent_state_id: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentstate.value : stepThreeData.permanentstate.value,
            permanent_province: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentprovince : stepThreeData.permanentprovince,
            permanent_district: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentdistrict.value : stepThreeData.permanentdistrict.value,
            permanent_villagetowncity: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentvillagetowncity : stepThreeData.permanentvillagetowncity,
            permanent_policestation: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentpolicestation : stepThreeData.permanentpolicestation,
            permanent_postOffice: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentpostOffice : stepThreeData.permanentpostOffice,
            permanent_addressline1: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentaddressline1 : stepThreeData.permanentaddressline1,
            permanent_addressline2: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentaddressline2 : stepThreeData.permanentaddressline2,
            permanent_pincode: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentpincode : stepThreeData.permanentpincode,
            permanent_lac: stepThreeData.ispermanentsameaspresent === "yes" ? "LAC" : "LAC",
            permanent_residencyperiodmonth: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentresidencyperiodmonth.value : stepThreeData.permanentresidencyperiodmonth.value,
            permanent_residencyperiodyear: stepThreeData.ispermanentsameaspresent === "yes" ? stepThreeData.presentresidencyperiodyear.value : stepThreeData.permanentresidencyperiodyear.value,

        }

        const otherDetailsData = {
            application_id: applicanNo,

            lawyer_prefix: stepFourData.lawyerprefix.value,
            lawyer_first_name: stepFourData.lawyerfirstName,
            lawyer_middle_name: stepFourData.lawyermiddleName,
            lawyer_last_name: stepFourData.lawyerlastName,
            lawyer_gender: stepFourData.lawyergender.value,
            lawyer_phone: stepFourData.lawyerphone,
            lawyer_state: stepFourData.lawyerstate.value,
            lawyer_district: stepFourData.lawyerdistrict.value,
            lawyer_villagetowncity: stepFourData.lawyervillagetowncity,
            lawyer_policestation: stepFourData.lawyerpolicestation,
            lawyer_postoffice: stepFourData.lawyerpostoffice,
            lawyer_pincode: stepFourData.lawyerpincode,

            witness1_prefix: stepFourData.witness1prefix.value,
            witness1_first_name: stepFourData.witness1firstName,
            witness1_middle_name: stepFourData.witness1middleName,
            witness1_last_name: stepFourData.witness1lastName,
            witness1_gender: stepFourData.witness1gender.value,
            witness1_phone: stepFourData.witness1phone,
            witness1_state: stepFourData.witness1state.value,
            witness1_district: stepFourData.witness1district.value,
            witness1_villagetowncity: stepFourData.witness1villagetowncity,
            witness1_policestation: stepFourData.witness1policestation,
            witness1_postoffice: stepFourData.witness1postoffice,
            witness1_pincode: stepFourData.witness1pincode,

            witness2_prefix: stepFourData.witness2prefix.value,
            witness2_first_name: stepFourData.witness2firstName,
            witness2_middle_name: stepFourData.witness2middleName,
            witness2_last_name: stepFourData.witness2lastName,
            witness2_gender: stepFourData.witness2gender.value,
            witness2_phone: stepFourData.witness2phone,
            witness2_state: stepFourData.witness2state.value,
            witness2_district: stepFourData.witness2district.value,
            witness2_villagetowncity: stepFourData.witness2villagetowncity,
            witness2_policestation: stepFourData.witness2policestation,
            witness2_postoffice: stepFourData.witness2postoffice,
            witness2_pincode: stepFourData.witness2pincode,

        }

        const documentData = {
            application_id: applicanNo,

            bride_identity_type: stepFiveData.brideidentity.value,
            bride_identity_doc: (await brideidentitydocPath).toString(),
            groom_identity_type: stepFiveData.groomidentity.value,
            groom_identity_doc: (await groomidentitydocPath).toString(),
            bride_age_type: stepFiveData.brideageproof.value,
            bride_age_doc: (await brideageproofdocPath).toString(),
            groom_age_type: stepFiveData.groomageproof.value,
            groom_age_doc: (await groomageproofdocPath).toString(),
            bride_present_address_type: stepFiveData.bridepresentaddress.value,
            bride_present_address_doc: (await bridepresentaddressdocPath).toString(),
            groom_present_address_type: stepFiveData.bridepermanentaddress.value,
            groom_present_address_doc: (await groompresentaddressdocPath).toString(),
            bride_permanent_address_type: stepFiveData.groompresentaddress.value,
            bride_permanent_address_doc: (await bridepermanentaddressdocPath).toString(),
            groom_permanent_address_type: stepFiveData.groompermanentaddress.value,
            groom_permanent_address_doc: (await groompermanentaddressdocPath).toString(),
        }

        const applicantInstance = Applicant.build(applicantData);
        await applicantInstance.validate();
        const brideInstance = Bride.build(brideData);
        await brideInstance.validate();
        const groomInstance = Groom.build(groomData);
        await groomInstance.validate();
        const otherDetailsInstance = OtherDetails.build(otherDetailsData);
        await otherDetailsInstance.validate();
        const documentInstance = Document.build(documentData);
        await documentInstance.validate();


        await Form.create({
            application_id: applicanNo
        })
        await applicantInstance.save();
        await brideInstance.save();
        await groomInstance.save();
        await otherDetailsInstance.save();
        await documentInstance.save();

        out.message = "Successfully, Registered"
        out.error = false
        out.data = applicanNo

    } catch (err) {
        let tempErrorData = []
        console.log(err.message);
        if (err.message.includes('\n')) {
            const spilted = err.message.split('\n')
            for (let i = 0; i < spilted.length; i++) {
                const dd = spilted[i].includes(':') ? spilted[i].split(':')[1].trim() : spilted[i]
                tempErrorData.push(dd)
            }
        } else if (err.message.includes(':')) {
            tempErrorData.push(err.message.split(":")[1].trim())
        } else {
            tempErrorData.push(err.message)
        }
        out.error = true
        out.message = tempErrorData
        out.data = null
    } finally {
        res.send(out)
    }
}


export const getPendingApplications = async (req, res) => {
    const out = {}
    try {
        const data = await sequelize.query(
            "SELECT applicants.*, forms.id as formId, districts.name as district_name, kazis.office_name as office_name " +
            "FROM forms " +
            "JOIN applicants ON applicants.application_id = forms.application_id " +
            "JOIN districts ON districts.id = applicants.district_id " +
            "JOIN kazis ON kazis.id = applicants.office_id " +
            "Where forms.non_verified = :var " +
            "OR forms.query_response = :res ",
            {
                replacements: {
                    var: 0,
                    res: 1,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getRejectedApplications = async (req, res) => {
    const out = {}
    try {
        const data = await sequelize.query(
            "SELECT applicants.*, forms.id as formId, districts.name as district_name, kazis.office_name as office_name " +
            "FROM forms " +
            "JOIN applicants ON applicants.application_id = forms.application_id " +
            "JOIN districts ON districts.id = applicants.district_id " +
            "JOIN kazis ON kazis.id = applicants.office_id " +
            "Where forms.rejected = :stat ",
            {
                replacements: {
                    stat: 1,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getQueryApplications = async (req, res) => {
    const out = {}
    try {
        const data = await sequelize.query(
            `SELECT 
           applicants.*, 
           forms.id as formId, 
           forms.query_text as query_text, 
           districts.name as district_name, 
           kazis.office_name as office_name, 
           STRING_AGG(CONCAT(query_logs.query_text, ' (', query_logs.sent_timestamp, ')'), '/ ') as query_logs
       FROM 
           forms 
       JOIN 
           applicants ON applicants.application_id = forms.application_id 
       JOIN 
           districts ON districts.id = applicants.district_id 
       JOIN 
           kazis ON kazis.id = applicants.office_id 
       JOIN
           (
               SELECT
                   *
               FROM
                   query_logs
                order by created_at
           ) AS query_logs ON query_logs.application_id = applicants.application_id 
       WHERE 
           forms.query_status = :stat
       GROUP BY
           applicants.id, forms.id, forms.query_text, districts.name, kazis.office_name`,
            {
                replacements: {
                    stat: 1,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );
        console.log("asdasd", data);

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getQueryLogsHistoryByApplicationId = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")

        const data = await QueryLog.findAll({
            where: {
                application_id: req.body.application_id
            }
        })

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getImageCapturePendingList = async (req, res) => {
    const out = {}
    try {
        const data = await sequelize.query(
            "SELECT applicants.*, forms.id as formId, districts.name as district_name, kazis.office_name as office_name, CASE WHEN forms.upload_image = 0 THEN image_captures.image_path ELSE NULL END as image_path " +
            "FROM forms " +
            "JOIN applicants ON applicants.application_id = forms.application_id " +
            "JOIN districts ON districts.id = applicants.district_id " +
            "JOIN kazis ON kazis.id = applicants.office_id " +
            "LEFT JOIN image_captures ON image_captures.application_id = forms.application_id AND forms.upload_image = 0 " +
            "Where forms.accept = :stat AND forms.upload_image = :uploads",
            {
                replacements: {
                    stat: 1,
                    uploads: 0,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getGnerateCertificatePendingList = async (req, res) => {
    const out = {}
    try {
        const data = await sequelize.query(
            `SELECT applicants.*, forms.*, districts.name as district_name, kazis.office_name as office_name, CASE WHEN forms.upload_image = 0 THEN image_captures.image_path ELSE NULL END as image_path 
            FROM forms 
            JOIN applicants ON applicants.application_id = forms.application_id 
            JOIN districts ON districts.id = applicants.district_id 
            JOIN kazis ON kazis.id = applicants.office_id 
            LEFT JOIN image_captures ON image_captures.application_id = forms.application_id AND forms.upload_image = 0 
            Where forms.accept = :stat AND forms.upload_image = :uploads AND forms.upload_certificate = :uploadCertificate` ,
            {
                replacements: {
                    stat: 1,
                    uploads: 1,
                    uploadCertificate: 0,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getImageCaptureCompleteList = async (req, res) => {
    const out = {}
    try {
        const data = await sequelize.query(
            "SELECT applicants.*, forms.id as formId, districts.name as district_name, kazis.office_name as office_name " +
            "FROM forms " +
            "JOIN applicants ON applicants.application_id = forms.application_id " +
            "JOIN districts ON districts.id = applicants.district_id " +
            "JOIN kazis ON kazis.id = applicants.office_id " +
            "Where forms.accept = :stat AND forms.upload_image = :uploads AND forms.certificate_generate = :cer",
            {
                replacements: {
                    stat: 1,
                    uploads: 1,
                    cer: 0,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getDeliverPendingList = async (req, res) => {
    const out = {}
    try {
        const data = await sequelize.query(
            `SELECT applicants.*, forms.id as formId, districts.name as district_name, kazis.office_name as office_name 
           FROM forms 
           JOIN applicants ON applicants.application_id = forms.application_id 
           JOIN districts ON districts.id = applicants.district_id 
           JOIN kazis ON kazis.id = applicants.office_id 
           Where forms.accept = :stat AND forms.upload_image = :uploads AND forms.certificate_generate = :cerGen AND forms.upload_certificate = :uploadCer AND forms.delivered = :deliver`,
            {
                replacements: {
                    stat: 1,
                    uploads: 1,
                    cerGen: 1,
                    uploadCer: 1,
                    deliver: 0,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getSuccessfullList = async (req, res) => {
    const out = {}
    try {
        const data = await sequelize.query(
            `SELECT applicants.*, upload_certificates.certificate_path, forms.id as formId,forms.updated_at as delivered_date, districts.name as district_name, kazis.office_name as office_name 
           FROM forms 
           JOIN applicants ON applicants.application_id = forms.application_id 
           JOIN districts ON districts.id = applicants.district_id 
           JOIN kazis ON kazis.id = applicants.office_id 
           JOIN upload_certificates ON upload_certificates.application_id = forms.application_id 
           Where forms.accept = :stat AND forms.upload_image = :uploads AND forms.certificate_generate = :cerGen AND forms.upload_certificate = :uploadCer AND forms.delivered = :deliver`,
            {
                replacements: {
                    stat: 1,
                    uploads: 1,
                    cerGen: 1,
                    uploadCer: 1,
                    deliver: 1,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const saveImage = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")
        if (!req.files) throw Error("Provide Captured Image")

        const checkData = await Capture.findAll({
            where: {
                application_id: req.body.application_id
            }
        })

        const imagePath = uploadFile('captured', req.files.image);

        if (checkData.length === 0) {
            await Capture.create({
                application_id: req.body.application_id,
                image_path: (await imagePath).toString(),
            })
        } else {
            await Capture.update({
                image_path: (await imagePath).toString(),
            }, {
                where: {
                    application_id: req.body.application_id
                }
            })
        }

        await Form.update({
            upload_image: 1,
        }, {
            where: {
                application_id: req.body.application_id
            }
        })

        out.message = "Image saved successfully"
        out.error = false
        out.data = null

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const saveGeneratedCertificate = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")
        if (!req.body.certificateNo) throw Error("Provide Certificate No")
        if (!req.files) throw Error("Provide Certificate")


        const checkData = await GeneratedCertificate.findAll({
            where: {
                application_id: req.body.application_id
            }
        })

        const generatedCertificatepath = uploadFile('generated', req.files.pdfFile);

        if (checkData.length === 0) {
            await GeneratedCertificate.create({
                application_id: req.body.application_id,
                certificate_no: req.body.certificateNo,
                generated_Certificate_path: (await generatedCertificatepath).toString(),
            })
        } else {
            await GeneratedCertificate.update({
                generated_Certificate_path: (await generatedCertificatepath).toString(),
            }, {
                where: {
                    application_id: req.body.application_id
                }
            })
        }

        await Form.update({
            certificate_generate: 1,
        }, {
            where: {
                application_id: req.body.application_id
            }
        })

        out.message = "Certificate generated successfully, You Can download now!!"
        out.error = false
        out.data = null

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getGeneratedCertificateForDownload = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")

        const data = await GeneratedCertificate.findAll({
            where: {
                application_id: req.body.application_id
            }
        })
        const vv = path.join(__dirname, './public')
        const absoluteFilePath = path.join(vv, data[0].generated_Certificate_path)
        res.sendFile(absoluteFilePath);

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
        res.send(out)

    }
}


export const uploadSignedCertificate = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")
        if (!req.files) throw Error("Provide File to Upload")
        const checkData = await UploadCertificate.findAll({
            where: {
                application_id: req.body.application_id
            }
        })

        const certificatePath = uploadFile('certificate', req.files.uploadFile);

        if (checkData.length === 0) {
            await UploadCertificate.create({
                application_id: req.body.application_id,
                certificate_path: (await certificatePath).toString(),
            })
        } else {
            await UploadCertificate.update({
                certificate_path: (await certificatePath).toString(),
            }, {
                where: {
                    application_id: req.body.application_id
                }
            })
        }

        await Form.update({
            delivered: 0,
            upload_certificate: 1,
        }, {
            where: {
                application_id: req.body.application_id
            }
        })
        out.message = "Successfully Uploaded"
        out.error = false
        out.data = null

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null


    } finally {
        res.send(out)
    }
}

export const finalDeliver = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")
        await Form.update({
            delivered: 1,
        }, {
            where: {
                application_id: req.body.application_id
            }
        })
        out.message = "Successfully Delivered"
        out.error = false
        out.data = null

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null


    } finally {
        res.send(out)
    }
}


export const getGnerateCertificateCompleteList = async (req, res) => {
    const out = {}
    try {
        const data = await sequelize.query(
            "SELECT applicants.*, forms.id as formId, districts.name as district_name, kazis.office_name as office_name " +
            "FROM forms " +
            "JOIN applicants ON applicants.application_id = forms.application_id " +
            "JOIN districts ON districts.id = applicants.district_id " +
            "JOIN kazis ON kazis.id = applicants.office_id " +
            "Where forms.accept = :stat AND forms.upload_image = :uploads",
            {
                replacements: {
                    stat: 1,
                    uploads: 1,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getApplicantionDetails = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")

        const applicantData = await sequelize.query(
            "SELECT applicants.*, districts.name as district_name, kazis.office_name as office_name " +
            "FROM forms " +
            "JOIN applicants ON applicants.application_id = forms.application_id " +
            "JOIN districts ON districts.id = applicants.district_id " +
            "JOIN kazis ON kazis.id = applicants.office_id " +
            "Where forms.application_id = :appId ",
            {
                replacements: {
                    appId: req.body.application_id,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );
        const bridesData = await sequelize.query(
            `
            SELECT
            brides.*,
            presentCountry.name as present_country_name,
            CASE WHEN brides.present_country_id = 1 THEN presentState.name ELSE NULL END as present_state_name,
            CASE WHEN brides.present_country_id = 1 THEN presentDistrict.name ELSE NULL END as present_district_name,
            permanentCountry.name as permanent_country_name,
            CASE WHEN brides.permanent_country_id = 1 THEN permanentState.name ELSE NULL END as permanent_state_name,
            CASE WHEN brides.permanent_country_id = 1 THEN permanentDistrict.name ELSE NULL END as permanent_district_name
          FROM
            forms
          JOIN
            brides ON brides.application_id = forms.application_id
          JOIN
            countries as presentCountry ON presentCountry.id = brides.present_country_id
          LEFT JOIN
            states as presentState ON presentState.id = brides.present_state_id AND brides.present_country_id = 1
          LEFT JOIN
            districts as presentDistrict ON presentDistrict.id = brides.present_district AND brides.present_country_id = 1
          LEFT JOIN
            countries as permanentCountry ON permanentCountry.id = brides.permanent_country_id
          LEFT JOIN
            states as permanentState ON permanentState.id = brides.permanent_state_id AND brides.permanent_country_id = 1
          LEFT JOIN
            districts as permanentDistrict ON permanentDistrict.id = brides.permanent_district AND brides.permanent_country_id = 1
          WHERE
            forms.application_id = :appId;
            `,
            {
                replacements: {
                    appId: req.body.application_id,
                },
                type: sequelize.QueryTypes.SELECT,
            }
        );
        const groomsData = await sequelize.query(
            `
            SELECT
  grooms.*,
  presentCountry.name as present_country_name,
  CASE WHEN grooms.present_country_id = 1 THEN presentState.name ELSE NULL END as present_state_name,
  CASE WHEN grooms.present_country_id = 1 THEN presentDistrict.name ELSE NULL END as present_district_name,
  permanentCountry.name as permanent_country_name,
  CASE WHEN grooms.permanent_country_id = 1 THEN permanentState.name ELSE NULL END as permanent_state_name,
  CASE WHEN grooms.permanent_country_id = 1 THEN permanentDistrict.name ELSE NULL END as permanent_district_name
FROM
  forms
JOIN
  grooms ON grooms.application_id = forms.application_id
JOIN
  countries as presentCountry ON presentCountry.id = grooms.present_country_id
LEFT JOIN
  states as presentState ON presentState.id = grooms.present_state_id AND grooms.present_country_id = 1
LEFT JOIN
  districts as presentDistrict ON presentDistrict.id = grooms.present_district AND grooms.present_country_id = 1
LEFT JOIN
  countries as permanentCountry ON permanentCountry.id = grooms.permanent_country_id
LEFT JOIN
  states as permanentState ON permanentState.id = grooms.permanent_state_id AND grooms.permanent_country_id = 1
LEFT JOIN
  districts as permanentDistrict ON permanentDistrict.id = grooms.permanent_district AND grooms.permanent_country_id = 1
WHERE
  forms.application_id = :appId;
            `,
            {
                replacements: {
                    appId: req.body.application_id,
                },
                type: sequelize.QueryTypes.SELECT,
            }
        );

        const otherData = await sequelize.query(
            `
            SELECT
            other_details.*,
  lawyerState.name as lawyer_state_name,
  witness1State.name as witness1_state_name,
  witness2State.name as witness2_state_name,
  lawyerDistrict.name as lawyer_district_name,
  witness1District.name as witness1_district_name,
  witness2District.name as witness2_district_name 
  FROM
  forms
JOIN
  other_details ON other_details.application_id = forms.application_id
JOIN
    states as lawyerState ON lawyerState.id = other_details.lawyer_state
JOIN
    states as witness1State ON witness1State.id = other_details.witness1_state
JOIN
    states as witness2State ON witness2State.id = other_details.witness2_state
JOIN
    districts as lawyerDistrict ON lawyerDistrict.id = other_details.lawyer_district
JOIN
    districts as witness1District ON witness1District.id = other_details.witness1_district
JOIN
    districts as witness2District ON witness2District.id = other_details.witness2_district
WHERE
  forms.application_id = :appId;
            `,
            {
                replacements: {
                    appId: req.body.application_id,
                },
                type: sequelize.QueryTypes.SELECT
            }
        );

        const documentData = await Document.findAll({
            where: {
                application_id: req.body.application_id
            }
        })

        const data = {
            "applicantData": applicantData,
            "bridesData": bridesData,
            "groomsData": groomsData,
            "otherData": otherData,
            "documentData": documentData,
        }

        out.message = "Success"
        out.error = false
        out.data = data

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const getApplicationById = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")

        const certificateNo = await generateMarraigeCertificateNo();

        const data = await sequelize.query(
            `
            SELECT
            grooms.prefix as gprefix,
            grooms.first_name as gfirstname,
            grooms.middle_name as gmiddlename,
            grooms.last_name as glastname,
            grooms.father_prefix as gfatherprefix,
            grooms.father_first_name as gfatherfirstname,
            grooms.father_middle_name as gfathermiddlename,
            grooms.father_last_name as gfatherlastname,
            grooms.dob as gdob,
            brides.*, image_captures.*, applicants.*, districts.name as district_name, kazis.office_name as office_name
          FROM
            forms
            JOIN brides ON brides.application_id = forms.application_id
            JOIN grooms ON grooms.application_id = forms.application_id
            JOIN image_captures ON image_captures.application_id = forms.application_id
            JOIN applicants ON applicants.application_id = forms.application_id 
            JOIN districts ON districts.id = applicants.district_id 
            JOIN kazis ON kazis.id = applicants.office_id 
          WHERE
            forms.application_id = :appId;
            `,
            {
                replacements: {
                    appId: req.body.application_id,
                },
                type: sequelize.QueryTypes.SELECT,
            }
        );

        out.message = "Success"
        out.error = false
        out.data = data
        out.certificateNo = certificateNo

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}


export const updateAccept = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")

        const data = await Form.findAll({
            where: {
                application_id: req.body.application_id
            }
        })

        await Form.update({
            non_verified: 1,
            accept: 1,
            query_status: 0,
            query_response: 0
        }, {
            where: {
                application_id: req.body.application_id
            }
        })


        out.message = "The Application Accepted Successfully !!"
        out.error = false
        out.data = null

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}
export const updateReject = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")

        await Form.update({
            non_verified: 1,
            rejected: 1,
            query_status: 0,
            query_response: 0,
        }, {
            where: {
                application_id: req.body.application_id
            }
        })

        out.message = "Success"
        out.error = false
        out.data = null

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}
export const updateSendForQuery = async (req, res) => {
    const out = {}
    try {
        if (!req.body.application_id) throw Error("Provide Application Id")
        if (!req.body.query_text) throw Error("Provide Query Text")

        await Form.update({
            non_verified: 1,
            query_status: 1,
            query_text: req.body.query_text,
        }, {
            where: {
                application_id: req.body.application_id
            }
        })

        await QueryLog.create({
            application_id: req.body.application_id,
            query_text: req.body.query_text,
            sent_timestamp: new Date()
        })

        out.message = "Successfully, Sent for Query!!"
        out.error = false
        out.data = null

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

// const bridesData = await sequelize.query(
//     "SELECT brides.*, presentCountry.name as present_country_name, presentState.name as present_state_name, presentDistrict.name as present_district_name, permanentCountry.name as permanent_country_name, permanentState.name as permanent_state_name, permanentDistrict.name as permanent_district_name " +
//     "FROM forms " +
//     "JOIN brides ON brides.application_id = forms.application_id " +
//     "JOIN countries as presentCountry ON presentCountry.id = brides.present_country_id " +
//     "JOIN states as presentState ON presentState.id = brides.present_state_id " +
//     "JOIN districts as presentDistrict ON presentDistrict.id = brides.present_district " +

//     "JOIN countries as permanentCountry ON permanentCountry.id = brides.permanent_country_id " +
//     "JOIN states as permanentState ON permanentState.id = brides.permanent_state_id " +
//     "JOIN districts as permanentDistrict ON permanentDistrict.id = brides.permanent_district " +
//     "Where forms.application_id = :appId ",
//     {
//         replacements: {
//             appId: req.body.application_id,
//         },
//         type: sequelize.QueryTypes.SELECT
//     }
// );

// const groomsData = await sequelize.query(
//     "SELECT grooms.*, presentCountry.name as present_country_name, presentState.name as present_state_name, presentDistrict.name as present_district_name, permanentCountry.name as permanent_country_name, permanentState.name as permanent_state_name, permanentDistrict.name as permanent_district_name " +
//     "FROM forms " +
//     "JOIN grooms ON grooms.application_id = forms.application_id " +
//     "JOIN countries as presentCountry ON presentCountry.id = grooms.present_country_id " +
//     "JOIN states as presentState ON presentState.id = grooms.present_state_id " +
//     "JOIN districts as presentDistrict ON presentDistrict.id = grooms.present_district " +

//     "JOIN countries as permanentCountry ON permanentCountry.id = grooms.permanent_country_id " +
//     "JOIN states as permanentState ON permanentState.id = grooms.permanent_state_id " +
//     "JOIN districts as permanentDistrict ON permanentDistrict.id = grooms.permanent_district " +
//     "Where forms.application_id = :appId ",
//     {
//         replacements: {
//             appId: req.body.application_id,
//         },
//         type: sequelize.QueryTypes.SELECT
//     }
// );

// const data = await sequelize.query(
//     "SELECT forms.*, applicants.*, brides.*, grooms.*, other_details.*, documents.*  " +
//     "FROM forms " +
//     "JOIN applicants ON applicants.application_id = forms.application_id " +
//     "JOIN brides ON brides.application_id = forms.application_id " +
//     "JOIN grooms ON grooms.application_id = forms.application_id " +
//     "JOIN other_details ON other_details.application_id = forms.application_id " +
//     "JOIN documents ON documents.application_id = forms.application_id " +
//     "Where forms.application_id = :ids ",
//     {
//         replacements: {
//             ids: req.body.application_id,
//         },
//         type: sequelize.QueryTypes.SELECT
//     }
// );







// form woth joi
// export const saveForm = async (req, res) => {
//     const out = {}
//     try {
//         const schema = applicantValidation();
//         const { error } = schema.validate(req.body, { abortEarly: false });

//         if (error) {
//             const errorMessage = error.details.map((detail) => detail.message);
//             out.message = errorMessage
//             out.error = true
//             out.data = null
//         } else {
//             const name = req.body.name;
//             const email = req.body.email;

//             out.message = "Successfully, Registered"
//             out.error = false
//             out.data = null
//         }

//     } catch (err) {
//         out.message = err.message
//         out.error = true
//         out.data = null
//     } finally {
//         res.send(out)
//     }
// }

export const addForm = async (req, res) => {
    const out = {}
    try {
        if (!req.body.first_name) throw Error("Provide First Name")
        if (!req.body.last_name) throw Error("Provide Last Name")
        if (!req.body.mobile_no) throw Error("Provide Mobile Number")
        if (!req.body.email) throw Error("Provide Email")
        if (!req.body.gender) throw Error("Provide Gender")
        if (!req.body.district_id) throw Error("Provide District")
        if (!req.body.office_id) throw Error("Provide Office")

        const applicanNo = await generateApplicantNumber();

        await Form.create({
            application_id: applicanNo
        });
        await Applicant.create({
            application_id: applicanNo,
            first_name: req.body.first_name,
            middle_name: req.body.middle_name,
            last_name: req.body.last_name,
            mobile_no: req.body.mobile_no,
            email: req.body.email,
            gender: req.body.gender,
            district_id: req.body.district_id,
            office_id: req.body.office_id,
        })

        out.message = "Successfully, Registered"
        out.error = false
        out.data = null

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const addApplicant = async (req, res) => {
    const out = {}
    try {

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const addBride = async (req, res) => {
    const out = {}
    try {

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const addGroom = async (req, res) => {
    const out = {}
    try {

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}

export const addOtherDetails = async (req, res) => {
    const out = {}
    try {

    } catch (err) {
        out.message = err.message
        out.error = true
        out.data = null
    } finally {
        res.send(out)
    }
}