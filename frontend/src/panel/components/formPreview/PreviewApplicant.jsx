import React from 'react'
import '../../../Form/Component/style.css';
import { Box, Grid } from '@mui/material';
import { Grid12, Grid3 } from '../../../Form/Component/Form/Grids';
import { TextInputPreview } from '../../../Form/Component/Form/TextInput';

const PreviewApplicantPanel = (props) => {
    return (
        <Grid
            item
            container
            spacing={2}
            rowSpacing={3}
            className='card-box-shadow'
        >

            {/* header */}
            <Grid12>
                <Box className="form-headings">Applicant Details</Box>
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
                    fieldName='gender'
                    valueName={props.data.gender}
                    label='Gender / লিংগ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='phone'
                    valueName={props.data.phone}
                    label='Mobile Number / দুৰভাষ ( মবাইল ) *'
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
                    fieldName='district'
                    valueName={props.data.district_name}
                    label='District / জিলা'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='office'
                    valueName={props.data.office_name}
                    label='office/কাৰ্য্যালয়'
                    isDisable={true}
                />
            </Grid3>
        </Grid>
    )
}

export default PreviewApplicantPanel