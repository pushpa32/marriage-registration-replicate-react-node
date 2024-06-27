import React, { useRef, useState, useEffect } from 'react'
import '../../Component/style.css';
import { Box, Grid } from '@mui/material';
import { Grid12, Grid3, Grid4, Grid6 } from '../../Component/Form/Grids';
import { TextInputPreview } from '../../Component/Form/TextInput';

const PreviewGroom = (props) => {
    const [stepThree, setStepThree] = useState(props.data)
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
                    valueName={stepThree.prefix.label}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='firstName'
                    valueName={stepThree.firstName}
                    label='First Name/ প্ৰথম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='middleName'
                    valueName={stepThree.middleName}
                    label='Middle Name/ মধ্যনাম'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lastName'
                    valueName={stepThree.lastName}
                    label='Last Name/ অন্তিম নাম *'
                    isDisable={true}
                />
            </Grid3>


            <Grid3>
                <TextInputPreview
                    fieldName='fatherprefix'
                    valueName={stepThree.fatherprefix.label}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='fatherfirstName'
                    valueName={stepThree.fatherfirstName}
                    label="Father's First Name/পিতাৰ প্ৰথম নাম *"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='fathermiddleName'
                    valueName={stepThree.fathermiddleName}
                    label="Father's Middle Name/ পিতাৰ মধ্য নাম\"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='fatherlastName'
                    valueName={stepThree.fatherlastName}
                    label="Father's Last Name/ পিতাৰ অন্তিম নাম *"
                    isDisable={true}
                />
            </Grid3>


            <Grid3>
                <TextInputPreview
                    fieldName='motherprefix'
                    valueName={stepThree.motherprefix.label}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='motherfirstName'
                    valueName={stepThree.motherfirstName}
                    label="Mother's First Name/মাতৃৰ প্ৰথম নাম *"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='mothermiddleName'
                    valueName={stepThree.mothermiddleName}
                    label="Mother's Middle Name/ মাতৃৰ মধ্য নাম"
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='motherlastName'
                    valueName={stepThree.motherlastName}
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
                    valueName={stepThree.status.label}
                    label='Bride Status/কইনাৰ স্থিতি *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='occupation'
                    valueName={stepThree.occupation.label}
                    label='Occupation/বৃত্তি *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='dob'
                    valueName={stepThree.dob}
                    label='Date of Birth/জন্ম তাৰিখ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='phone'
                    valueName={stepThree.phone}
                    label='Mobile Number/মোবাইল নম্বৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='email'
                    valueName={stepThree.email}
                    label='E-Mail / ই-মেইল'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='isdisability'
                    valueName={stepThree.isdisability.label}
                    label='Person with Disability/অক্ষম ব্যক্তি*'
                    isDisable={true}
                />
            </Grid3>
            {
                stepThree.isdisability.label === "Yes" &&
                <Grid3>
                    <TextInputPreview
                        fieldName='disability'
                        valueName={stepThree.disability.label}
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
                    valueName={stepThree.presentcountry.label}
                    label='Country/দেশ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentstate'
                    valueName={stepThree.presentstate.label}
                    label='State/ৰাজ্য *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentprovince'
                    valueName={stepThree.presentprovince}
                    label='State/ৰাজ্য/Province/প্ৰদেশ'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentdistrict'
                    valueName={stepThree.presentdistrict.label}
                    label='District/জিলা*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentvillagetowncity'
                    valueName={stepThree.presentvillagetowncity}
                    label='Village/Town/City/গাওঁ/চহৰ*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentpolicestation'
                    valueName={stepThree.presentpolicestation}
                    label='Police Station/থানা *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentpostOffice'
                    valueName={stepThree.presentpostOffice}
                    label='Post Office/ডাকঘৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentaddressline1'
                    valueName={stepThree.presentaddressline1}
                    label='Address Line 1/ঠিকনা ৰেখা ১*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentaddressline2'
                    valueName={stepThree.presentaddressline2}
                    label='Address Line 2/ঠিকনা ৰেখা ২*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='presentpincode'
                    valueName={stepThree.presentpincode}
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
                            valueName={stepThree.presentresidencyperiodmonth.label}
                            label='Month'
                            isDisable={true}
                        />
                    </Grid6>
                    <Grid6>
                        <TextInputPreview
                            fieldName='presentresidencyperiodyear'
                            valueName={stepThree.presentresidencyperiodyear.label}
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
                stepThree.ispermanentsameaspresent === 'yes' ?
                    <Grid12>
                        <Box >Same as Present Address / বৰ্তমান ঠিকনাৰ সৈতে একেনে</Box>
                    </Grid12>
                    :
                    <>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentcountry'
                                valueName={stepThree.permanentcountry.label}
                                label='Country/দেশ *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentstate'
                                valueName={stepThree.permanentstate.label}
                                label='State/ৰাজ্য *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentprovince'
                                valueName={stepThree.permanentprovince}
                                label='State/ৰাজ্য/Province/প্ৰদেশ'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentdistrict'
                                valueName={stepThree.permanentdistrict.label}
                                label='District/জিলা*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentvillagetowncity'
                                valueName={stepThree.permanentvillagetowncity}
                                label='Village/Town/City/গাওঁ/চহৰ*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentpolicestation'
                                valueName={stepThree.permanentpolicestation}
                                label='Police Station/থানা *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentpostOffice'
                                valueName={stepThree.permanentpostOffice}
                                label='Post Office/ডাকঘৰ *'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentaddressline1'
                                valueName={stepThree.permanentaddressline1}
                                label='Address Line 1/ঠিকনা ৰেখা ১*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentaddressline2'
                                valueName={stepThree.permanentaddressline2}
                                label='Address Line 2/ঠিকনা ৰেখা ২*'
                                isDisable={true}
                            />
                        </Grid3>
                        <Grid3>
                            <TextInputPreview
                                fieldName='permanentpincode'
                                valueName={stepThree.permanentpincode}
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
                                        valueName={stepThree.permanentresidencyperiodmonth.label}
                                        label='Month'
                                        isDisable={true}
                                    />
                                </Grid6>
                                <Grid6>
                                    <TextInputPreview
                                        fieldName='permanentresidencyperiodyear'
                                        valueName={stepThree.permanentresidencyperiodyear.label}
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

export default PreviewGroom