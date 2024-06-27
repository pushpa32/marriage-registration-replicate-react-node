import React from 'react'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className='style-header'>
            <div className='container style-headers-div'>
                <img src={logo} alt="Logo" width={80} height={80} style={{
                        filter: 'invert(100%)', marginRight: 10
                }} />
                <div className="style-headers">
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>Marriage Form</h1>
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0' }}>Marriage fill up Demonstartion</h1>
                </div>
            </div>
        </header>
    )
}

export default Header