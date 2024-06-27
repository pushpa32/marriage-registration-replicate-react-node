import React from 'react'
import "./style.css";
import { useControlled, useFormMethods, useFormState } from 'react-cool-form';

export const FieldSelect = ({ as, name, ...restProps }) => {
    const [fieldProps] = useControlled(name, restProps);
    const Component = as;

    return <Component {...fieldProps} />;
};


export const Fields = ({ as, name, onChange, onBlur, ...restProps }) => {
    const value = useFormState(`values.${name}`);
    const { setValue, setTouched } = useFormMethods();
    const Component = as;

    return (
        <Component
            name={name}
            value={value}
            onChange={(e) => {
                setValue(name, e.target.value); // Update the field's value and set it as touched
                if (onChange) onChange(e);
            }}
            onBlur={(e) => {
                setTouched(name); // Set the field as touched for displaying error (if it's not touched)
                if (onBlur) onBlur(e);
            }}
            {...restProps}
        />
    );
};

const Field = ({ label, id, error, ...rest }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} />
            {error && <p>{error}</p>}
        </div>
    )
}

export default Field