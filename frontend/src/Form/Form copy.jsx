import React from 'react'
import { useForm } from "react-cool-form";
import Field from './Component/Field';
import './Component/style.css';

const FormTest = () => {
    const { form, use } = useForm({
        // (Strongly advise) Provide the default values just like we use React state
        defaultValues: { username: "", email: "", password: "" },
        // The event only triggered when the form is valid
        onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
    });
    // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
    // Which helps the user focus on typing without being annoyed by the error message
    const errors = use("errors", { errorWithTouched: true });

    return (
        <div>

            <form ref={form} noValidate>
                <Field
                    label="Username"
                    id="username"
                    name="username"
                    type="text"
                    required
                    error={errors.username}
                />
                <Field
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    required
                    error={errors.email}
                />
                <Field
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={8}
                    error={errors.password}
                />
                <input type="submit" />
            </form>
        </div>

    );
}

export default FormTest