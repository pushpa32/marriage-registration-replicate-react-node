import React from 'react'
import { Form } from 'react-bootstrap';

const FileInput = (props) => {
  return (
    <div>
    {/* <label>{props.label}</label> */}
    <Form.Control
        type="file"
        name={props.fieldName}
        // placeholder="Full Name"
        className="font-normal"
        required={props.isRequired}
        onChange={props.onChange}
    // onKeyDown={handleKeyDown}
    />
</div >
  )
}

export default FileInput