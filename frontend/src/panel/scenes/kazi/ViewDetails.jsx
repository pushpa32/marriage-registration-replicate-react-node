import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { postApiCall } from '../../../utils/api';
import PreviewApplicantPanel from '../../components/formPreview/PreviewApplicant';
import PreviewBridePanel from '../../components/formPreview/PreviewBride';
import PreviewGroomPanel from '../../components/formPreview/PreviewGroom';
import PreviewOtherDetailsPanel from '../../components/formPreview/PreviewOtherDetails';
import PreviewDocumentPanel from '../../components/formPreview/PreviewDocument';
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ViewDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const app_id = searchParams.get('app_id');
    const status = searchParams.get('status');

    const [data, setData] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const res = await postApiCall("form/get/application/details", { "application_id": app_id })
        console.log("Asdaaaaaaaasd", res.data.documentData[0]);
        setData(res.data)
    }

    const handleAccept = async () => {
        new Swal({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await postApiCall("form/get/application/accept", { "application_id": app_id })
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
                    navigate(`/kazi/applicationlist`);
                });
            }
        })
    }
    const handleReject = async () => {
        new Swal({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await postApiCall("form/get/application/reject", { "application_id": app_id })
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
                    navigate(`/kazi/applicationlist`);
                });
            }
        })
    }
    const handleQuery = async () => {
        setOpen(false)
        new Swal({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await postApiCall("form/get/application/sendForQuery", {
                    "application_id": app_id,
                    "query_text": queryText
                })
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
                    navigate(`/kazi/applicationlist`);
                });
            } else {
                setOpen(true)
            }
        })
    }

    const [open, setOpen] = useState(false);
    const [queryText, setQueryText] = useState("");

    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2" style={{
                        fontWeight: 'bold'
                    }} >
                        Send for query
                    </Typography>
                    <div class="form-group">
                        {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
                        <textarea class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder='Remarks'
                            onChange={(e) => setQueryText(e.target.value)}
                            style={{
                                margin: "20px 0"
                            }}>
                            {queryText}
                        </textarea>
                    </div>

                    <Button onClick={() => handleQuery()} sx={{ backgroundColor: 'green', width: '150px' }} variant="contained" size="small">Submit</Button>
                </Box>
            </Modal>
            <Box m="20px">


                <Header title="Applicant  Detail" subtitle={app_id} />
                <PreviewApplicantPanel data={data.length !== 0 && data.applicantData[0]} />
                <PreviewBridePanel data={data.length !== 0 && data.bridesData[0]} />
                <PreviewGroomPanel data={data.length !== 0 && data.groomsData[0]} />
                <PreviewOtherDetailsPanel data={data.length !== 0 && data.otherData[0]} />
                <PreviewDocumentPanel data={data.length !== 0 && data.documentData[0]} />

                {status === 'pending' && <Box sx={{ '& button': { m: 1 }, padding: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button onClick={() => handleAccept()} sx={{ backgroundColor: 'green', width: '150px' }} variant="contained" size="small"> Accept </Button>
                    <Button onClick={() => handleReject()} sx={{ backgroundColor: 'red', width: '150px' }} variant="contained" size="small">Reject</Button>
                    <Button onClick={() => setOpen(true)} sx={{ backgroundColor: 'blue', width: '150px' }} variant="contained" size="small">Query</Button>
                </Box>}
            </Box>
        </>
    )
}

export default ViewDetails