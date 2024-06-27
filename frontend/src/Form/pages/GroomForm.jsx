import React, { useRef, useState } from 'react'
import '../Component/style.css';
import { Box, Grid } from '@mui/material';
import { disabilityOption, femalePrefixOptions, malePrefixOptions, months, occupationList, statusList, years, yesNoOptions } from '../Component/constant';
import { Grid12, Grid3, Grid4, Grid6 } from '../Component/Form/Grids';
import { SelectInputApiCall, SelectInputCountryCall, SelectInputDisable, SelectInputDisabled, SelectInputMMRForm, SelectInputStateCall } from '../Component/Form/SelectInput';
import TextInput, { TextInputDisable } from '../Component/Form/TextInput';
import DateInput from '../Component/Form/DateInput';
import NumberInput from '../Component/Form/NumberInput';
import { useEffect } from 'react';
import { getApiCall } from '../../utils/api';

const GroomForm = (props) => {
  const formRef = useRef();

  const [isdisability, setIsDisability] = useState(props.formData.isdisability.label === "Yes" ? true : false)
  const [isIndiaPresent, setIsIndiaPresent] = useState(props.formData.presentcountry.label === "India" ? true : false)
  const [isIndiaPermanent, setIsIndiaPermanent] = useState(props.formData.permanentcountry.label === "India" ? true : false)
  const [isSameAddress, setIsSameAddress] = useState(props.formData.ispermanentsameaspresent === "yes" ? true : false);


  useEffect(() => {
    getData()
  }, [])

  const [stateList, setStateList] = useState([])
  const [distList, setDistList] = useState([])

  const [stateList2, setStateList2] = useState([])
  const [distList2, setDistList2] = useState([])

  const [countryList, setCountryList] = useState([])
  const getData = async () => {
    const distList = await getApiCall("district/get/country")
    setCountryList(distList.data)
  }

  const getMaxDate = () => {
    const currentDate = new Date();
    return new Date(
      currentDate.getFullYear() - 21,
      currentDate.getMonth(),
      currentDate.getDate()
    ).toISOString().split('T')[0];
  };

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
      <form id="form-step2" onSubmit={handleFormSubmit} ref={formRef}>

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
              <Box className="form-headings">Groom Details</Box>
            </Grid12>

            {/* bride info */}
            <Grid3>
              <SelectInputMMRForm
                valueName={props.formData.prefix}
                placeholder='Select Prefix'
                fieldName='prefix'
                onChange={(selectedOption) => props.onChange('prefix', selectedOption)}
                options={malePrefixOptions}
                isRequired={true}
                label='Prefix *'
              />
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

            {/* Father's info */}
            <Grid3>
              <SelectInputMMRForm
                valueName={props.formData.fatherprefix}
                placeholder='Select Prefix'
                fieldName='fatherprefix'
                onChange={(selectedOption) => props.onChange('fatherprefix', selectedOption)}
                options={malePrefixOptions}
                isRequired={true}
                label='Prefix *'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='fatherfirstName'
                valueName={props.formData.fatherfirstName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label="Father's First Name *"
              />

            </Grid3>

            <Grid3>
              <TextInput
                fieldName='fathermiddleName'
                valueName={props.formData.fathermiddleName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={false}
                label="Father's Middle Name"
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='fatherlastName'
                valueName={props.formData.fatherlastName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label="Father's Last Name *"
              />
            </Grid3>

            {/* Mother's info */}
            <Grid3>
              <SelectInputMMRForm
                valueName={props.formData.motherprefix}
                placeholder='Select Prefix'
                fieldName='motherprefix'
                onChange={(selectedOption) => props.onChange('motherprefix', selectedOption)}
                options={femalePrefixOptions}
                isRequired={true}
                label='Prefix *'
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='motherfirstName'
                valueName={props.formData.motherfirstName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label="Mother's First Name *"
              />

            </Grid3>

            <Grid3>
              <TextInput
                fieldName='mothermiddleName'
                valueName={props.formData.mothermiddleName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={false}
                label="Mother's Middle Name"
              />
            </Grid3>

            <Grid3>
              <TextInput
                fieldName='motherlastName'
                valueName={props.formData.motherlastName}
                onChange={(e) => props.onChange(e, null)}
                isRequired={false}
                label="Mother Last Name *"
              />
            </Grid3>
          </Grid>

          {/* second */}
          <Grid
            item
            container
            spacing={2}
            rowSpacing={3}
            sx={{
            }}
            className='mt-3 card-box-shadow'
          >

            <Grid6>
              <SelectInputMMRForm
                valueName={props.formData.status}
                placeholder='Select Status'
                fieldName='status'
                onChange={(selectedOption) => props.onChange('status', selectedOption)}
                options={statusList}
                isRequired={true}
                label='Groom Status *'
              />
            </Grid6>

            <Grid6>
              <SelectInputMMRForm
                valueName={props.formData.occupation}
                placeholder='Select Occupation'
                fieldName='occupation'
                onChange={(selectedOption) => props.onChange('occupation', selectedOption)}
                options={occupationList}
                isRequired={true}
                label='Occupation *'
              />
            </Grid6>

            <Grid6>
              <DateInput
                fieldName='dob'
                valueName={props.formData.dob}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label="Date of Birth *"
                minDate="1900-01-01"
                maxDate={getMaxDate()}
              />
            </Grid6>

            <Grid6>
              <NumberInput
                fieldName='phone'
                valueName={props.formData.phone}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                label='Mobile Number *'
              />
            </Grid6>

            <Grid6>
              <TextInput
                fieldName='email'
                valueName={props.formData.email}
                onChange={(e) => props.onChange(e, null)}
                isRequired={false}
                label='E-Mail'
              />
            </Grid6>


            <Grid6>
              <SelectInputDisable
                valueName={props.formData.isdisability}
                placeholder='Select Option'
                fieldName='isdisability'
                onChange={(selectedOption) => props.onChange('isdisability', selectedOption)}
                options={yesNoOptions}
                isRequired={true}
                label='Person with Disability *'
                setIsDisability={setIsDisability}
              />
            </Grid6>

            {isdisability && <Grid6>
              <SelectInputDisabled
                valueName={props.formData.disability}
                placeholder='Select Option'
                fieldName='disability'
                onChange={(selectedOption) => props.onChange('disability', selectedOption)}
                options={disabilityOption}
                isRequired={true}
                label='If Yes *'
              />
            </Grid6>}



          </Grid>

          {/* Third */}
          <Grid
            item
            container
            spacing={2}
            rowSpacing={3}
            sx={{
            }}
            className='mt-3 card-box-shadow'
          >

            <Grid12>
              <Box className="form-headings">Groom Present Address/ Country *</Box>
            </Grid12>

            <Grid4>
              <SelectInputCountryCall
                isBrideForm={false}
                isPresent={true}
                valueName={props.formData.presentcountry}
                placeholder='Select Country'
                fieldName='presentcountry'
                onChange={(selectedOption) => props.onChange('presentcountry', selectedOption)}
                options={countryList}
                isRequired={true}
                label='Country *'
                setIsIndiaPresent={setIsIndiaPresent}
                stateData={props}
                setStateList={setStateList}
                setDistList={setDistList}
              />
            </Grid4>

            <Grid4>
              <SelectInputStateCall
              isBrideForm={false}
                isPresent={true}
                valueName={props.formData.presentstate}
                placeholder='Select State'
                fieldName='presentstate'
                onChange={(selectedOption) => props.onChange('presentstate', selectedOption)}
                options={stateList}
                isRequired={true}
                disableBool={!isIndiaPresent}
                label='State *'
                setDistList={setDistList}
                stateData={props}
              />
            </Grid4>

            <Grid4>
              <TextInputDisable
                fieldName='presentprovince'
                valueName={props.formData.presentprovince}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                isDisabled={isIndiaPresent}
                label='State/Province'
              />
            </Grid4>

            <Grid4>
              <SelectInputApiCall
                valueName={props.formData.presentdistrict}
                placeholder='Select District'
                fieldName='presentdistrict'
                onChange={(selectedOption) => props.onChange('presentdistrict', selectedOption)}
                options={distList}
                isRequired={true}
                disableBool={!isIndiaPresent}
                label='District *'
              />
            </Grid4>


            <Grid4>
              <TextInputDisable
                fieldName='presentvillagetowncity'
                valueName={props.formData.presentvillagetowncity}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                isDisabled={false}
                label='Village/Town/City *'
              />
            </Grid4>

            <Grid4>
              <TextInputDisable
                fieldName='presentpolicestation'
                valueName={props.formData.presentpolicestation}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                isDisabled={!isIndiaPresent}
                label='Police Station *'
              />
            </Grid4>

            <Grid4>
              <TextInputDisable
                fieldName='presentpostOffice'
                valueName={props.formData.presentpostOffice}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                isDisabled={!isIndiaPresent}
                label='Post Office *'
              />
            </Grid4>

            <Grid4>
              <TextInputDisable
                fieldName='presentaddressline1'
                valueName={props.formData.presentaddressline1}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                isDisabled={isIndiaPresent}
                label='Address Line 1 *'
              />
            </Grid4>

            <Grid4>
              <TextInputDisable
                fieldName='presentaddressline2'
                valueName={props.formData.presentaddressline2}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                isDisabled={isIndiaPresent}
                label='Address Line 2 *'
              />
            </Grid4>

            <Grid4>
              <TextInputDisable
                fieldName='presentpincode'
                valueName={props.formData.presentpincode}
                onChange={(e) => props.onChange(e, null)}
                isRequired={true}
                isDisabled={false}
                label='Pin Code *'
              />
            </Grid4>

            <Grid4>
              <label>Residency period at present address *</label>

              <Grid item sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Grid6>
                  <SelectInputMMRForm
                    valueName={props.formData.presentresidencyperiodmonth}
                    placeholder='Select Month'
                    fieldName='presentresidencyperiodmonth'
                    onChange={(selectedOption) => props.onChange('presentresidencyperiodmonth', selectedOption)}
                    options={months}
                    isRequired={true}
                    label='Month'
                  />
                </Grid6>
                <Grid6>
                  <SelectInputMMRForm
                    valueName={props.formData.presentresidencyperiodyear}
                    placeholder='Select Year'
                    fieldName='presentresidencyperiodyear'
                    onChange={(selectedOption) => props.onChange('presentresidencyperiodyear', selectedOption)}
                    options={years}
                    isRequired={true}
                    label='Year'
                  />
                </Grid6>
              </Grid>
            </Grid4>
          </Grid>

          {/* Fourth */}
          <Grid
            item
            container
            spacing={2}
            rowSpacing={3}
            sx={{
            }}
            className='mt-3 card-box-shadow'
          >

            <Grid12>
              <Box className="form-headings">Groom Permanent Address</Box>
            </Grid12>
            <Grid3>Same as Present Address ?*</Grid3>
            <Grid3>
              <div>
                <input
                  type="radio"
                  id="sameAddressYes"
                  name="ispermanentsameaspresent"
                  value="yes"
                  checked={isSameAddress}
                  onChange={(e) => {
                    setIsSameAddress(e.target.value === "yes" ? true : false);
                    props.onChange(e, null)
                  }}
                />
                <label htmlFor="sameAddressYes">Yes</label>

                <input
                  type="radio"
                  id="sameAddressNo"
                  name="ispermanentsameaspresent"
                  value="no"
                  checked={!isSameAddress}
                  onChange={(e) => {
                    setIsSameAddress(e.target.value === "no" ? false : true);
                    props.onChange(e, null)
                  }}
                />
                <label htmlFor="sameAddressNo">No</label>
              </div>
            </Grid3>

            {
              !isSameAddress &&
              <Grid
                item
                container
                spacing={2}
                rowSpacing={3}
                sx={{
                }}
              >

                <Grid4>
                  <SelectInputCountryCall
                    isBrideForm={false}
                    isPresent={false}
                    valueName={props.formData.permanentcountry}
                    placeholder='Select Country'
                    fieldName='permanentcountry'
                    onChange={(selectedOption) => props.onChange('permanentcountry', selectedOption)}
                    options={countryList}
                    isRequired={true}
                    label='Country *'
                    setIsIndiaPresent={setIsIndiaPermanent}
                    stateData={props}
                    setStateList={setStateList2}
                    setDistList={setDistList2}
                  />
                </Grid4>

                <Grid4>
                  <SelectInputStateCall
                  isBrideForm={false}
                    isPresent={true}
                    valueName={props.formData.permanentstate}
                    placeholder='Select State'
                    fieldName='permanentstate'
                    onChange={(selectedOption) => props.onChange('permanentstate', selectedOption)}
                    options={stateList2}
                    isRequired={true}
                    disableBool={!isIndiaPermanent}
                    label='State *'
                    setDistList={setDistList2}
                    stateData={props}
                  />
                </Grid4>

                <Grid4>
                  <TextInputDisable
                    fieldName='permanentprovince'
                    valueName={props.formData.permanentprovince}
                    onChange={(e) => props.onChange(e, null)}
                    isRequired={true}
                    isDisabled={isIndiaPermanent}
                    label='State/Province'
                  />
                </Grid4>
                <Grid4>
                  <SelectInputApiCall
                    valueName={props.formData.permanentdistrict}
                    placeholder='Select District'
                    fieldName='permanentdistrict'
                    onChange={(selectedOption) => props.onChange('permanentdistrict', selectedOption)}
                    options={distList2}
                    isRequired={true}
                    disableBool={!isIndiaPermanent}
                    label='District *'
                  />
                </Grid4>


                <Grid4>
                  <TextInputDisable
                    fieldName='permanentvillagetowncity'
                    valueName={props.formData.permanentvillagetowncity}
                    onChange={(e) => props.onChange(e, null)}
                    isRequired={true}
                    isDisabled={false}
                    label='Village/Town/City *'
                  />
                </Grid4>

                <Grid4>
                  <TextInputDisable
                    fieldName='permanentpolicestation'
                    valueName={props.formData.permanentpolicestation}
                    onChange={(e) => props.onChange(e, null)}
                    isRequired={true}
                    isDisabled={!isIndiaPermanent}
                    label='Police Station *'
                  />
                </Grid4>

                <Grid4>
                  <TextInputDisable
                    fieldName='permanentpostOffice'
                    valueName={props.formData.permanentpostOffice}
                    onChange={(e) => props.onChange(e, null)}
                    isRequired={true}
                    isDisabled={!isIndiaPermanent}
                    label='Post Office *'
                  />
                </Grid4>

                <Grid4>
                  <TextInputDisable
                    fieldName='permanentaddressline1'
                    valueName={props.formData.permanentaddressline1}
                    onChange={(e) => props.onChange(e, null)}
                    isRequired={true}
                    isDisabled={isIndiaPermanent}
                    label='Address Line 1 *'
                  />
                </Grid4>

                <Grid4>
                  <TextInputDisable
                    fieldName='permanentaddressline2'
                    valueName={props.formData.permanentaddressline2}
                    onChange={(e) => props.onChange(e, null)}
                    isRequired={true}
                    isDisabled={isIndiaPermanent}
                    label='Address Line 2 *'
                  />
                </Grid4>

                <Grid4>
                  <TextInputDisable
                    fieldName='permanentpincode'
                    valueName={props.formData.permanentpincode}
                    onChange={(e) => props.onChange(e, null)}
                    isRequired={true}
                    isDisabled={false}
                    label='Pin Code *'
                  />
                </Grid4>

                <Grid4>
                  <label>Residency period at permanent address *</label>

                  <Grid item sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <Grid6>
                      <SelectInputMMRForm
                        valueName={props.formData.permanentresidencyperiodmonth}
                        placeholder='Select Month'
                        fieldName='permanentresidencyperiodmonth'
                        onChange={(selectedOption) => props.onChange('permanentresidencyperiodmonth', selectedOption)}
                        options={months}
                        isRequired={true}
                        label='Month'
                      />
                    </Grid6>
                    <Grid6>
                      <SelectInputMMRForm
                        valueName={props.formData.permanentresidencyperiodyear}
                        placeholder='Select Year'
                        fieldName='permanentresidencyperiodyear'
                        onChange={(selectedOption) => props.onChange('permanentresidencyperiodyear', selectedOption)}
                        options={years}
                        isRequired={true}
                        label='Year'
                      />
                    </Grid6>
                  </Grid>
                </Grid4>
              </Grid>
            }
          </Grid>
        </Box>
      </form>
    </div >
  );
}

export default GroomForm