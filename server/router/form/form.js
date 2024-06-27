import express from 'express'
import * as formFunc from '../../controller/form/form.js'

export const form = express.Router()

form.post('/save', formFunc.saveForm)
form.post('/get/application/detail/byId', formFunc.getApplicationById)


form.get('/get/pending/application', formFunc.getPendingApplications)
form.get('/get/rejected/application', formFunc.getRejectedApplications)
form.get('/get/query/application', formFunc.getQueryApplications)
form.post('/get/queryLog/history/byApplicationId', formFunc.getQueryLogsHistoryByApplicationId)

form.get('/get/imageCapturePendingList/application', formFunc.getImageCapturePendingList) //for image capture
form.get('/get/generateCertificatePendingList/application', formFunc.getGnerateCertificatePendingList)
form.get('/get/deliverPendingList/application', formFunc.getDeliverPendingList) //for deliver final List
form.get('/get/successfull/list', formFunc.getSuccessfullList) //delivered successfull list
form.post('/get/application/details', formFunc.getApplicantionDetails)


form.post('/application/saveImage', formFunc.saveImage) //save image
form.post('/application/saveGeneratedCertificate', formFunc.saveGeneratedCertificate) //save the generated Certificate
form.post('/get/generatedCertificateForDownload', formFunc.getGeneratedCertificateForDownload) //save the generated Certificate
form.post('/uploadSignedCertificate', formFunc.uploadSignedCertificate) //save the generated Certificate
form.post('/final/deliver', formFunc.finalDeliver) //Final accept / deliver

form.post('/get/application/accept', formFunc.updateAccept)
form.post('/get/application/reject', formFunc.updateReject)
form.post('/get/application/sendForQuery', formFunc.updateSendForQuery)


// 
// form.get('/get/generateCertificateCompleteList/application', formFunc.getGnerateCertificateCompleteList)





// not in use
form.get('/get/imageCaptureCompleteList/application', formFunc.getImageCaptureCompleteList) //for generate Image

form.post('/add', formFunc.addForm)
form.post('/add/applicants', formFunc.addApplicant)
form.post('/add/bride', formFunc.addBride)
form.post('/add/groom', formFunc.addGroom)
form.post('/add/otherdetails', formFunc.addOtherDetails)
// end of not in use

//404
form.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})