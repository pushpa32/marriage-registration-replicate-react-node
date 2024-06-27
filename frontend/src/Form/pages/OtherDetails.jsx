import React, { useRef, useState, useEffect } from 'react'
import '../Component/style.css';
import { Box, Grid } from '@mui/material';
import { genderOption, options } from '../Component/constant';
import { SelectInputApiCall, SelectInputMMRForm, SelectStateOtherDetails } from '../Component/Form/SelectInput';
import { Grid12, Grid3, Grid4 } from '../Component/Form/Grids';
import TextInput from '../Component/Form/TextInput';
import NumberInput from '../Component/Form/NumberInput';
import { getApiCall } from '../../utils/api';

const OtherDetails = (props) => {
  const formRef = useRef();

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

  const [stateList, setStateList] = useState([])
  const [distList1, setDistList1] = useState([])
  const [distList2, setDistList2] = useState([])
  const [distList3, setDistList3] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const stateLists = await getApiCall("state/get/all")
    setStateList(stateLists.data)
  }

  return (
    <div className='mt-5'>
      <form id="form-step3" onSubmit={handleFormSubmit} ref={formRef}>
        <Box>
          {/* lawyer */}
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
              <Box className="form-headings">Lawyer's Details</Box>
            </Grid12>

            <Grid3>
              <SelectInputMMRForm
                valueName={props.formData.lawyerprefix}
                placeholder='Select Prefix'
                fieldName='lawyerprefix'
                onChange={(selectedOption) => props.onChange('lawyerprefix', selectedOption)}
                options={options}
                isRequired={true}
                label='Prefix *'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='lawyerfirstName'
                valueName={props.formData.lawyerfirstName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='First Name *'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='lawyermiddleName'
                valueName={props.formData.lawyermiddleName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={false}
                label='Middle Name'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='lawyerlastName'
                valueName={props.formData.lawyerlastName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Last Name *'
              />
            </Grid3>

            <Grid4>
              <SelectInputMMRForm
                valueName={props.formData.lawyergender}
                placeholder='Select Gender'
                fieldName='lawyergender'
                onChange={(selectedOption) => props.onChange('lawyergender', selectedOption)}
                options={genderOption}
                isRequired={true}
                label='Gender *'
              />
            </Grid4>

            <Grid4>
              <NumberInput
                fieldName='lawyerphone'
                valueName={props.formData.lawyerphone}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Mobile Number *'
              />
            </Grid4>

            <Grid12>
              <p style={{
                fontWeight: 'bold',
                marginBottom: -10
              }}>Address</p>
            </Grid12>

            <Grid4>
              <SelectStateOtherDetails
                type="lawyer"
                valueName={props.formData.lawyerstate}
                placeholder='Select State'
                fieldName='lawyerstate'
                onChange={(selectedOption) => props.onChange('lawyerstate', selectedOption)}
                options={stateList}
                isRequired={true}
                disableBool={false}
                label='State *'
                setDistList={setDistList1}
                stateData={props}
              />
            </Grid4>

            <Grid4>
              <SelectInputApiCall
                valueName={props.formData.lawyerdistrict}
                placeholder='Select District'
                fieldName='lawyerdistrict'
                onChange={(selectedOption) => props.onChange('lawyerdistrict', selectedOption)}
                options={distList1}
                isRequired={true}
                disableBool={false}
                label='District *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='lawyervillagetowncity'
                valueName={props.formData.lawyervillagetowncity}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Village/Town/City *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='lawyerpolicestation'
                valueName={props.formData.lawyerpolicestation}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Police Station *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='lawyerpostoffice'
                valueName={props.formData.lawyerpostoffice}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Post Office *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='lawyerpincode'
                valueName={props.formData.lawyerpincode}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Pin Code *'
              />
            </Grid4>
          </Grid>

          {/* witness 1 */}
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
              <Box className="form-headings">1. Witness</Box>
            </Grid12>

            <Grid3>
              <SelectInputMMRForm
                valueName={props.formData.witness1prefix}
                placeholder='Select Prefix'
                fieldName='witness1prefix'
                onChange={(selectedOption) => props.onChange('witness1prefix', selectedOption)}
                options={options}
                isRequired={true}
                label='Prefix *'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='witness1firstName'
                valueName={props.formData.witness1firstName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='First Name *'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='witness1middleName'
                valueName={props.formData.witness1middleName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={false}
                label='Middle Name'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='witness1lastName'
                valueName={props.formData.witness1lastName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Last Name *'
              />
            </Grid3>

            <Grid4>
              <SelectInputMMRForm
                valueName={props.formData.witness1gender}
                placeholder='Select Gender'
                fieldName='witness1gender'
                onChange={(selectedOption) => props.onChange('witness1gender', selectedOption)}
                options={genderOption}
                isRequired={true}
                label='Gender *'
              />
            </Grid4>

            <Grid4>
              <NumberInput
                fieldName='witness1phone'
                valueName={props.formData.witness1phone}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Mobile Number *'
              />
            </Grid4>

            <Grid12>
              <p style={{
                fontWeight: 'bold',
                marginBottom: -10
              }}>Address</p>
            </Grid12>

            <Grid4>
              <SelectStateOtherDetails
                type="witness1"
                valueName={props.formData.witness1state}
                placeholder='Select State'
                fieldName='witness1state'
                onChange={(selectedOption) => props.onChange('witness1state', selectedOption)}
                options={stateList}
                isRequired={true}
                disableBool={false}
                label='State *'
                setDistList={setDistList2}
                stateData={props}
              />
            </Grid4>

            <Grid4>
              <SelectInputApiCall
                valueName={props.formData.witness1district}
                placeholder='Select District'
                fieldName='witness1district'
                onChange={(selectedOption) => props.onChange('witness1district', selectedOption)}
                options={distList2}
                isRequired={true}
                disableBool={false}
                label='District *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='witness1villagetowncity'
                valueName={props.formData.witness1villagetowncity}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Village/Town/City *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='witness1policestation'
                valueName={props.formData.witness1policestation}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Police Station *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='witness1postoffice'
                valueName={props.formData.witness1postoffice}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Post Office *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='witness1pincode'
                valueName={props.formData.witness1pincode}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Pin Code *'
              />
            </Grid4>
          </Grid>

          {/* witness 2 */}
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
              <Box className="form-headings">2. Witness </Box>
            </Grid12>

            <Grid3>
              <SelectInputMMRForm
                valueName={props.formData.witness2prefix}
                placeholder='Select Prefix'
                fieldName='witness2prefix'
                onChange={(selectedOption) => props.onChange('witness2prefix', selectedOption)}
                options={options}
                isRequired={true}
                label='Prefix *'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='witness2firstName'
                valueName={props.formData.witness2firstName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='First Name *'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='witness2middleName'
                valueName={props.formData.witness2middleName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={false}
                label='Middle Name '
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='witness2lastName'
                valueName={props.formData.witness2lastName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Last Name *'
              />
            </Grid3>

            <Grid4>
              <SelectInputMMRForm
                valueName={props.formData.witness2gender}
                placeholder='Select Gender'
                fieldName='witness2gender'
                onChange={(selectedOption) => props.onChange('witness2gender', selectedOption)}
                options={genderOption}
                isRequired={true}
                label='Gender *'
              />
            </Grid4>

            <Grid4>
              <NumberInput
                fieldName='witness2phone'
                valueName={props.formData.witness2phone}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Mobile Number *'
              />
            </Grid4>

            <Grid12>
              <p style={{
                fontWeight: 'bold',
                marginBottom: -10
              }}>Address</p>
            </Grid12>

            <Grid4>
              <SelectStateOtherDetails
                type="witness2"
                valueName={props.formData.witness2state}
                placeholder='Select State'
                fieldName='witness2state'
                onChange={(selectedOption) => props.onChange('witness2state', selectedOption)}
                options={stateList}
                isRequired={true}
                disableBool={false}
                label='State *'
                setDistList={setDistList3}
                stateData={props}
              />
            </Grid4>

            <Grid4>
              <SelectInputApiCall
                valueName={props.formData.witness2district}
                placeholder='Select District'
                fieldName='witness2district'
                onChange={(selectedOption) => props.onChange('witness2district', selectedOption)}
                options={distList3}
                isRequired={true}
                disableBool={false}
                label='District*'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='witness2villagetowncity'
                valueName={props.formData.witness2villagetowncity}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Village/Town/City *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='witness2policestation'
                valueName={props.formData.witness2policestation}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Police Station *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='witness2postoffice'
                valueName={props.formData.witness2postoffice}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Post Office *'
              />
            </Grid4>

            <Grid4>
              <TextInput
                fieldName='witness2pincode'
                valueName={props.formData.witness2pincode}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Pin Code *'
              />
            </Grid4>
          </Grid>
        </Box>

      </form>
    </div >
  );
}

export default OtherDetails