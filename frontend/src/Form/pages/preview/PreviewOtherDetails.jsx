import React, { useRef, useState, useEffect } from 'react'
import '../../Component/style.css';
import { Box, Grid } from '@mui/material';
import { Grid12, Grid3, Grid4, Grid6 } from '../../Component/Form/Grids';
import { TextInputPreview } from '../../Component/Form/TextInput';

const PreviewOtherDetails = (props) => {
    const [stepFour, setStepFour] = useState(props.data)
    return (
        <Grid
            item
            container
            spacing={2}
            rowSpacing={3}
            className='card-box-shadow mt-3'
        >
            {/* Lawyer */}
            <Grid12>
                <Box className="form-headings">Lawyer's Details / উকীলৰ বিৱৰণ</Box>
            </Grid12>

            <Grid3>
                <TextInputPreview
                    fieldName='lawyerprefix'
                    valueName={stepFour.lawyerprefix.label}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerfirstName'
                    valueName={stepFour.lawyerfirstName.label}
                    label='First Name/ প্ৰথম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyermiddleName'
                    valueName={stepFour.lawyermiddleName}
                    label='Middle Name/ মধ্যনাম'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerlastName'
                    valueName={stepFour.lawyerlastName}
                    label='Last Name/ অন্তিম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyergender'
                    valueName={stepFour.lawyergender.label}
                    label='Gender / লিংগ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerphone'
                    valueName={stepFour.lawyerphone}
                    label='Mobile Number / দুৰভাষ ( মবাইল ) *'
                    isDisable={true}
                />
            </Grid3>

            <Grid12>
                <p style={{
                    fontWeight: 'bold',
                    marginBottom: -10
                }}>Address</p>
            </Grid12>

            <Grid3>
                <TextInputPreview
                    fieldName='lawyerstate'
                    valueName={stepFour.lawyerstate.label}
                    label='State/ৰাজ্য *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerdistrict'
                    valueName={stepFour.lawyerdistrict.label}
                    label='District/জিলা*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyervillagetowncity'
                    valueName={stepFour.lawyervillagetowncity}
                    label='Village/Town/City/গাওঁ/চহৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerpolicestation'
                    valueName={stepFour.lawyerpolicestation}
                    label='Police Station/থানা *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerpostoffice'
                    valueName={stepFour.lawyerpostoffice}
                    label='Post Office/ডাকঘৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerpincode'
                    valueName={stepFour.lawyerpincode}
                    label='Pin Code/পিন *'
                    isDisable={true}
                />
            </Grid3>


            {/* Witness 1 */}
            <Grid12>
                <Box className="form-headings">1. Witness / সাক্ষী Details</Box>
            </Grid12>

            <Grid3>
                <TextInputPreview
                    fieldName='witness1prefix'
                    valueName={stepFour.witness1prefix.label}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1firstName'
                    valueName={stepFour.witness1firstName.label}
                    label='First Name/ প্ৰথম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1middleName'
                    valueName={stepFour.witness1middleName}
                    label='Middle Name/ মধ্যনাম'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1lastName'
                    valueName={stepFour.witness1lastName}
                    label='Last Name/ অন্তিম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1gender'
                    valueName={stepFour.witness1gender.label}
                    label='Gender / লিংগ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1phone'
                    valueName={stepFour.witness1phone}
                    label='Mobile Number / দুৰভাষ ( মবাইল ) *'
                    isDisable={true}
                />
            </Grid3>

            <Grid12>
                <p style={{
                    fontWeight: 'bold',
                    marginBottom: -10
                }}>Address</p>
            </Grid12>

            <Grid3>
                <TextInputPreview
                    fieldName='witness1state'
                    valueName={stepFour.witness1state.label}
                    label='State/ৰাজ্য *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1district'
                    valueName={stepFour.witness1district.label}
                    label='District/জিলা*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1villagetowncity'
                    valueName={stepFour.witness1villagetowncity}
                    label='Village/Town/City/গাওঁ/চহৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1policestation'
                    valueName={stepFour.witness1policestation}
                    label='Police Station/থানা *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1postoffice'
                    valueName={stepFour.witness1postoffice}
                    label='Post Office/ডাকঘৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1pincode'
                    valueName={stepFour.witness1pincode}
                    label='Pin Code/পিন *'
                    isDisable={true}
                />
            </Grid3>


            {/* Witness 2 */}
            <Grid12>
                <Box className="form-headings">2. Witness / সাক্ষী Details</Box>
            </Grid12>

            <Grid3>
                <TextInputPreview
                    fieldName='witness2prefix'
                    valueName={stepFour.witness2prefix.label}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2firstName'
                    valueName={stepFour.witness2firstName.label}
                    label='First Name/ প্ৰথম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2middleName'
                    valueName={stepFour.witness2middleName}
                    label='Middle Name/ মধ্যনাম'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2lastName'
                    valueName={stepFour.witness2lastName}
                    label='Last Name/ অন্তিম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2gender'
                    valueName={stepFour.witness2gender.label}
                    label='Gender / লিংগ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2phone'
                    valueName={stepFour.witness2phone}
                    label='Mobile Number / দুৰভাষ ( মবাইল ) *'
                    isDisable={true}
                />
            </Grid3>

            <Grid12>
                <p style={{
                    fontWeight: 'bold',
                    marginBottom: -10
                }}>Address</p>
            </Grid12>

            <Grid3>
                <TextInputPreview
                    fieldName='witness2state'
                    valueName={stepFour.witness2state.label}
                    label='State/ৰাজ্য *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2district'
                    valueName={stepFour.witness2district.label}
                    label='District/জিলা*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2villagetowncity'
                    valueName={stepFour.witness2villagetowncity}
                    label='Village/Town/City/গাওঁ/চহৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2policestation'
                    valueName={stepFour.witness2policestation}
                    label='Police Station/থানা *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2postoffice'
                    valueName={stepFour.witness2postoffice}
                    label='Post Office/ডাকঘৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2pincode'
                    valueName={stepFour.witness2pincode}
                    label='Pin Code/পিন *'
                    isDisable={true}
                />
            </Grid3>

        </Grid>
    )
}

export default PreviewOtherDetails