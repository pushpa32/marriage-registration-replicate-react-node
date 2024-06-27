import { Button } from 'react-bootstrap';
import React from 'react'
import '../../../Form/Component/style.css';
import { Box, Dialog, DialogContent, Grid, Modal } from '@mui/material';
import { Grid12 } from '../../../Form/Component/Form/Grids';
import { TextInputPreview } from '../../../Form/Component/Form/TextInput';
import { useState } from 'react';
import { Main_URL } from '../../../utils/api';


const dialogContentStyle = {
    width: '1200px',
    height: '100vh',
};
const PreviewDocumentPanel = (props) => {

    const [open, setOpen] = useState(false);
    const [fileType, setFileType] = useState('');
    const handleOpenModal = (val) => {
        const newVal = Main_URL + val;
        setFileType(newVal)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} maxWidth="md">
                <DialogContent sx={dialogContentStyle}>
                    <iframe src={fileType} title="File Viewer" width="100%" height="500px" />
                </DialogContent>
            </Dialog>

            <Grid
                item
                container
                spacing={2}
                rowSpacing={3}
                className='card-box-shadow mt-3'
            >

                <Grid12>
                    <Box className="form-headings">ATTACH ENCLOSURE(S)</Box>
                </Grid12>

                <table width="100%" className='table table-bordered font-style' style={{
                    margin: 10,
                }}>
                    <tr>
                        <th style={{ width: '2%', fontWeight: 'bold' }}></th>
                        <th style={{ width: '30%' }}>Type of Enclosure</th>
                        <th>Enclosure Document</th>
                        <th style={{ width: '40%' }}>File/Reference</th>
                    </tr>
                    <tr>
                        <td style={{ width: '2%', fontWeight: 'bold' }}>1</td>
                        <td style={{ width: '30%' }}>Identity proof of Bride/Wife *</td>
                        <td>
                            <TextInputPreview
                                fieldName='brideidentity'
                                valueName={props.data.bride_identity_type}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>
                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(props.data.bride_identity_doc)} >
                                view
                            </Button>
                        </td>
                    </tr>

                    <tr>
                        <td style={{ width: '2%', fontWeight: 'bold' }}>2</td>
                        <td style={{ width: '30%' }}>Identity proof of Groom/Husband *</td>
                        <td>
                            <TextInputPreview
                                fieldName='groomidentity'
                                valueName={props.data.groom_identity_type}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(props.data.groom_identity_doc)} >
                                view
                            </Button>
                        </td>

                    </tr>

                    <tr>
                        <td style={{ width: '2%', fontWeight: 'bold' }}>3</td>
                        <td style={{ width: '30%' }}>Age proof of Bride/Wife *</td>
                        <td>
                            <TextInputPreview
                                fieldName='brideageproof'
                                valueName={props.data.bride_age_type}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(props.data.bride_age_doc)} >
                                view
                            </Button>
                        </td>

                    </tr>
                    <tr>
                        <td style={{ width: '2%', fontWeight: 'bold' }}>4</td>
                        <td style={{ width: '30%' }}>Age proof of Groom/Husband *</td>
                        <td>
                            <TextInputPreview
                                fieldName='groomageproof'
                                valueName={props.data.groom_age_type}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(props.data.groom_age_doc)} >
                                view
                            </Button>
                        </td>

                    </tr>

                    <tr>
                        <td style={{ width: '2%', fontWeight: 'bold' }}>5</td>
                        <td style={{ width: '30%' }}>Present Address Proof of Bride/Wife *</td>
                        <td>
                            <TextInputPreview
                                fieldName='bridepresentaddress'
                                valueName={props.data.bride_present_address_type}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(props.data.bride_present_address_doc)} >
                                view
                            </Button>
                        </td>

                    </tr>
                    <tr>
                        <td style={{ width: '2%', fontWeight: 'bold' }}>6</td>
                        <td style={{ width: '30%' }}>Permanent Address Proof of Bride/Wife *</td>
                        <td>
                            <TextInputPreview
                                fieldName='bridepermanentaddress'
                                valueName={props.data.groom_present_address_type}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(props.data.groom_present_address_doc)} >
                                view
                            </Button>
                        </td>

                    </tr>

                    <tr>
                        <td style={{ width: '2%', fontWeight: 'bold' }}>7</td>
                        <td style={{ width: '30%' }}>Present Address Proof of Groom/Husband *</td>
                        <td>
                            <TextInputPreview
                                fieldName='groompresentaddress'
                                valueName={props.data.bride_permanent_address_type}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(props.data.bride_permanent_address_doc)} >
                                view
                            </Button>
                        </td>

                    </tr>
                    <tr>
                        <td style={{ width: '2%', fontWeight: 'bold' }}>8</td>
                        <td style={{ width: '30%' }}>Permanent Address Proof of Groom/Husband *</td>
                        <td>
                            <TextInputPreview
                                fieldName='groompermanentaddress'
                                valueName={props.data.groom_permanent_address_type}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>
                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(props.data.groom_permanent_address_doc)} >
                                view
                            </Button>
                        </td>
                    </tr>
                </table>

            </Grid>
        </div>
    )
}

export default PreviewDocumentPanel