import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-cool-form";
import '../Component/style.css';
import { Box, Grid } from '@mui/material';
import { districtList, genderOption, options } from '../Component/constant';
import TextInput from '../Component/Form/TextInput';
import { Grid12, Grid3, Grid4, Grid6 } from '../Component/Form/Grids';
import NumberInput from '../Component/Form/NumberInput';
import SelectInput, { SelectInputApiCall, SelectInputMMRForm, SelectInputOnApiCall } from '../Component/Form/SelectInput';
import EmailInput from '../Component/Form/EmailInput';
import { getApiCall, postApiCall } from '../../utils/api';


const ApplicantForm = (props) => {
  const formRef = useRef();

  const { form } = useForm({
    defaultValues: { username: "", email: "", password: "" },
    onSubmit: (values) => {
      props.handleNext(values);
    },
    onError: (errors) => console.log("onError: ", errors)
  });

  useEffect(() => {
    getData()
  }, [])

  const [distList, setDistList] = useState([])
  const [officeList, setOfficeList] = useState([])
  const getData = async () => {
    const distList = await postApiCall("district/get/by/state", { "state_id": '4' })
    setDistList(distList.data)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const entries = Array.from(formData.entries());
    const formValues = entries.reduce(
      (prev, [name, value]) => ({
        ...prev,
        [name]: value,
      }),
      {}
    );
    props.handleNext(formValues);
  };

  return (
    <div className='mt-5'>
      <form id="form-step0" onSubmit={handleFormSubmit} ref={formRef}>

        <Box>
          <Grid
            item
            container
            spacing={2}
            rowSpacing={3}
            sx={{
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center'
            }}
            className='card-box-shadow'
          >

            {/* header */}
            <Grid12>
              <Box className="form-headings">Apply for Marriage Registration</Box>
            </Grid12>

            <Grid3>
              <SelectInputMMRForm
                valueName={props.formData.prefix}
                placeholder='Select Prefix'
                fieldName='prefix'
                onChange={(selectedOption) => props.onChange('prefix', selectedOption)}
                options={options}
                isRequired={true}
                label='Prefix *'
              />
              {/* <Form.Group>
                <label>Prefix/ উপসৰ্গ *</label>
                <Select
                  value={props.formData.prefix}
                  placeholder="Select Prefix"
                  name='prefix'
                  onChange={(selectedOption) => {
                    console.log(selectedOption);
                    props.onChange('prefix', selectedOption)
                  }}
                  options={options.map((item) => ({
                    label: item.label,
                    value: item.label,
                  }))}
                  required={true}
                />

                <Form.Control.Feedback type="invalid">
                  Please select Your State.
                </Form.Control.Feedback>
              </Form.Group> */}
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='firstName'
                valueName={props.formData.firstName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='First Name *'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='middleName'
                valueName={props.formData.middleName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={false}
                label='Middle Name'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='lastName'
                valueName={props.formData.lastName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Last Name *'
              />
            </Grid3>

            <Grid4>
              <SelectInputMMRForm
                valueName={props.formData.gender}
                placeholder='Select Gender'
                fieldName='gender'
                onChange={(selectedOption) => props.onChange('gender', selectedOption)}
                options={genderOption}
                isRequired={true}
                label='Gender *'
              />
            </Grid4>

            <Grid4>
              <NumberInput
                fieldName='phone'
                valueName={props.formData.phone}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Mobile Number *'
              />
            </Grid4>

            <Grid4>
              <EmailInput
                fieldName='email'
                valueName={props.formData.email}
                isRequired={false}
                label='E-Mail'
                onChange={(e) => props.onChange(e, null)}
              />
            </Grid4>
          </Grid>

          {/* second */}
          <Grid
            item
            container
            spacing={2}
            rowSpacing={3}
            sx={{
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center'
            }}
            className='mt-3 card-box-shadow'
          >
            {/* header */}
            <Grid12>
              <Box className="form-headings mt-3">Applied To</Box>
            </Grid12>

            <Grid6>
              <SelectInputOnApiCall
                valueName={props.formData.district}
                placeholder='Select District'
                fieldName='district'
                onChange={(selectedOption) => props.onChange('district', selectedOption)}
                options={distList}
                isRequired={true}
                label='Select District *'
                setData={setOfficeList}
                apiEndPoints="kazi/get/byDistrictId"
                emptyOnChange={props}
              />
            </Grid6>

            <Grid6>
              <SelectInputMMRForm
                valueName={props.formData.office}
                placeholder='Select Office'
                fieldName='office'
                onChange={(selectedOption) => props.onChange('office', selectedOption)}
                options={officeList}
                isRequired={true}
                label='Select office *'
              />
            </Grid6>
          </Grid>
        </Box>
      </form>
    </div >
  );
}

export default ApplicantForm