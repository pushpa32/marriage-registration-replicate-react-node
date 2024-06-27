import React, { useRef, useState, useEffect } from 'react'
import '../../Component/style.css';
import { Box, Grid } from '@mui/material';
import { Grid12, Grid3, Grid4, Grid6 } from '../../Component/Form/Grids';
import { TextInputPreview } from '../../Component/Form/TextInput';

const PreviewBride = (props) => {
    const [stepTwo, setStepTwo] = useState(props.data)
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
                <Box className="form-headings">Bride Details/কইনাৰ বিৱৰণ</Box>
            </Grid12>

            <Grid3>
                <TextInputPreview
                    fieldName='prefix'
                    valueName={stepTwo.prefix.label}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='firstName'
                    valueName={stepTwo.firstName}
                    label='First Name/ প্ৰথম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='middleName'
                    valueName={stepTwo.middleName}
                    label='Middle Name/ মধ্যনাম'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lastName'
                    valueName={stepTwo.lastName}
                    label='Last Name/ অন্তিম নাম *'
                    isDisable={true}
                />
            </Grid3>


            <Grid3>
                <TextInputPreview
                    fieldName='fatherprefix'
                    valueName={stepTwo.fatherprefix.label}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='fatherfirstName'
                    valueName={stepTwo.fatherfirstName}
                    label="Father's First Name/পিতাৰ প্ৰথম নাম *"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='fathermiddleName'
                    valueName={stepTwo.fathermiddleName}
                    label="Father's Middle Name/ পিতাৰ মধ্য নাম\"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='fatherlastName'
                    valueName={stepTwo.fatherlastName}
                    label="Father's Last Name/ পিতাৰ অন্তিম নাম *"
                    isDisable={true}
                />
            </Grid3>


            <Grid3>
                <TextInputPreview
                    fieldName='motherprefix'
                    valueName={stepTwo.motherprefix.label}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='motherfirstName'
                    valueName={stepTwo.motherfirstName}
                    label="Mother's First Name/মাতৃৰ প্ৰথম নাম *"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='mothermiddleName'
                    valueName={stepTwo.mothermiddleName}
                    label="Mother's Middle Name/ মাতৃৰ মধ্য নাম"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='motherlastName'
                    valueName={stepTwo.motherlastName}
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
                    valueName={stepTwo.status.label}
                    label='Bride Status/কইনাৰ স্থিতি *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='occupation'
                    valueName={stepTwo.occupation.label}
                    label='Occupation/বৃত্তি *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='dob'
                    valueName={stepTwo.dob}
                    label='Date of Birth/জন্ম তাৰিখ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='phone'
                    valueName={stepTwo.phone}
                    label='Mobile Number/মোবাইল নম্বৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='email'
                    valueName={stepTwo.email}
                    label='E-Mail / ই-মেইল'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='isdisability'
                    valueName={stepTwo.isdisability.label}
                    label='Person with Disability/অক্ষম ব্যক্তি*'
                    isDisable={true}
                />
            </Grid3>
            {
                stepTwo.isdisability.label === "Yes" &&
                <Grid3>
                    <TextInputPreview
                        fieldName='disability'
                        valueName={stepTwo.disability.label}
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
                    valueName={stepTwo.presentcountry.label}
                    label='Country/দেশ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentstate'
                    valueName={stepTwo.presentstate.label}
                    label='State/ৰাজ্য *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentprovince'
                    valueName={stepTwo.presentprovince}
                    label='State/ৰাজ্য/Province/প্ৰদেশ'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentdistrict'
                    valueName={stepTwo.presentdistrict.label}
                    label='District/জিলা*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentvillagetowncity'
                    valueName={stepTwo.presentvillagetowncity}
                    label='Village/Town/City/গাওঁ/চহৰ*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentpolicestation'
                    valueName={stepTwo.presentpolicestation}
                    label='Police Station/থানা *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentpostOffice'
                    valueName={stepTwo.presentpostOffice}
                    label='Post Office/ডাকঘৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentaddressline1'
                    valueName={stepTwo.presentaddressline1}
                    label='Address Line 1/ঠিকনা ৰেখা ১*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentaddressline2'
                    valueName={stepTwo.presentaddressline2}
                    label='Address Line 2/ঠিকনা ৰেখা ২*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentpincode'
                    valueName={stepTwo.presentpincode}
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
                            valueName={stepTwo.presentresidencyperiodmonth.label}
                            label='Month'
                            isDisable={true}
                        />
                    </Grid6>
                    <Grid6>
                        <TextInputPreview
                            fieldName='presentresidencyperiodyear'
                            valueName={stepTwo.presentresidencyperiodyear.label}
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
                stepTwo.ispermanentsameaspresent === 'yes' ?
                    <Grid12>
                        <Box >Same as Present Address / বৰ্তমান ঠিকনাৰ সৈতে একেনে</Box>
                    </Grid12>
                    :
                    <>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentcountry'
                                valueName={stepTwo.permanentcountry.label}
                                label='Country/দেশ *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentstate'
                                valueName={stepTwo.permanentstate.label}
                                label='State/ৰাজ্য *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentprovince'
                                valueName={stepTwo.permanentprovince}
                                label='State/ৰাজ্য/Province/প্ৰদেশ'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentdistrict'
                                valueName={stepTwo.permanentdistrict.label}
                                label='District/জিলা*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentvillagetowncity'
                                valueName={stepTwo.permanentvillagetowncity}
                                label='Village/Town/City/গাওঁ/চহৰ*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentpolicestation'
                                valueName={stepTwo.permanentpolicestation}
                                label='Police Station/থানা *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentpostOffice'
                                valueName={stepTwo.permanentpostOffice}
                                label='Post Office/ডাকঘৰ *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentaddressline1'
                                valueName={stepTwo.permanentaddressline1}
                                label='Address Line 1/ঠিকনা ৰেখা ১*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentaddressline2'
                                valueName={stepTwo.permanentaddressline2}
                                label='Address Line 2/ঠিকনা ৰেখা ২*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentpincode'
                                valueName={stepTwo.permanentpincode}
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
                                        valueName={stepTwo.permanentresidencyperiodmonth.label}
                                        label='Month'
                                        isDisable={true}
                                    />
                                </Grid6>
                                <Grid6>
                                    <TextInputPreview
                                        fieldName='permanentresidencyperiodyear'
                                        valueName={stepTwo.permanentresidencyperiodyear.label}
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

export default PreviewBride