import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ApplicantForm from './ApplicantForm';
import BrideForm from './BrideForm';
import GroomForm from './GroomForm';
import OtherDetails from './OtherDetails';
import '../Component/style.css';
import { Button } from 'react-bootstrap';
import DocumentSubmit from './DocumentSubmit';
import Preview from './Preview';
import { postFormApiCall } from '../../utils/api';
import Swal from 'sweetalert2';
import OnSuccess from './OnSuccess';

const steps = ['Applicant Detail', 'Bride Detail', 'Groom Detail', 'Other Details', 'Documents', 'Preview'];
// const stepPages = [ApplicantForm, BrideForm, GroomForm, OtherDetails];

const Form = () => {

    const [formData, setFormData] = useState({
        stepOneData: {
            prefix: '',
            firstName: '',
            middleName: '',
            lastName: '',
            gender: '',
            phone: '',
            email: '',
            district: '',
            office: '',
        },
        stepTwoData: {
            prefix: '',
            firstName: '',
            middleName: '',
            lastName: '',
            fatherprefix: '',
            fatherfirstName: '',
            fathermiddleName: '',
            fatherlastName: '',
            motherprefix: '',
            motherfirstName: '',
            mothermiddleName: '',
            motherlastName: '',
            status: '',
            occupation: '',
            dob: '',
            phone: '',
            email: '',
            isdisability: '',
            disability: '',

            presentcountry: '',
            presentstate: '',
            presentprovince: '',
            presentdistrict: '',
            presentvillagetowncity: '',
            presentpolicestation: '',
            presentpostOffice: '',
            presentaddressline1: '',
            presentaddressline2: '',
            presentpincode: '',
            presentlac: '',
            presentresidencyperiodmonth: '',
            presentresidencyperiodyear: '',

            ispermanentsameaspresent: '',

            permanentcountry: '',
            permanentstate: '',
            permanentprovince: '',
            permanentdistrict: '',
            permanentvillagetowncity: '',
            permanentpolicestation: '',
            permanentpostOffice: '',
            permanentaddressline1: '',
            permanentaddressline2: '',
            permanentpincode: '',
            permanentlac: '',
            permanentresidencyperiodmonth: '',
            permanentresidencyperiodyear: '',
        },
        stepThreeData: {
            prefix: '',
            firstName: '',
            middleName: '',
            lastName: '',
            fatherprefix: '',
            fatherfirstName: '',
            fathermiddleName: '',
            fatherlastName: '',
            motherprefix: '',
            motherfirstName: '',
            mothermiddleName: '',
            motherlastName: '',
            status: '',
            occupation: '',
            dob: '',
            phone: '',
            email: '',
            isdisability: '',
            disability: '',

            presentcountry: '',
            presentstate: '',
            presentprovince: '',
            presentdistrict: '',
            presentvillagetowncity: '',
            presentpolicestation: '',
            presentpostOffice: '',
            presentaddressline1: '',
            presentaddressline2: '',
            presentpincode: '',
            presentlac: '',
            presentresidencyperiodmonth: '',
            presentresidencyperiodyear: '',

            ispermanentsameaspresent: '',

            permanentcountry: '',
            permanentstate: '',
            permanentprovince: '',
            permanentdistrict: '',
            permanentvillagetowncity: '',
            permanentpolicestation: '',
            permanentpostOffice: '',
            permanentaddressline1: '',
            permanentaddressline2: '',
            permanentpincode: '',
            permanentlac: '',
            permanentresidencyperiodmonth: '',
            permanentresidencyperiodyear: '',
        },
        stepFourData: {
            lawyerprefix: '',
            lawyerfirstName: '',
            lawyermiddleName: '',
            lawyerlastName: '',
            lawyergender: '',
            lawyerphone: '',
            lawyerstate: '',
            lawyerdistrict: '',
            lawyervillagetowncity: '',
            lawyerpolicestation: '',
            lawyerpostoffice: '',
            lawyerpincode: '',

            witness1prefix: '',
            witness1firstName: '',
            witness1middleName: '',
            witness1lastName: '',
            witness1gender: '',
            witness1phone: '',
            witness1state: '',
            witness1district: '',
            witness1villagetowncity: '',
            witness1policestation: '',
            witness1postoffice: '',
            witness1pincode: '',

            witness2prefix: '',
            witness2firstName: '',
            witness2middleName: '',
            witness2lastName: '',
            witness2gender: '',
            witness2phone: '',
            witness2state: '',
            witness2district: '',
            witness2villagetowncity: '',
            witness2policestation: '',
            witness2postoffice: '',
            witness2pincode: '',
        },
        stepFiveData: {
            brideidentity: '',
            brideidentitydoc: null,
            groomidentity: '',
            groomidentitydoc: null,

            brideageproof: '',
            brideageproofdoc: null,
            groomageproof: '',
            groomageproofdoc: null,

            bridepresentaddress: '',
            bridepresentaddressdoc: null,
            bridepermanentaddress: '',
            bridepermanentaddressdoc: null,

            groompresentaddress: '',
            groompresentaddressdoc: null,
            groompermanentaddress: '',
            groompermanentaddressdoc: null,
        },
    });

    const [applicantNo, setApplicantNo] = useState("")

    const handleStepOneChange = (e, selectedOption) => {
        if (selectedOption) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                stepOneData: {
                    ...prevFormData.stepOneData,
                    [e]: selectedOption,
                },
            }));
        } else {
            const { name, value } = e.target;
            setFormData((prevFormData) => ({
                ...prevFormData,
                stepOneData: {
                    ...prevFormData.stepOneData,
                    [name]: value,
                },
            }));
        }
    };

    const handleStepTwoChange = (e, selectedOption) => {
        if (selectedOption) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                stepTwoData: {
                    ...prevFormData.stepTwoData,
                    [e]: selectedOption,
                },
            }));
        } else {
            const { name, value } = e.target;
            setFormData((prevFormData) => ({
                ...prevFormData,
                stepTwoData: {
                    ...prevFormData.stepTwoData,
                    [name]: value,
                },
            }));
        }
    };

    const handleStepThreeChange = (e, selectedOption) => {
        if (selectedOption) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                stepThreeData: {
                    ...prevFormData.stepThreeData,
                    [e]: selectedOption,
                },
            }));
        } else {
            const { name, value } = e.target;
            setFormData((prevFormData) => ({
                ...prevFormData,
                stepThreeData: {
                    ...prevFormData.stepThreeData,
                    [name]: value,
                },
            }));
        }
    };

    const handleStepFourChange = (e, selectedOption) => {
        if (selectedOption) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                stepFourData: {
                    ...prevFormData.stepFourData,
                    [e]: selectedOption,
                },
            }));
        } else {
            const { name, value } = e.target;
            setFormData((prevFormData) => ({
                ...prevFormData,
                stepFourData: {
                    ...prevFormData.stepFourData,
                    [name]: value,
                },
            }));
        }
    };

    const handleStepFiveChange = (file, inputName) => {
        if (typeof (file) === 'string') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                stepFiveData: {
                    ...prevFormData.stepFiveData,
                    [file]: inputName,
                },
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                stepFiveData: {
                    ...prevFormData.stepFiveData,
                    [inputName]: file, 
                },
            }));
        }

    };

    // const handleStepFiveChange = (file, inputName) => {

    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         // Get the data URL representing the file
    //         const fileDataUrl = reader.result;

    //         setFormData((prevFormData) => ({
    //             ...prevFormData,
    //             stepFiveData: {
    //                 ...prevFormData.stepFiveData,
    //                 [inputName]: fileDataUrl, // Save the data URL to the corresponding input name (e.g., "document1")
    //             },
    //         }));
    //     };
    //     console.log(formData.stepFiveData.document1);


    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // };

    function getStepContent(step, props) {
        switch (step) {
            case 0:
                return <ApplicantForm {...props} setFormData={setFormData} formData={formData.stepOneData} onChange={handleStepOneChange} />;
            case 1:
                return <BrideForm {...props} setFormData={setFormData} formData={formData.stepTwoData} onChange={handleStepTwoChange} />;
            case 2:
                return <GroomForm {...props} setFormData={setFormData} formData={formData.stepThreeData} onChange={handleStepThreeChange} />;
            case 3:
                return <OtherDetails {...props} setFormData={setFormData} formData={formData.stepFourData} onChange={handleStepFourChange} />;
            case 4:
                return <DocumentSubmit {...props} setFormData={setFormData} formData={formData.stepFiveData} onChange={handleStepFiveChange} />;
            case 5:
                return <Preview {...props} formData={formData} />;
            default:
                return "Unknown step";
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    // const isStepOptional = (step) => {
    //     return step === 1;
    // };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = async (datas) => {

        let newSkipped = skipped;

        if (activeStep === 5) {
            new Swal({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then(async (result) => {
                if (result.isConfirmed) {

                    const formDatas = new FormData();
                    formDatas.append('stepOneData', JSON.stringify(formData.stepOneData));
                    formDatas.append('stepTwoData', JSON.stringify(formData.stepTwoData));
                    formDatas.append('stepThreeData', JSON.stringify(formData.stepThreeData));
                    formDatas.append('stepFourData', JSON.stringify(formData.stepFourData));
                    formDatas.append('stepFiveData', JSON.stringify(formData.stepFiveData))

                    formDatas.append('brideidentitydoc', formData.stepFiveData.brideidentitydoc)
                    formDatas.append('groomidentitydoc', formData.stepFiveData.groomidentitydoc)
                    formDatas.append('brideageproofdoc', formData.stepFiveData.brideageproofdoc)
                    formDatas.append('groomageproofdoc', formData.stepFiveData.groomageproofdoc)
                    formDatas.append('bridepresentaddressdoc', formData.stepFiveData.bridepresentaddressdoc)
                    formDatas.append('bridepermanentaddressdoc', formData.stepFiveData.bridepermanentaddressdoc)
                    formDatas.append('groompresentaddressdoc', formData.stepFiveData.groompresentaddressdoc)
                    formDatas.append('groompermanentaddressdoc', formData.stepFiveData.groompermanentaddressdoc)

                    const res = await postFormApiCall("form/save", formDatas);
                    if (res.error === true) {
                        return Swal.fire({
                            title: 'Error',
                            text: res.message,
                            icon: 'error'
                        });
                    }
                    setApplicantNo(res.data)
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                }
            })
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }

        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleSkip = () => {
    //     if (!isStepOptional(activeStep)) {
    //         // You probably want to guard against something like this,
    //         // it should never occur unless someone's actively trying to break something.
    //         throw new Error("You can't skip a step that isn't optional.");
    //     }

    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped((prevSkipped) => {
    //         const newSkipped = new Set(prevSkipped.values());
    //         newSkipped.add(activeStep);
    //         return newSkipped;
    //     });
    // };


    const handleReset = () => {
        window.location.reload();
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    // if (isStepOptional(index)) {
                    //     labelProps.optional = (
                    //         <Typography variant="caption">Optional</Typography>
                    //     );
                    // }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: "50vh"
                    }}>
                        <OnSuccess appNo={applicantNo} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {/* Content */}
                    {/* <ApplicantForm /> */}
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}

                    {getStepContent(activeStep, { handleNext })}
                    {/* {React.createElement(stepPages[activeStep], { handleNext })} */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        {/* <Box sx={{ flex: '1 1 auto' }} /> */}
                        {/* {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )} */}

                        {/* <button type="submit" form={`form-step${activeStep}`} value="Submit">Submit</button> */}
                        <Button className='btn btn-success step-btn-next' type="submit" form={`form-step${activeStep}`}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Save & Proceed'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default Form