import React from 'react'
import { Box, Grid, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../components/Header";
import { getApiCall, postApiCall, postFormApiCall } from '../../../utils/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { EditOutlined } from '@mui/icons-material';
import '../../assets/css/index.css'
import { useRef } from 'react';
import TextInput, { TextAreaInput } from '../../../Form/Component/Form/TextInput';
import { Grid12, Grid3, Grid4, Grid8 } from '../../../Form/Component/Form/Grids';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import SelectInput, { MultiSelectInput } from '../../../Form/Component/Form/SelectInput';
import NumberInput from '../../../Form/Component/Form/NumberInput';
import EmailInput from '../../../Form/Component/Form/EmailInput';

const Kazi = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const formRef = useRef();

    const [loading, setLoading] = useState(false)

    const [data, setData] = useState([])
    const [kaziId, setKaziId] = useState("")

    const [districtList, setDistrictList] = useState([])
    const [sroList, setSroList] = useState([])

    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null)
    const [showModal, setShowModal] = useState(false);

    const getSroByDistrict = async (val) => {
        const res = await postApiCall("user/get/sroByDistrict/active", { 'dist_id': val.value })
        setSroList(res.data)
        console.log(res);
    }

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const distList = await postApiCall("district/get/by/state", { "state_id": '4' })
        setDistrictList(distList.data)

        const res = await getApiCall("kazi/get/all")
        // console.log(res);
        setData(res.data)
        res.data.forEach((data, index) => { data.serial = index + 1; });
    }

    const [formDatas, setFormData] = useState({
        district: '',
        officeName: '',
        name: '',
        address: '',
        phone: '',
        email: '',
        sro: [],
        status: true,
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)



        const formData = new FormData(formRef.current);

        let sroData = [];
        formDatas.sro.map((d) => sroData.push(d.value));

        formData.append("fileData", file);
        formData.append("id", kaziId);
        formData.append("sroValue", JSON.stringify(sroData));

        let res = {}
        if (kaziId === "")
            res = await postFormApiCall("kazi/add", formData)
        else
            res = await postFormApiCall("kazi/update", formData)

        setLoading(false)

        if (res.error === true) {
            return Swal.fire({
                title: 'Error',
                text: res.message,
                icon: 'error'
            });
        }
        Swal.fire({
            title: 'Successful',
            text: res.message,
            icon: 'success'
        });

        setFormData({
            district: '',
            officeName: '',
            name: '',
            address: '',
            phone: '',
            email: '',
            sro: [],
            status: true,
        });

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        setFile(null)

        setKaziId("")
        getData();
    };

    const handleEditClick = async (data) => {
        console.log(data);
        setKaziId(data.row.id)
        setFormData(data.row);
    }

    const columns = [
        { field: "serial", headerName: "SL" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
        },
        {
            field: "office_name",
            headerName: "Office",
            flex: 1,
        },
        {
            field: "office_address",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,

        },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            renderCell: (params) => {
                return (
                    <>{params.row.status === true ? "Active" : "InActive"}
                    </>
                )
            }
        },
        {
            field: 'edit',
            headerName: 'Edit',
            renderCell: (params) => {
                return (
                    <EditOutlined
                        style={{
                            cursor: 'pointer',
                            backgroundColor: 'transparent',
                            transition: 'background-color 0.3s',
                            padding: 3,
                            fontSize: 24
                        }}
                        onClick={() => handleEditClick(params)}
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
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>File Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {file && file.type === 'application/pdf' && (
                        <embed src={URL.createObjectURL(file)} width="100%" height="500" type="application/pdf" />
                    )}
                    {file && file.type.startsWith('image/') && <img src={URL.createObjectURL(file)} alt="" width="100%" height="500" />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
            <div className='btn-table'>
                <Box m="20px">
                    <Header title="KAZI" subtitle="List of kazi" />
                    <form id="form" onSubmit={handleFormSubmit} ref={formRef} className='card-box-shadow-table-form'>

                        <Grid
                            item
                            container
                            spacing={1}
                            rowSpacing={1}
                            sx={{
                                padding: 2
                            }}
                        >
                            <Grid4>
                                <SelectInput
                                    valueName={formDatas.district}
                                    placeholder='Select District'
                                    fieldName='district'
                                    onChange={(e) => {
                                        getSroByDistrict(e)
                                        setFormData({ ...formDatas, district: e })
                                    }}
                                    options={districtList}
                                    isRequired={true}
                                    label='Select District'
                                />
                            </Grid4>
                            <Grid4>
                                <TextInput
                                    fieldName='officeName'
                                    valueName={formDatas.officeName}
                                    isRequired={true}
                                    label='Office Name'
                                    onChange={(e) => setFormData({ ...formDatas, officeName: e.target.value })}
                                />
                            </Grid4>
                            <Grid4>
                                <TextInput
                                    fieldName='name'
                                    valueName={formDatas.name}
                                    isRequired={true}
                                    label='Name'
                                    onChange={(e) => setFormData({ ...formDatas, name: e.target.value })}
                                />
                            </Grid4>
                            <Grid4>
                                <TextAreaInput
                                    fieldName='address'
                                    valueName={formDatas.address}
                                    isRequired={true}
                                    label='Office Address'
                                    onChange={(e) => setFormData({ ...formDatas, address: e.target.value })}
                                />
                            </Grid4>
                            <Grid4>
                                <NumberInput
                                    fieldName='phone'
                                    valueName={formDatas.phone}
                                    onChange={(e) => setFormData({ ...formDatas, phone: e.target.value })}
                                    isRequired={true}
                                    label='Mobile Number'
                                />
                            </Grid4>
                            <Grid4>
                                <EmailInput
                                    fieldName='email'
                                    valueName={formDatas.email}
                                    isRequired={true}
                                    label='Email'
                                    onChange={(e) => setFormData({ ...formDatas, email: e.target.value })}
                                />
                            </Grid4>

                            <Grid4>
                                <MultiSelectInput
                                    valueName={formDatas.sro}
                                    placeholder='Select SRO'
                                    fieldName='sro'
                                    // onChange={(e) => setFormData({
                                    //     ...formDatas,
                                    //     sro: Array.isArray(e) ? e.map(item => item.value) : [e.value]
                                    // })
                                    // }
                                    onChange={(e) => setFormData({ ...formDatas, sro: Array.isArray(e) ? e : [e] })}
                                    options={sroList}
                                    isRequired={true}
                                    label='Assosciated SRO'
                                />
                            </Grid4>

                            <Grid4>
                                <label>Supporting Document</label>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept=".pdf, image/*"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                {file &&
                                    <Button className='btn btn-view-doc' onClick={() => setShowModal(true)}>
                                        View
                                    </Button>
                                }
                            </Grid4>

                            <Grid12>
                                <label>
                                    <input
                                        name='status'
                                        type="checkbox"
                                        checked={formDatas.status}
                                        onChange={(e) => setFormData({ ...formDatas, status: e.target.checked })}
                                    />
                                    <span className='active-status'>Active</span>
                                </label>
                            </Grid12>
                            <Grid12>
                                <Button className='btn btn-success step-btn-next' type="submit">
                                    {kaziId === '' ? "Save" : "Update"}
                                </Button>
                            </Grid12>
                        </Grid>

                    </form>
                    <Box
                        m="40px 0 0 0"
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
            </div>
        </>
    )
}

export default Kazi