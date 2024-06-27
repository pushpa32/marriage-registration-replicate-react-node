import React from 'react'
import './login.css';
import profile from "../assets/images/a.png";
import { Button, Form } from 'react-bootstrap';
import { loginApiCall } from '../utils/api';
import Swal from 'sweetalert2';

const Login = () => {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { userid, password } = event.target.elements;
        const res = await loginApiCall("user/login", {
            "userid": userid.value,
            "password": password.value
        })

        if (res.error === true) {
            new Swal("Login Failed", res.message);
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'LogIn successfull',
                showConfirmButton: false,
                timer: 1500
            }).then((value) => {
                localStorage.setItem("data", JSON.stringify(res.token));
                window.location.href = "/";
            });
        }
    };

    return (
        <div className="main">
            <div className="sub-main">
                <form onSubmit={handleSubmit} className='form-style'>

                    <div className="imgs">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile" />
                        </div>

                    </div>
                    <h1 className='login-style'>Login</h1>
                    <Form.Control
                        type="text"
                        name='userid'
                        placeholder="User ID"
                        className="font-normal"
                        required={true}
                    />
                    <Form.Control
                        type="password"
                        name='password'
                        placeholder="Password"
                        className="font-normal mt-3"
                        required={true}
                    />
                    <input type='submit' value='Login' className='btn mt-3 custom-btn' />
                </form>

            </div>
        </div>
    );
}

export default Login