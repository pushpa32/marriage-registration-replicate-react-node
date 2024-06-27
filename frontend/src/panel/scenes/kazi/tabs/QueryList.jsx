import React, { useState, useEffect } from 'react'
import { Box, Grid, Modal, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import { getApiCall, postApiCall } from '../../../../utils/api';
import { History, Visibility } from '@mui/icons-material';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from 'moment/moment';
import { useNavigate, useSearchParams } from 'react-router-dom';
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

const QueryList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [searchParams, setSearchParams] = useSearchParams();
  const viewprofile = searchParams.get("app_id") || false;

  const [data, setData] = useState([])
  const [queryHistory, setQueryHistory] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {

    const res = await getApiCall("form/get/query/application")
    setData(res.data)
    res.data.forEach((data, index) => { data.serial = index + 1; });
  }
  const navigate = useNavigate();
  const columns = [
    { field: "serial", headerName: "SL", flex: 0 },
    {
      field: "application_id",
      headerName: "Applicant Id",
      flex: 1.5,
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
            <>{formattedDateTime.split(' ')[2]}</>
          </>
        );
      },
    },
    {
      field: "query_text",
      headerName: "Query",
      flex: 1,
    },
    {
      field: 'history',
      headerName: 'History',
      renderCell: (params) => {
        return (
          <History
            style={{
              cursor: 'pointer',
              backgroundColor: 'transparent',
              transition: 'background-color 0.3s',
              padding: 3,
              fontSize: 24
            }}
            onClick={async () => {
              const response = await postApiCall("form/get/queryLog/history/byApplicationId", {
                "application_id": params.row.application_id,
              })
              console.log(response);
              if (response.error === true) {
                return Swal.fire({
                  title: 'Error',
                  text: response.message,
                  icon: 'error'
                });
              }
              setQueryHistory(response.data)
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
              navigate(`/kazi/application?app_id=${params.row.application_id}&status=query`);
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


  return !viewprofile ? (
    <div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5 style={{
            fontWeight: 'bold'
          }}>Query History</h5>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Query</th>
                <th>Sent Date</th>
              </tr>
            </thead>
            <tbody>
              {queryHistory.map((item) => (
                <tr key={item.id}>
                  <td>{item.query_text}</td>
                  <td>{item.sent_timestamp.split('T')[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Modal>

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
          getRowId={(row) => row.id}
          slots={{ toolbar: GridToolbar }}
          {...data}
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
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </div>
  )
    : (
      <>OKOK</>
      // <ViewDetails app_id={viewprofile} />
    );
}

export default QueryList