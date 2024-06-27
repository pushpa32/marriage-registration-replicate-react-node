import React from 'react'
import { Form } from 'react-bootstrap';
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { getApiCall, postApiCall } from '../../../utils/api';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        backgroundColor: 'grey',
        color: 'white',
    }),
    menu: (provided) => ({ ...provided, zIndex: 9999 })
}
const customStyles1 = {
    option: (provided, state) => ({
        ...provided,
        background: 'white',
        color: 'black',
        fontSize: 14
    }),
    // menu: (provided) => ({ ...provided, zIndex: 9999 })
}

export const SelectInputMMRForm = (props) => {
    return (
        <div>
            <Form.Group>
                <label>{props.label}</label>
                <Select
                    styles={customStyles1}
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    onChange={props.onChange}
                    options={props.options.map((item, index) => ({
                        label: item.name,
                        value: item.id,
                        // key: index,
                    }))}
                    required={props.isRequired}
                />
            </Form.Group>
        </div>
    )
}

const SelectInput = (props) => {
    return (
        <div>
            <Form.Group>
                <label>{props.label}</label>
                <Select
                    styles={customStyles}
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    onChange={props.onChange}
                    options={props.options.map((item, index) => ({
                        label: item.name,
                        value: item.id,
                        // key: index,
                    }))}
                    required={props.isRequired}
                />
            </Form.Group>
        </div>
    )
}

export default SelectInput


