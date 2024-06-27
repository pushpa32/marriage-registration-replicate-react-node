import React, { useState, useEffect } from 'react'
import { Box, Button, Modal, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { Main_URL, getApiCall, postFormApiCall } from '../../../utils/api';
import { CameraAltOutlined, PersonOffOutlined, Visibility } from '@mui/icons-material';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Webcam from "react-webcam";
import { useRef } from 'react';
import Swal from 'sweetalert2';


export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
};


const ImageCaptureList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const webcamRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [imagFile, setImgFile] = useState(null);
    const [viewImage, setViewImage] = useState(null);
    const [cameraIsOn, setCameraIsOn] = useState(true);
    const [open, setOpen] = useState(false);
    const [openViewImage, setOpenViewImage] = useState(false);

    const [appId, setAppId] = useState('');

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCameraIsOn(false);
        setImageSrc(imageSrc);

        if (imageSrc) {
            // Convert base64 to Blob
            const byteCharacters = atob(imageSrc.split(',')[1]);
            const byteArrays = [];
            for (let i = 0; i < byteCharacters.length; i++) {
                byteArrays.push(byteCharacters.charCodeAt(i));
            }
            const blob = new Blob([new Uint8Array(byteArrays)], { type: 'image/png' });
            const imageFile = new File([blob], 'captured_image.png', { type: 'image/png' });
            setImgFile(imageFile);
        }
    };

    const handleUploadImage = async () => {

        const formData = new FormData();
        formData.append('application_id', appId);
        formData.append('image', imagFile);

        const response = await postFormApiCall("form/application/saveImage", formData)
        setOpenViewImage(false)
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
            setImgFile(null)
            setImageSrc(null)
            setViewImage(null)
            setAppId('')
            getData()
        });

    }

    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const res = await getApiCall("form/get/imageCapturePendingList/application")
        setData(res.data)
        res.data.forEach((data, index) => { data.serial = index + 1; });
    }

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
            field: 'path',
            headerName: 'Captured',
            flex: 1,
            renderCell: (params) => {
                return (
                    <>{viewImage === null ? <PersonOffOutlined /> :
                        <Button onClick={() => {
                            setOpenViewImage(true)
                        }} sx={{ backgroundColor: 'green', fontSize: 10 }} variant="contained" size="small">view and upload</Button>
                    }</>
                );
            },
        },

        {
            field: 'camera',
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => {
                return (
                    <CameraAltOutlined
                        style={{
                            cursor: 'pointer',
                            backgroundColor: 'transparent',
                            transition: 'background-color 0.3s',
                            padding: 3,
                            fontSize: 24
                        }}
                        onClick={() => {
                            setAppId(params.row.application_id)
                            setCameraIsOn(true);
                            setOpen(true)
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

        {
            field: 'process',
            headerName: 'View',
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
                            navigate(`/kazi/application?app_id=${params.row.application_id}&status=capture`);
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



    return (
        <Box m="20px">
            <Header title="IMAGE CAPTURE" subtitle="List of Applicants" />

            <Modal
                open={openViewImage}
                onClose={() => setOpenViewImage(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={viewImage} alt="Captured" />
                    <Button onClick={handleUploadImage} sx={{ backgroundColor: 'green', width: '150px', margin: "5px" }} variant="contained" size="small">Upload</Button>
                </Box>
            </Modal>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2" style={{
                        fontWeight: 'bold',
                    }} >
                        Capture Image
                    </Typography>
                    {
                        imageSrc
                            ?
                            <img src={imageSrc} alt="Captured" />
                            :
                            cameraIsOn && <Webcam audio={false} video={false} ref={webcamRef} height={400} width={400} />
                    }
                    <div>
                        {imageSrc === null && <Button onClick={capture} sx={{ backgroundColor: 'green', width: '150px', margin: "5px" }} variant="contained" size="small">Capture</Button>
                        }
                        {imageSrc && <Button onClick={() => {
                            setViewImage(imageSrc)
                            setImageSrc(null)
                            setOpen(false)
                        }} sx={{ backgroundColor: 'green', width: '150px', margin: "5px" }} variant="contained" size="small">Done</Button>}

                        {imageSrc && <Button onClick={() => { setImageSrc(null); setCameraIsOn(true); }} sx={{ backgroundColor: 'blue', width: '150px', margin: "5px" }} variant="contained" size="small">Retake</Button>}

                        <Button onClick={() => { setImageSrc(null); setOpen(false) }} sx={{ backgroundColor: 'red', width: '150px', margin: "5px" }} variant="contained" size="small">Cancel</Button>
                    </div>

                </Box>
            </Modal>
            {/* {imageSrc && <img src={imageSrc} alt="Captured" />} */}
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
                />
            </Box>
        </Box>
    )
}

export default ImageCaptureList