import React, { useRef } from 'react'
import '../Component/style.css';
import { Box } from '@mui/material';
import PreviewApplicant from './preview/PreviewApplicant';
import PreviewBride from './preview/PreviewBride';
import PreviewGroom from './preview/PreviewGroom';
import PreviewOtherDetails from './preview/PreviewOtherDetails';
import PreviewDocument from './preview/PreviewDocument';

const Preview = (props) => {

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


    return (
        <div className='mt-5'>
            <form id="form-step5" onSubmit={handleFormSubmit} ref={formRef}>

                <Box>
                    <PreviewApplicant data={props.formData.stepOneData} />
                    <PreviewBride data={props.formData.stepTwoData} />
                    <PreviewGroom data={props.formData.stepThreeData} />
                    <PreviewOtherDetails data={props.formData.stepFourData} />
                    <PreviewDocument data={props.formData.stepFiveData} />
                </Box>
            </form>
        </div>
    )
}

export default Preview