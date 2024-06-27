import React, { useState, useEffect } from 'react'
import { Box, Grid, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import { getApiCall } from '../../../../utils/api';
import { Visibility } from '@mui/icons-material';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';

const PendingList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {

    const res = await getApiCall("form/get/pending/application")
    setData(res.data)
    res.data.forEach((data, index) => { data.serial = index + 1; });
  }
  const navigate = useNavigate();
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
              navigate(`/kazi/application?app_id=${params.row.application_id}&status=pending`);
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
    <div>
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
    </div>
  )

}

export default PendingList