import React, { useRef, useState, useEffect } from 'react'
import '../../Component/style.css';
import { Box, Grid } from '@mui/material';
import { Grid12, Grid3, Grid4, Grid6 } from '../../../../Form/Component/Form/Grids';
import { TextInputPreview } from '../../../../Form/Component/Form/TextInput';

const PreviewApplicant = (props) => {
    const [stepOne, setStepOne] = useState(props.data)
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
                    valueName={stepOne.prefix.label}
                    label='Prefix/ উপসৰ্গ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='firstName'
                    valueName={stepOne.firstName}
                    label='First Name/ প্ৰথম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='middleName'
                    valueName={stepOne.middleName}
                    label='Middle Name/ মধ্যনাম'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='lastName'
                    valueName={stepOne.lastName}
                    label='Last Name/ অন্তিম নাম *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='gender'
                    valueName={stepOne.gender.label}
                    label='Gender / লিংগ *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='phone'
                    valueName={stepOne.phone}
                    label='Mobile Number / দুৰভাষ ( মবাইল ) *'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='email'
                    valueName={stepOne.email}
                    label='E-Mail / ই-মেইল'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='district'
                    valueName={stepOne.district.label}
                    label='District / জিলা'
                    isDisable={true}
                />
            </Grid3>
            <Grid3>
                <TextInputPreview
                    fieldName='office'
                    valueName={stepOne.office.label}
                    label='office/কাৰ্য্যালয়'
                    isDisable={true}
                />
            </Grid3>
        </Grid>
    )
}

export default PreviewApplicant