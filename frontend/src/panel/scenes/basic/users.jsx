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
import TextInput, { TextAreaInput } from '../../../Form/Component/Form/TextInput';
import { Grid12, Grid3, Grid4, Grid8 } from '../../../Form/Component/Form/Grids';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import SelectInput, { MultiSelectInput } from '../../../Form/Component/Form/SelectInput';
import NumberInput from '../../../Form/Component/Form/NumberInput';
import EmailInput from '../../../Form/Component/Form/EmailInput';

const User = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const formRef = useRef();

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [userId, setUserId] = useState("")
  const [userTypeName, setUserTypeName] = useState("")
  const [usersID, setUsersId] = useState("")

  const [districtList, setDistrictList] = useState([])
  const [roleList, setRoleList] = useState([])

  const [isUserTypeSelected, setIsUserTypeSelected] = useState(false)
  const [isIgrAigrSelected, setIsIgrAigrSelected] = useState(false)


  const [filterRole, setFilterRole] = useState("")


  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    setData([])
    const distList = await getApiCall("district/get/active")
    setDistrictList(distList.data)

    const resRole = await getApiCall("role/get/all/excludeAdminKazi")
    setRoleList(resRole.data)
  }

  const [formDatas, setFormData] = useState({
    role: '',
    district: '',
    userid: '',
    name: '',
    phone: '',
    email: '',
    office_name: '',
    office_address: '',
    status: true,
  });

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

    // console.log({ ...formValues, "userType": userTypeName, "id": userId, "usersid": usersID });

    if (userId === "")
      res = await postApiCall("user/add", { ...formValues, "userType": userTypeName })
    else {
      res = await postApiCall("user/update", { ...formValues, "userType": userTypeName, "id": userId, "userid": usersID })
      filterData(filterRole)
    }

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
      role: '',
      district: '',
      userid: '',
      name: '',
      phone: '',
      email: '',
      office_name: '',
      office_address: '',
      status: true,
    });

    setUsersId("")
    setUserTypeName("");
    setIsUserTypeSelected(false)
    setIsIgrAigrSelected(false)
    setUserId("")
    getData();
  };

  const handleEditClick = async (data) => {
    setUsersId(data.row.userid)
    setIsUserTypeSelected(true)
    setUserId(data.row.id)
    setFormData({
      role: filterRole,
      district: { label: data.row.district_name, value: data.row.district_id },
      userid: data.row.userid,
      name: data.row.name,
      phone: data.row.phone,
      email: data.row.email,
      office_name: data.row.office_name,
      office_address: data.row.office_address,
      status: data.row.status,
    });
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

  const filterData = async (e) => {
    setUserId("")
    setFilterRole(e)
    setUserTypeName(e.label);
    setFormData({
      role: '',
      district: '',
      userid: '',
      name: '',
      phone: '',
      email: '',
      office_name: '',
      office_address: '',
      status: true,
    });
    const res = await postApiCall("user/get/byType", e)
    setData(res.data)
    res.data.forEach((data, index) => { data.serial = index + 1; });
  }

  return (
    <div className='btn-table'>
      <Box m="20px">
        <Header title="Users" subtitle="List of Users" />
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

            <Grid12>
              <Grid4>
                <SelectInput
                  valueName={formDatas.role}
                  placeholder='Select User Type'
                  fieldName='role'
                  onChange={(e) => {
                    setIsUserTypeSelected(true)
                    setFormData({ ...formDatas, role: e })

                    if (e.label.toLowerCase() === 'IGR'.toLowerCase() || e.label.toLowerCase() === 'AIGR'.toLowerCase())
                      setIsIgrAigrSelected(true)
                    else
                      setIsIgrAigrSelected(false)
                    setUserTypeName(e.label);
                  }}
                  options={roleList}
                  isRequired={true}
                  label='Select User Type'
                />
              </Grid4>
            </Grid12>

            {isUserTypeSelected &&
              <>
                {!isIgrAigrSelected &&
                  <Grid4>
                    <SelectInput
                      valueName={formDatas.district}
                      placeholder='Select District'
                      fieldName='district'
                      onChange={(e) => setFormData({ ...formDatas, district: e })}
                      options={districtList}
                      isRequired={true}
                      label='Select District'
                    />
                  </Grid4>
                }

                <Grid4>
                  <TextInput
                    fieldName='userid'
                    valueName={formDatas.userid}
                    isRequired={true}
                    label='User ID'
                    onChange={(e) => setFormData({ ...formDatas, userid: e.target.value })}
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

                {!isIgrAigrSelected &&
                  <Grid4>
                    <TextInput
                      fieldName='office_name'
                      valueName={formDatas.office_name}
                      isRequired={true}
                      label='Office Name'
                      onChange={(e) => setFormData({ ...formDatas, office_name: e.target.value })}
                    />
                  </Grid4>
                }
                <Grid4>
                  <TextAreaInput
                    fieldName='office_address'
                    valueName={formDatas.office_address}
                    isRequired={true}
                    label='Office Address'
                    onChange={(e) => setFormData({ ...formDatas, office_address: e.target.value })}
                  />
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
                    {userId === '' ? "Save" : "Update"}
                  </Button>
                </Grid12>
              </>}
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
          <Grid
            item
            container
            spacing={1}
            rowSpacing={1}
          // sx={{
          //   padding: 2
          // }}
          >
            <Grid12>
              <Grid4>
                <SelectInput
                  value={filterRole}
                  placeholder='Select User Type'
                  fieldName='role'
                  onChange={(e) => {
                    filterData(e)
                  }}
                  options={roleList}

                />
              </Grid4>
            </Grid12>
          </Grid>

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

export default User