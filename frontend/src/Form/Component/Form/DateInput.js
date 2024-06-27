import React from 'react'
import { Form } from 'react-bootstrap';

const DateInput = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <Form.Control
                type="date"
                name={props.fieldName}
                className="font-normal"
                required={props.isRequired}
                value={props.valueName}
                onChange={props.onChange}
                min={props.minDate} // Set the minimum date
                max={props.maxDate} //
            />
        </div >
    )
}

export default DateInput
