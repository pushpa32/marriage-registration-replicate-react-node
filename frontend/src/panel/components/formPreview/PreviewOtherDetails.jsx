import React from 'react'
import '../../../Form/Component/style.css';
import { Box, Grid } from '@mui/material';
import { Grid12, Grid3, Grid4, Grid6 } from '../../../Form/Component/Form/Grids';
import { TextInputPreview } from '../../../Form/Component/Form/TextInput';

const PreviewOtherDetailsPanel = (props) => {
   
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
                    valueName={props.data.lawyer_prefix}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerfirstName'
                    valueName={props.data.lawyer_first_name}
                    label='First Name/ প্ৰথম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyermiddleName'
                    valueName={props.data.lawyer_middle_name}
                    label='Middle Name/ মধ্যনাম'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerlastName'
                    valueName={props.data.lawyer_last_name}
                    label='Last Name/ অন্তিম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyergender'
                    valueName={props.data.lawyer_gender}
                    label='Gender / লিংগ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerphone'
                    valueName={props.data.lawyer_phone}
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
                    valueName={props.data.lawyer_state_name}
                    label='State/ৰাজ্য *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerdistrict'
                    valueName={props.data.lawyer_district_name}
                    label='District/জিলা*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyervillagetowncity'
                    valueName={props.data.lawyer_villagetowncity}
                    label='Village/Town/City/গাওঁ/চহৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerpolicestation'
                    valueName={props.data.lawyer_policestation}
                    label='Police Station/থানা *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerpostoffice'
                    valueName={props.data.lawyer_postoffice}
                    label='Post Office/ডাকঘৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lawyerpincode'
                    valueName={props.data.lawyer_pincode}
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
                    valueName={props.data.witness1_prefix}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1firstName'
                    valueName={props.data.witness1_first_name}
                    label='First Name/ প্ৰথম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1middleName'
                    valueName={props.data.witness1_middle_name}
                    label='Middle Name/ মধ্যনাম'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1lastName'
                    valueName={props.data.witness1_last_name}
                    label='Last Name/ অন্তিম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1gender'
                    valueName={props.data.witness1_gender}
                    label='Gender / লিংগ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1phone'
                    valueName={props.data.witness1_phone}
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
                    valueName={props.data.witness1_state_name}
                    label='State/ৰাজ্য *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1district'
                    valueName={props.data.witness1_district_name}
                    label='District/জিলা*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1villagetowncity'
                    valueName={props.data.witness1_villagetowncity}
                    label='Village/Town/City/গাওঁ/চহৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1policestation'
                    valueName={props.data.witness1_policestation}
                    label='Police Station/থানা *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1postoffice'
                    valueName={props.data.witness1_postoffice}
                    label='Post Office/ডাকঘৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness1pincode'
                    valueName={props.data.witness1_pincode}
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
                    valueName={props.data.witness2_prefix}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2firstName'
                    valueName={props.data.witness2_first_name}
                    label='First Name/ প্ৰথম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2middleName'
                    valueName={props.data.witness2_middle_name}
                    label='Middle Name/ মধ্যনাম'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2lastName'
                    valueName={props.data.witness2_last_name}
                    label='Last Name/ অন্তিম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2gender'
                    valueName={props.data.witness2_gender}
                    label='Gender / লিংগ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2phone'
                    valueName={props.data.witness2_phone}
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
                    valueName={props.data.witness2_state_name}
                    label='State/ৰাজ্য *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2district'
                    valueName={props.data.witness2_district_name}
                    label='District/জিলা*'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2villagetowncity'
                    valueName={props.data.witness2_villagetowncity}
                    label='Village/Town/City/গাওঁ/চহৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2policestation'
                    valueName={props.data.witness2_policestation}
                    label='Police Station/থানা *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2postoffice'
                    valueName={props.data.witness2_postoffice}
                    label='Post Office/ডাকঘৰ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='witness2pincode'
                    valueName={props.data.witness2_pincode}
                    label='Pin Code/পিন *'
                    isDisable={true}
                />
            </Grid3>

        </Grid>
    )
}

export default PreviewOtherDetailsPanel