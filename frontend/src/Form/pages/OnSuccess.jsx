import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const OnSuccess = ({ appNo }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h2>Successfull</h2>
            <p>Your Application has been successfully submitted.</p>
            <p>Your Application Id is: <b>{appNo}</b>, keep it for future reference.</p>

        </div>
    )
}

export default OnSuccess