export const SelectInputDisable = (props) => {
    return (
        <div>
            <Form.Group>
                <label>{props.label}</label>
                <Select
                    styles={customStyles1}
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    // onChange={props.onChange}
                    onChange={(selectedOption) => {
                        const isDisabled = selectedOption.label === "Yes" ? true : false;
                        props.setIsDisability(isDisabled);
                        props.onChange(selectedOption)
                    }}
                    options={props.options.map((item) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    required={props.isRequired}
                />
            </Form.Group>
        </div>
    )
}

export const SelectInputDisabled = (props) => {
    return (
        <div>
            <Form.Group>
                <label>{props.label}</label>
                <Select
                    styles={customStyles1}
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    onChange={props.onChange}
                    options={props.options.map((item) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    required={props.isRequired}
                />
            </Form.Group>
        </div>
    )
}

export const SelectInputCountryCall = (props) => {
    return (
        <div>
            <Form.Group>
                <label>{props.label}</label>
                <Select
                    styles={customStyles1}
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    onChange={async (selectedOption) => {
                        const isDisabled = selectedOption.label === "India" ? true : false;
                        props.setDistList([])
                        if (selectedOption.label === "India") {
                            const distList = await getApiCall("state/get/all")
                            props.setStateList(distList.data)
                        } else {
                            props.setStateList([])
                            props.stateData.setFormData((prevFormData) => ({
                                ...prevFormData,
                                [props.isBrideForm ? 'stepTwoData' : 'stepThreeData']: {
                                    ...prevFormData[props.isBrideForm ? 'stepTwoData' : 'stepThreeData'],
                                    ['presentdistrict']: '',
                                },
                            }));
                        }

                        if (props.isPresent === true) {
                            props.stateData.setFormData((prevFormData) => ({
                                ...prevFormData,
                                [props.isBrideForm ? 'stepTwoData' : 'stepThreeData']: {
                                    ...prevFormData[props.isBrideForm ? 'stepTwoData' : 'stepThreeData'],
                                    ['presentstate']: '',
                                    ['presentdistrict']: '',
                                    ['presentprovince']: '',
                                    ['presentvillagetowncity']: '',
                                    ['presentpincode']: '',
                                    ['presentpolicestation']: '',
                                    ['presentpostOffice']: '',
                                    ['presentaddressline1']: '',
                                    ['presentaddressline2']: '',
                                },
                            }));
                            props.setIsIndiaPresent(isDisabled);
                        } else {
                            props.stateData.setFormData((prevFormData) => ({
                                ...prevFormData,
                                [props.isBrideForm ? 'stepTwoData' : 'stepThreeData']: {
                                    ...prevFormData[props.isBrideForm ? 'stepTwoData' : 'stepThreeData'],
                                    ['permanentstate']: '',
                                    ['permanentdistrict']: '',
                                    ['permanentprovince']: '',
                                    ['permanentvillagetowncity']: '',
                                    ['permanentpincode']: '',
                                    ['permanentpolicestation']: '',
                                    ['permanentpostOffice']: '',
                                    ['permanentaddressline1']: '',
                                    ['permanentaddressline2']: '',
                                },
                            }));
                            props.setIsIndiaPresent(isDisabled);
                        }

                        props.onChange(selectedOption)
                    }}
                    options={props.options.map((item) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    required={props.isRequired}
                />
            </Form.Group>
        </div>
    )
}

export const SelectInputStateCall = (props) => {
    return (
        <div>
            <Form.Group>
                <label>{props.label}</label>
                <Select
                    styles={customStyles1}
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    onChange={async (selectedOption) => {
                        const distList = await postApiCall("district/get/by/state", { "state_id": selectedOption.value })
                        props.setDistList(distList.data)

                        if (props.isPresent === true) {
                            props.stateData.setFormData((prevFormData) => ({
                                ...prevFormData,
                                [props.isBrideForm ? 'stepTwoData' : 'stepThreeData']: {
                                    ...prevFormData[props.isBrideForm ? 'stepTwoData' : 'stepThreeData'],
                                    ['presentdistrict']: '',
                                },
                            }));
                        } else {
                            props.stateData.setFormData((prevFormData) => ({
                                ...prevFormData,
                                [props.isBrideForm ? 'stepTwoData' : 'stepThreeData']: {
                                    ...prevFormData[props.isBrideForm ? 'stepTwoData' : 'stepThreeData'],
                                    ['permanentdistrict']: '',
                                },
                            }));
                        }

                        props.onChange(selectedOption)
                    }}
                    options={props.options.map((item) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    required={props.isRequired}
                    isDisabled={props.disableBool}
                />
            </Form.Group>
        </div>
    )
}


export const SelectInputApiCall = (props) => {
    return (
        <div>
            <Form.Group>
                <label>{props.label}</label>
                <Select
                    styles={customStyles1}
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    onChange={props.onChange}
                    options={props.options.map((item) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    required={props.isRequired}
                    isDisabled={props.disableBool}
                />
            </Form.Group>
        </div>
    )
}

export const DocumentSelect = (props) => {
    return (
        <div>
            <Form.Group>
                <Select
                    styles={customStyles1}
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    onChange={props.onChange}
                    options={props.options.map((item) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    required={props.isRequired}
                />
            </Form.Group>
        </div>
    )
}

// multi
export const MultiSelectInput = (props) => {
    const animatedComponents = makeAnimated();
    return (
        <div>
            <Form.Group>
                <label>{props.label}</label>
                <Select
                    styles={customStyles}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    onChange={props.onChange}
                    options={props.options.map((item, index) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    required={props.isRequired}
                />
            </Form.Group>
        </div>
    )
}

export const SelectInputOnApiCall = (props) => {
    return (
        <div>
            <Form.Group>
                <label>{props.label}</label>
                <Select
                    styles={customStyles1}
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    onChange={async (selectedOption) => {
                        props.onChange(selectedOption)
                        const officeList = await postApiCall(props.apiEndPoints, { "dist_id": selectedOption.value })
                        props.setData(officeList.data)
                        props.emptyOnChange.setFormData((prevFormData) => ({
                            ...prevFormData,
                            stepOneData: {
                                ...prevFormData.stepOneData,
                                ['office']: '',
                            },
                        }));
                    }}
                    options={props.options.map((item) => ({
                        label: "Office of the District Registrar(DISTRICT - " + item.name + ")",
                        value: item.id,
                    }))}
                    required={props.isRequired}
                />
            </Form.Group>
        </div>
    )
}

// other details
export const SelectStateOtherDetails = (props) => {
    return (
        <div>
            <Form.Group>
                <label>{props.label}</label>
                <Select
                    styles={customStyles1}
                    value={props.valueName}
                    placeholder={props.placeholder}
                    name={props.fieldName}
                    onChange={async (selectedOption) => {
                        const distList = await postApiCall("district/get/by/state", { "state_id": selectedOption.value })
                        props.setDistList(distList.data)

                        props.stateData.setFormData((prevFormData) => {
                            const stepFourData = {
                                ...prevFormData.stepFourData,
                            };

                            if (props.type === 'lawyer') {
                                stepFourData['lawyerdistrict'] = '';
                                stepFourData['lawyervillagetowncity'] = '';
                                stepFourData['lawyerpolicestation'] = '';
                                stepFourData['lawyerpostoffice'] = '';
                                stepFourData['lawyerpincode'] = '';
                            } else if (props.type === 'witness1') {
                                stepFourData['witness1district'] = '';
                                stepFourData['witness1villagetowncity'] = '';
                                stepFourData['witness1policestation'] = '';
                                stepFourData['witness1postoffice'] = '';
                                stepFourData['witness1pincode'] = '';
                            } else {
                                stepFourData['witness2district'] = '';
                                stepFourData['witness2villagetowncity'] = '';
                                stepFourData['witness2policestation'] = '';
                                stepFourData['witness2postoffice'] = '';
                                stepFourData['witness2pincode'] = '';
                            }

                            return {
                                ...prevFormData,
                                stepFourData: stepFourData,
                            };
                        });

                        props.onChange(selectedOption)
                    }}
                    options={props.options.map((item) => ({
                        label: item.name,
                        value: item.id,
                    }))}
                    required={props.isRequired}
                    isDisabled={props.disableBool}
                />
            </Form.Group>
        </div>
    )
}

