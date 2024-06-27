import React from 'react'
import { Form } from 'react-bootstrap';

const TextInput = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <Form.Control
                type="text"
                name={props.fieldName}
                // placeholder="Full Name"
                className="font-normal"
                required={props.isRequired}
                value={props.valueName}
                onChange={props.onChange}
            // onKeyDown={handleKeyDown}
            />
        </div >
    )
}

export default TextInput


export const TextInputDisable = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <Form.Control
                type="text"
                name={props.fieldName}
                // placeholder="Full Name"
                className="font-normal"
                required={props.isRequired}
                value={props.valueName}
                onChange={props.onChange}
                disabled={props.isDisabled}
            />
        </div >
    )
}


export const TextAreaInput = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <Form.Control
                as="textarea"
                name={props.fieldName}
                // placeholder="Full Name"
                className="font-normal"
                required={props.isRequired}
                value={props.valueName}
                onChange={props.onChange}
                style={{
                    fontSize: 14          // Adjust padding as needed
                }}
            />
        </div >
    )
}

export const TextInputPreview = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <Form.Control
                type="text"
                name={props.fieldName}
                className="font-normal"
                value={props.valueName}
                disabled={props.isDisable}
            />
        </div >
    )
}