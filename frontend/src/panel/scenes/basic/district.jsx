import React from 'react'
import { Box, Grid, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../components/Header";
import { getApiCall, postApiCall } from '../../../utils/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { EditOutlined } from '@mui/icons-material';
import '../../assets/css/index.css'
import { useRef } from 'react';
import TextInput from '../../../Form/Component/Form/TextInput';
import { Grid12, Grid3, Grid4 } from '../../../Form/Component/Form/Grids';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const District = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const formRef = useRef();

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [districtId, setDistrictId] = useState("")
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const res = await getApiCall("district/get/all")
        setData(res.data)
        res.data.forEach((data, index) => { data.serial = index + 1; });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)

        const formData = new FormData(formRef.current);
        const entries = Array.from(formData.entries());
        const formValues = entries.reduce(
            (prev, [name, value]) => ({
                ...prev,
                [name]: value,
            }),
            {}
        );
        let res = {}

        if (districtId === "")
            res = await postApiCall("district/add", formValues)
        else
            res = await postApiCall("district/update", { ...formValues, "id": districtId })

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
            name: '',
            lgd_code: '',
            dist_code: '',
            status: true,
        });
        setDistrictId("")
        getData();
    };


    const [formData, setFormData] = useState({
        name: '',
        lgd_code: '',
        dist_code: '',
        status: true,
    });

    const handleEditClick = async (data) => {
        setDistrictId(data.row.id)
        setFormData(data.row);
    }


    const columns = [
        { field: "serial", headerName: "SL" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "lgd_code",
            headerName: "LGD Code",
            flex: 1,
        },
        {
            field: "dist_code",
            headerName: "District Code",
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
        // {
        //     field: "accessLevel",
        //     headerName: "Access Level",
        //     flex: 1,
        //     renderCell: ({ row: { access } }) => {
        //         return (
        //             <Tooltip titlex="Edit" >
        //                 <EditOutlined sx={{
        //                     fontSize: "22px",
        //                     cursor: 'pointer'
        //                 }} onclick={handleEdit} />
        //             </Tooltip>
        //             // <Box
        //             //   width="60%"
        //             //   m="0 auto"
        //             //   p="5px"
        //             //   display="flex"
        //             //   justifyContent="center"
        //             // //   backgroundColor={
        //             // //   }
        //             //   borderRadius="4px"
        //             // >
        //             //   <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
        //             //     access
        //             //   </Typography>
        //             // </Box>
        //         );
        //     },
        // },

    ];

    return (
        <div className='btn-table'>
            <Box m="20px">
                <Header title="DISTRICTS" subtitle="List of districts" />
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
                            <TextInput
                                fieldName='name'
                                valueName={formData.name}
                                isRequired={true}
                                label='District Name'
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Grid4>
                        <Grid4>
                            <TextInput
                                fieldName='lgd_code'
                                valueName={formData.lgd_code}
                                isRequired={true}
                                label='LGD Code'
                                onChange={(e) => setFormData({ ...formData, lgd_code: e.target.value })}
                            />
                        </Grid4>
                        <Grid4>
                            <TextInput
                                fieldName='dist_code'
                                valueName={formData.dist_code}
                                isRequired={true}
                                label='District Code'
                                onChange={(e) => setFormData({ ...formData, dist_code: e.target.value })}
                            />
                        </Grid4>
                        <Grid12>
                            <label>
                                <input
                                    name='status'
                                    type="checkbox"
                                    checked={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
                                />
                                <span className='active-status'>Active</span>
                            </label>
                        </Grid12>
                        <Grid12>
                            <Button className='btn btn-success step-btn-next' type="submit">
                                {districtId === '' ? "Save" : "Update"}
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
    )
}

export default District