import React, { useState, useEffect } from 'react'
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import { Main_URL, getApiCall } from '../../../utils/api';
import { FileDownload, Visibility } from '@mui/icons-material';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

const FinalSuccessfullList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const res = await getApiCall("form/get/successfull/list")
        console.log(res);
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
            field: 'deliveredDate',
            headerName: 'Delivered Date',
            flex: 1,
            renderCell: (params) => {
                const originalDateTime = params.row.delivered_date;
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
        {
            field: 'view',
            headerName: 'Certificate',
            renderCell: (params) => {
                return (
                    <FileDownload
                        style={{
                            cursor: 'pointer',
                            backgroundColor: 'transparent',
                            transition: 'background-color 0.3s',
                            padding: 3,
                            fontSize: 24
                        }}
                        onClick={async () => {
                            const url = Main_URL + params.row.certificate_path;
                            const link = document.createElement('a');
                            link.href = url;
                            link.target = '_blank';
                            link.download = 'generated_certificate.pdf';
                            link.click();

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

            <Header title="GENERATE AND UPLOAD" subtitle="List of Applicants" />
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

                        // filter: {
                        //     filterModel: {
                        //       items: [],
                        //       quickFilterValues: ['quick', 'filter'],
                        //     },
                        //   },
                    }}
                />
            </Box>
        </Box>
    )
}

export default FinalSuccessfullList