import React from 'react'
import { Form } from 'react-bootstrap';

const EmailInput = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <Form.Control
                type="email"
                name={props.fieldName}
                className="font-normal"
                required={props.isRequired}
                value={props.valueName}
                onChange={props.onChange}
            />
        </div >
    )
}

export default EmailInput