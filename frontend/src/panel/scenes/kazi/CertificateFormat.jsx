import { Box } from '@mui/material'
import React from 'react'
import logo from '../../../assets/images/logo.png'
import './certificate.css'
import { Main_URL } from '../../../utils/api'

const CertificateFormat = (props) => {

    function calculateAge(dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const currentDate = new Date();

        const yearsDiff = currentDate.getFullYear() - dob.getFullYear();
        const currentMonth = currentDate.getMonth();
        const dobMonth = dob.getMonth();

        if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDate.getDate() < dob.getDate())) {
            return yearsDiff - 1;
        }

        return yearsDiff;
    }


    const getCurrentDateFormatted = () => {
        const currentDate = new Date();

        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const groomDetails = () => {

        return props.data ?
            `Bridegroom ${props.data.gprefix} ${props.data.gfirstname} ${props.data.gmiddlename} ${props.data.glastname} S/O ${props.data.gfatherprefix} ${props.data.gfatherfirstname} ${props.data.gfathermiddlename} ${props.data.gfatherlastname} Village kamrup P.O. kamrup P.S. Kamrup Dist. Kamrup Metro (Assam), age ${props.data && calculateAge(props.data.gdob)} Years.`
            : `NULL`;
    };

    const brideDetails = () => {

        return props.data ?
            `Bride ${props.data.prefix} ${props.data.first_name} ${props.data.middle_name} ${props.data.last_name} D/O ${props.data.father_prefix} ${props.data.father_first_name} ${props.data.father_middle_name} ${props.data.father_last_name} Village kamrup P.O. kamrup P.S. Kamrup Dist. Kamrup Metro (Assam), age ${props.data && calculateAge(props.data.dob)}`
            : `NULL`;
    };

    return (
        <Box sx={{
            padding: '10px',
        }}>
            <Box sx={{
            border: '6px dotted black',
            height: '290mm', // A4 height in mm
          boxSizing: 'border-box'
        }}>
            <Box sx={{
                margin: "22px 25px",
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: '10px'
                }}>
                    <Box>
                        <Box className=''>Certificate No.: {props.certificateNo}</Box>
                        <Box className=''>Date.: {getCurrentDateFormatted()}</Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        fontSize: 14
                    }}>
                        <div><img src={logo} height="90px" /></div>
                        <div>Govt of Assam</div>
                        <div>Office of the Marriage</div>
                    </Box>
                    <Box>
                        <div>
                            <img src={props.image && props.image} height="100px" />
                        </div>
                    </Box>
                </Box>

                <Box className='first-head'>MARRIAGE & DIVORCE REGISTRAR</Box>
                <Box className='regn-style'>Regn. No. : 2023/20/-A</Box>
                <Box className='regn-address-style'>P.O Balabari, P.S. Dhula, Dist. Darrang (Assam)</Box>

                {/* <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <Box className=''>Certificate No.: 1001</Box>
                <Box className=''>Date.: 12/05/1996</Box>
            </Box> */}

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '20px 0px'
                }}>
                    <Box className='second-head'>MARRAIGE CERTIFICATE</Box>
                </Box>

                <Box sx={{
                    fontStyle: 'italic',
                    fontSize: 15,
                    marginBottom: 2
                }}>Certified that the marriage between:</Box>

                <Box sx={{
                    fontStyle: 'italic',
                    fontSize: 15,
                    textAlign: 'justify'
                }}>
                    <p>{groomDetails()}</p>
                    <p> {brideDetails()} Years has been solemnized and duly registered in the Demo Marriage & Divorce Registrar, Dhula, Dist. Darrang (Assamm, U/S 3 of Assam Demo Marriage & Divorce Registration Act. 1935 when both the parties approved before me and in the presence of three witness below and signed making declaration required for the purpose) </p>
                </Box>

                <Box sx={{
                    fontSize: 15,
                    fontWeight: 'bold'
                }}>Witness</Box>
                <Box sx={{
                    position: 'relative',
                    height: "220px",
                    fontSize: 14
                }}>
                    <ol>
                        <li style={{
                            marginBottom: 70
                        }}>
                            <Box>
                                <div>Name: Marshall Mathers</div>
                                <div>Signature: </div>
                            </Box>
                        </li>
                        <li>
                            <Box>
                                <div>Name: Marshall Mathers</div>
                                <div>Signature: </div>
                            </Box>
                        </li>
                    </ol>

                    <div className='positioned'>
                        <div>Marriage Demo</div>
                        <div>Divorce Registrar</div>
                        <div>Dhula, Darrang, Assam</div>
                    </div>
                </Box>

            </Box>
        </Box>
        </Box>
    )
}

export default CertificateFormat