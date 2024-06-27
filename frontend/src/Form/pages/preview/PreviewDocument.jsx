import React, { useEffect, useRef, useState } from 'react'
import '../../Component/style.css';
import { Box, Dialog, DialogContent, Grid, Modal } from '@mui/material';
import { Grid12, Grid3, Grid4 } from '../../Component/Form/Grids';
import { Button } from 'react-bootstrap';
import { dialogContentStyle } from '../DocumentSubmit';
import { TextInputPreview } from '../../Component/Form/TextInput';

const PreviewDocument = (props) => {
    const [stepFive, setStepFive] = useState(props.data)

    const [open, setOpen] = useState(false);
    const [fileType, setFileType] = useState('');
    const [fileData, setFileData] = useState('');
    const handleOpenModal = (val) => {
        // Check if groomageproofdoc is a valid file
        if (val instanceof Blob) {
            setFileData(val)
            setFileType(val.type); // Set the fileType based on the File object's type
            setOpen(true);
        } else {
            console.log('Invalid File Format:', val);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} maxWidth="md">
                <DialogContent sx={dialogContentStyle}>
                    {fileType.startsWith('image') ? ( // Check if the fileType is an image
                        <img
                            src={URL.createObjectURL(fileData)}
                            alt="File Preview"
                            style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', margin: 'auto' }}
                        />
                    ) : fileType === 'application/pdf' ? ( // Check if the fileType is a PDF
                        <iframe
                            title="File Preview"
                            src={URL.createObjectURL(fileData)}
                            style={{ width: '100vw', height: '100vh' }}
                        />
                    ) : (
                        <div>Invalid File Format</div>
                    )}
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
                                valueName={stepFive.brideidentity.label}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>
                        <td style={{ width: '40%' }}>

                            <Button className='btn-view' onClick={() => handleOpenModal(stepFive.brideidentitydoc)} >
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
                                valueName={stepFive.groomidentity.label}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(stepFive.groomidentitydoc)} >
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
                                valueName={stepFive.brideageproof.label}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(stepFive.brideageproofdoc)} >
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
                                valueName={stepFive.groomageproof.label}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(stepFive.groomageproofdoc)} >
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
                                valueName={stepFive.bridepresentaddress.label}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(stepFive.bridepresentaddressdoc)} >
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
                                valueName={stepFive.bridepermanentaddress.label}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(stepFive.bridepermanentaddressdoc)} >
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
                                valueName={stepFive.groompresentaddress.label}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>

                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(stepFive.groompresentaddressdoc)} >
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
                                valueName={stepFive.groompermanentaddress.label}
                                label='Doc Type'
                                isDisable={true}
                            />
                        </td>
                        <td style={{ width: '40%' }}>
                            <Button className='btn-view' onClick={() => handleOpenModal(stepFive.groompermanentaddressdoc)} >
                                view
                            </Button>
                        </td>
                    </tr>
                </table>

            </Grid>
        </div>
    )
}

export default PreviewDocument