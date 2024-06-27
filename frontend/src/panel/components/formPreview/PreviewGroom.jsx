import React from 'react'
import '../../../Form/Component/style.css';
import { Box, Grid } from '@mui/material';
import { Grid12, Grid3, Grid4, Grid6 } from '../../../Form/Component/Form/Grids';
import { TextInputPreview } from '../../../Form/Component/Form/TextInput';

const PreviewGroomPanel = (props) => {

    return (
        <Grid
            item
            container
            spacing={2}
            rowSpacing={3}
            className='card-box-shadow mt-3'
        >
            {/* header */}
            <Grid12>
                <Box className="form-headings">Groom Details/কইনাৰ বিৱৰণ</Box>
            </Grid12>

            <Grid3>
                <TextInputPreview
                    fieldName='prefix'
                    valueName={props.data.prefix}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='firstName'
                    valueName={props.data.first_name}
                    label='First Name/ প্ৰথম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='middleName'
                    valueName={props.data.middle_name}
                    label='Middle Name/ মধ্যনাম'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lastName'
                    valueName={props.data.last_name}
                    label='Last Name/ অন্তিম নাম *'
                    isDisable={true}
                />
            </Grid3>


            <Grid3>
                <TextInputPreview
                    fieldName='fatherprefix'
                    valueName={props.data.father_prefix}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='fatherfirstName'
                    valueName={props.data.father_first_name}
                    label="Father's First Name/পিতাৰ প্ৰথম নাম *"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='fathermiddleName'
                    valueName={props.data.father_middle_name}
                    label="Father's Middle Name/ পিতাৰ মধ্য নাম\"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='fatherlastName'
                    valueName={props.data.father_last_name}
                    label="Father's Last Name/ পিতাৰ অন্তিম নাম *"
                    isDisable={true}
                />
            </Grid3>


            <Grid3>
                <TextInputPreview
                    fieldName='motherprefix'
                    valueName={props.data.mother_prefix}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='motherfirstName'
                    valueName={props.data.mother_first_name}
                    label="Mother's First Name/মাতৃৰ প্ৰথম নাম *"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='mothermiddleName'
                    valueName={props.data.mother_middle_name}
                    label="Mother's Middle Name/ মাতৃৰ মধ্য নাম"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='motherlastName'
                    valueName={props.data.mother_last_name}
                    label="Mother Last Name/ মাতৃৰ অন্তিম নাম *"
                    isDisable={true}
                />
            </Grid3>

            <Grid12>
                <p style={{
                    fontWeight: 'bold',
                    marginBottom: -10
                }}>Basic Details</p>
            </Grid12>
            <Grid3>
                <TextInputPreview
                    fieldName='status'
                    valueName={props.data.status}
                    label='Bride Status/কইনাৰ স্থিতি *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='occupation'
                    valueName={props.data.occupation}
                    label='Occupation/বৃত্তি *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='dob'
                    valueName={props.data.dob}
                    label='Date of Birth/জন্ম তাৰিখ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='phone'
                    valueName={props.data.phone}
                    label='Mobile Number/মোবাইল নম্বৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='email'
                    valueName={props.data.email}
                    label='E-Mail / ই-মেইল'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='isdisability'
                    valueName={props.data.isdisability}
                    label='Person with Disability/অক্ষম ব্যক্তি*'
                    isDisable={true}
                />
            </Grid3>
            {
                props.data.isdisability === "Yes" &&
                <Grid3>
                    <TextInputPreview
                        fieldName='disability'
                        valueName={props.data.disability}
                        label='Person with Disability/অক্ষম ব্যক্তি*'
                        isDisable={true}
                    />
                </Grid3>
            }

            <Grid12>
                <p style={{
                    fontWeight: 'bold',
                    marginBottom: -10
                }}>Present Address</p>
            </Grid12>

            <Grid3>
                <TextInputPreview
                    fieldName='presentcountry'
                    valueName={props.data.present_country_name}
                    label='Country/দেশ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentstate'
                    valueName={props.data.present_state_name}
                    label='State/ৰাজ্য *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentprovince'
                    valueName={props.data.present_province}
                    label='State/ৰাজ্য/Province/প্ৰদেশ'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentdistrict'
                    valueName={props.data.present_district_name}
                    label='District/জিলা*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentvillagetowncity'
                    valueName={props.data.present_villagetowncity}
                    label='Village/Town/City/গাওঁ/চহৰ*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentpolicestation'
                    valueName={props.data.present_policestation}
                    label='Police Station/থানা *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentpostOffice'
                    valueName={props.data.present_postoffice}
                    label='Post Office/ডাকঘৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentaddressline1'
                    valueName={props.data.present_addressline1}
                    label='Address Line 1/ঠিকনা ৰেখা ১*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentaddressline2'
                    valueName={props.data.present_addressline2}
                    label='Address Line 2/ঠিকনা ৰেখা ২*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentpincode'
                    valueName={props.data.present_pincode}
                    label='Pin Code/পিন *'
                    isDisable={true}
                />
            </Grid3>

            <Grid4>
                <label>Residency period at present address *</label>

                <Grid item sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Grid6>
                        <TextInputPreview
                            fieldName='presentresidencyperiodmonth'
                            valueName={props.data.present_residencyperiodmonth}
                            label='Month'
                            isDisable={true}
                        />
                    </Grid6>
                    <Grid6>
                        <TextInputPreview
                            fieldName='presentresidencyperiodyear'
                            valueName={props.data.present_residencyperiodyear}
                            label='Year'
                            isDisable={true}
                        />
                    </Grid6>
                </Grid>
            </Grid4>



            <Grid12>
                <p style={{
                    fontWeight: 'bold',
                    marginBottom: -10
                }}>Permanent Address</p>
            </Grid12>
            {
                props.data.is_permanent_same_as_present === 'yes' ?
                    <Grid12>
                        <Box >Same as Present Address / বৰ্তমান ঠিকনাৰ সৈতে একেনে</Box>
                    </Grid12>
                    :
                    <>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentcountry'
                                valueName={props.data.permanent_country_name}
                                label='Country/দেশ *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentstate'
                                valueName={props.data.permanent_state_name}
                                label='State/ৰাজ্য *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentprovince'
                                valueName={props.data.permanent_province}
                                label='State/ৰাজ্য/Province/প্ৰদেশ'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentdistrict'
                                valueName={props.data.permanent_district_name}
                                label='District/জিলা*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentvillagetowncity'
                                valueName={props.data.permanent_villagetowncity}
                                label='Village/Town/City/গাওঁ/চহৰ*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentpolicestation'
                                valueName={props.data.permanent_policestation}
                                label='Police Station/থানা *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentpostOffice'
                                valueName={props.data.permanent_postOffice}
                                label='Post Office/ডাকঘৰ *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentaddressline1'
                                valueName={props.data.permanent_addressline1}
                                label='Address Line 1/ঠিকনা ৰেখা ১*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentaddressline2'
                                valueName={props.data.permanent_addressline2}
                                label='Address Line 2/ঠিকনা ৰেখা ২*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentpincode'
                                valueName={props.data.permanent_pincode}
                                label='Pin Code/পিন *'
                                isDisable={true}
                            />
                        </Grid3>

                        <Grid4>
                            <label>Residency period at Present address *</label>

                            <Grid item sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Grid6>
                                    <TextInputPreview
                                        fieldName='permanentresidencyperiodmonth'
                                        valueName={props.data.permanent_residencyperiodmonth}
                                        label='Month'
                                        isDisable={true}
                                    />
                                </Grid6>
                                <Grid6>
                                    <TextInputPreview
                                        fieldName='permanentresidencyperiodyear'
                                        valueName={props.data.permanent_residencyperiodyear}
                                        label='Year'
                                        isDisable={true}
                                    />
                                </Grid6>
                            </Grid>
                        </Grid4>
                    </>
            }

        </Grid>
    )
}

export default PreviewGroomPanel