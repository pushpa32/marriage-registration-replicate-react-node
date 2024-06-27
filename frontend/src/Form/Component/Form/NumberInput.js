import React from 'react'
import { Form } from 'react-bootstrap';

const NumberInput = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <Form.Control
                type="number"
                placeholder="+91"
                name={props.fieldName}
                onChange={props.onChange}
                classNamePrefix="form-control"
                required={props.isRequired}
                onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 10)
                }}
                value={props.valueName}
                inputMode="numeric"
            />
        </div>
    )
}

export default NumberInput