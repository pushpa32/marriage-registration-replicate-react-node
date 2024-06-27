import React, { useState, useEffect } from 'react'
import { Box, Button, Modal, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { Main_URL, getApiCall, postApiCall, postCallForPdfDownload, postFormApiCall } from '../../../utils/api';
import { FileOpenRounded, Start, Visibility } from '@mui/icons-material';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import CertificateFormat from './CertificateFormat';
import html2pdf from 'html2pdf.js';
import Swal from 'sweetalert2';
import { Form } from 'react-bootstrap';
import { useRef } from 'react';
import { renderToString } from 'react-dom/server';

const dialogContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '100vh'
};

const modalUploadStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    height: '100%',
};

const GenerateAndUploadCertificate = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [data, setData] = useState([])
    const [certificateData, setCertificateData] = useState(null)
    const [certificateNo, setCertificateNo] = useState('')
    const [appId, setAppID] = useState('')
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [openUpload, setOpenUpload] = useState(false);
    const [pdfViewData, setPdfViewData] = useState('');
    const [uploadFile, setUploadFile] = useState(null);


    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const res = await getApiCall("form/get/generateCertificatePendingList/application")
        setData(res.data)
        res.data.forEach((data, index) => { data.serial = index + 1; });
    }

    const submitGeneratedForm = async () => {

        const byteCharacters = atob(btoa(pdfViewData));
        const byteArrays = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteArrays[i] = byteCharacters.charCodeAt(i);
        }
        const pdfBlob = new Blob([byteArrays], { type: 'application/pdf' });
        const pdfData = new File([pdfBlob], 'generated_certificate.pdf', { type: 'application/pdf' });

        const formData = new FormData();
        formData.append('application_id', appId);
        formData.append('pdfFile', pdfData);
        formData.append('certificateNo', certificateNo);
        const response = await postFormApiCall("form/application/saveGeneratedCertificate", formData)
        setModalOpen(false)
        if (response.error === true) {
            return Swal.fire({
                title: 'Error',
                text: response.message,
                icon: 'error'
            });
        }
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1500
        }).then((value) => {
            setAppID('')
            setPdfViewData('')
            getData()
            setCertificateNo('')
        });
    }

    const fileInputRef = useRef(null);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setUploadFile(selectedFile);
        }
    };

    const uploadFileApiCall = async () => {
        setOpenUpload(false)
        new Swal({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const formData = new FormData();
                formData.append('application_id', appId)
                formData.append('uploadFile', uploadFile)
                const response = await postFormApiCall("form/uploadSignedCertificate", formData)
                if (response.error === true) {
                    return Swal.fire({
                        title: 'Error',
                        text: response.message,
                        icon: 'error'
                    });
                }
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.message,
                    showConfirmButton: false,
                    timer: 1500
                }).then((value) => {
                    if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                    }
                    setUploadFile(null)
                    setAppID('')
                    getData()
                });
            } else {
                setOpenUpload(true)
            }
        })


    }

    const imageToBase64 = (imageUrl) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                const reader = new FileReader();
                reader.onloadend = function () {
                    resolve(reader.result);
                };
                reader.onerror = function (error) {
                    reject(error);
                };
                reader.readAsDataURL(xhr.response);
            };
            xhr.onerror = function (error) {
                reject(error);
            };
            xhr.open('GET', imageUrl);
            xhr.responseType = 'blob';
            xhr.send();
        });
    };

    const columns = [
        { field: "serial", headerName: "SL" },
        {
            field: "application_id",
            headerName: "Applicant Id",
            flex: 1,
        },
        {
            field: "district_name",
            headerName: "District",
            flex: 1,
        },
        {
            field: "office_name",
            headerName: "Office",
            flex: 1,
        },
        {
            field: 'submit',
            headerName: 'Submit Date',
            flex: 1,
            renderCell: (params) => {
                const originalDateTime = params.row.created_at;
                const formattedDateTime = moment(originalDateTime).format("DD/MM/YYYY h:mm:ss A");
                return (
                    <>
                        <>{formattedDateTime.split(' ')[0]}</>
                        <br />
                        <>{formattedDateTime.split(' ')[1]}</>
                        <> {formattedDateTime.split(' ')[2]}</>
                    </>
                );
            },
        },

        {
            field: 'generate',
            headerName: 'Generate',
            flex: 1,
            renderCell: (params) => {
                return (

                    params.row.certificate_generate != 1 ?
                        <FileOpenRounded
                            style={{
                                cursor: 'pointer',
                                backgroundColor: 'transparent',
                                transition: 'background-color 0.3s',
                                padding: 3,
                                fontSize: 24
                            }}
                            onClick={async () => {
                                const response = await postApiCall("form/get/application/detail/byId", {
                                    "application_id": params.row.application_id
                                })
                                if (response.error === true) {
                                    return Swal.fire({
                                        title: 'Error',
                                        text: response.message,
                                        icon: 'error'
                                    });
                                }
                                setAppID(params.row.application_id)
                                const imageUrl = Main_URL + response.data[0].image_path;

                                await fetch(imageUrl)
                                    .then((response) => response.blob())
                                    .then(async (blob) => {

                                        const blobUrl = URL.createObjectURL(blob);
                                        setCertificateData(blobUrl)

                                        setCertificateNo(response.certificateNo)

                                        const certificateComponent = <CertificateFormat certificateNo={response.certificateNo} image={blobUrl} data={response.data[0]} />;
                                        const certificateHtml = renderToString(certificateComponent);

                                        const pdfOptions = {
                                            margin: 0,
                                            filename: 'sample-document.pdf',
                                            image: { type: 'jpeg', quality: 0.98, imageTimeout: 5000 },
                                            html2canvas: { scale: 2 },
                                            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                                        };

                                        const pdfContent = await html2pdf().from(certificateHtml).set(pdfOptions).outputPdf();
                                        setPdfViewData(pdfContent)
                                        setModalOpen(true)
                                    })
                                    .catch((error) => {
                                        console.error('Error fetching image:', error);
                                    });


                                // const content = document.querySelector('#convert');
                                // const certificateComponent = <CertificateFormat data={response.data[0].image_path} />;
                                // const certificateHtml = renderToString(certificateComponent);

                                // const pdfContent = await html2pdf().from(certificateHtml).outputPdf();
                                // setPdfViewData(pdfContent)
                                // setModalOpen(true)

                                // const pdfOptions = {
                                //     margin: 10,
                                //     filename: 'sample-document.pdf',
                                //     image: { type: 'jpeg', quality: 0.98, imageTimeout: 5000 },
                                //     html2canvas: { scale: 2 },
                                //     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                                // };

                                //   html2pdf().from(content).set(pdfOptions).save();
                            }}
                            onMouseEnter={(event) => {
                                event.currentTarget.style.backgroundColor = 'lightgray';
                            }}
                            onMouseLeave={(event) => {
                                event.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        />
                        :
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Button onClick={async () => {
                                const response = await postCallForPdfDownload("form/get/generatedCertificateForDownload", {
                                    "application_id": params.row.application_id
                                })
                                if (response.error === true) {
                                    return Swal.fire({
                                        title: 'Error',
                                        text: response.message,
                                        icon: 'error'
                                    });
                                }
                                const blob = await response.blob();
                                const link = document.createElement('a');
                                link.href = URL.createObjectURL(blob);
                                link.download = params.row.application_id + '.pdf';
                                link.click();
                            }} sx={{ backgroundColor: 'green', fontSize: 10 }}
                                variant="contained" size="small">
                                Download
                            </Button>
                            <Button onClick={async () => {
                                setAppID(params.row.application_id)
                                setOpenUpload(true)
                            }} sx={{ backgroundColor: 'blue', fontSize: 10, marginTop: 2 }}
                                variant="contained" size="small">
                                Upload
                            </Button>
                        </Box>
                );
            },
        },
        {
            field: 'process',
            headerName: 'Action',
            renderCell: (params) => {
                return (
                    <Visibility
                        style={{
                            cursor: 'pointer',
                            backgroundColor: 'transparent',
                            transition: 'background-color 0.3s',
                            padding: 3,
                            fontSize: 24
                        }}
                        onClick={() => {
                            navigate(`/kazi/application?app_id=${params.row.application_id}&status=generate`);
                        }}
                        onMouseEnter={(event) => {
                            event.currentTarget.style.backgroundColor = 'lightgray';
                        }}
                        onMouseLeave={(event) => {
                            event.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    />
                );
            },
        },
    ];

    function calculateRowHeight(params) {
        return 100;
    }

    return (
        <Box m="20px">
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={dialogContentStyle}>
                    {/* Embed an iframe to display the PDF */}
                    <iframe
                        title="File Preview"
                        src={`data:application/pdf;base64,${btoa(pdfViewData)}`}
                        style={{ height: '100vh', width: '70%', border: 'none' }}
                    />
                    <Box sx={{

                    }}>
                        <Button onClick={() => {
                            submitGeneratedForm();
                        }}
                            sx={{ backgroundColor: 'green', width: '150px', margin: "5px" }}
                            variant="contained" size="small">Generate</Button>
                        <Button onClick={() => {
                            setModalOpen(false)
                            setPdfViewData('')
                        }}
                            sx={{ backgroundColor: 'red', width: '150px', margin: "5px" }}
                            variant="contained" size="small">Cancel</Button>
                    </Box>
                </Box>
            </Modal>

            {/* upload pop up */}
            <Modal
                open={openUpload}
                onClose={() => setOpenUpload(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalUploadStyle} >
                    <Box sx={{
                        height: '220px',
                        width: '400px',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'start',
                        flexDirection: 'column',
                        padding: 5,
                        borderRadius: 2
                    }}>
                        <Typography id="modal-modal-title" variant="h4" component="h2" style={{
                            fontWeight: 'bold', marginBottom: 10, borderBottom: '1px solid black'
                        }} >
                            Upload file
                        </Typography>
                        <Form.Control
                            type="file"
                            accept=".pdf"
                            name="Upload"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{
                                backgroundColor: 'cadetblue',
                                color: 'white'
                            }}
                        />
                        <Box sx={{
                            marginTop: 3
                        }}>
                            <Button onClick={async () => {
                                uploadFileApiCall()
                            }} sx={{ backgroundColor: 'green', fontSize: 11, fontWeight: '600', letterSpacing: 1 }}
                                variant="contained" size="small">
                                Upload
                            </Button>
                            <Button onClick={async () => {
                                setUploadFile(null)
                                setOpenUpload(false)
                            }} sx={{
                                backgroundColor: 'red', fontSize: 11, fontWeight: '600', letterSpacing: 1,
                                marginLeft: 2
                            }}
                                variant="contained" size="small">
                                Cancel
                            </Button>
                        </Box>
                    </Box>

                </Box>
            </Modal>
            <Header title="GENERATE AND UPLOAD" subtitle="List of Applicants" />
            <div style={{
                display: 'none'
            }} id='convert'>
                <CertificateFormat data={certificateData} />
            </div>

            <Box
                height="90vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={data}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                    {...data}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                    initialState={{
                        ...data.initialState,
                        pagination: {
                            ...data.initialState?.pagination,
                            paginationModel: {
                                pageSize: 25,
                                /* page: 0 // default value will be used if not passed */
                            },
                        },
                    }}
                    getRowHeight={calculateRowHeight}
                />
            </Box>
        </Box>

    )
}

export default GenerateAndUploadCertificate