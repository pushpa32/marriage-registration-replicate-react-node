import React, { useEffect, useRef, useState } from 'react'
import '../Component/style.css';
import { Box, Dialog, DialogContent, Grid } from '@mui/material';
import { Grid12 } from '../Component/Form/Grids';
import FileInput from '../Component/Form/FileInput';
import { Button } from 'react-bootstrap';
import { DocumentSelect } from '../Component/Form/SelectInput';
import { ageProofList, identityProofList, permanentAddressProofList, presentAddressProofList } from '../Component/constant';

export const dialogContentStyle = {
    width: '100%',
    height: '100vh',
};

const DocumentSubmit = (props) => {
    const formRef = useRef();
    useEffect(() => {
    }, [])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("ASdasd");

        const formData = new FormData(formRef.current);
        const entries = Array.from(formData.entries());
        const formValues = entries.reduce(
            (prev, [name, value]) => ({
                ...prev,
                [name]: value,
            }),
            {}
        );
        props.handleNext(formValues);
    };

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
        <div className='mt-5'>
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

            <form id="form-step4" onSubmit={handleFormSubmit} ref={formRef}>
                <Box>
                    <Grid
                        item
                        container
                        spacing={2}
                        rowSpacing={3}
                        sx={{
                            // display: 'flex',
                            // justifyContent: 'center',
                            // alignItems: 'center'
                        }}
                        className='card-box-shadow'
                    >

                        {/* header */}
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
                                    <DocumentSelect
                                        valueName={props.formData.brideidentity}
                                        placeholder='Select Type'
                                        fieldName='brideidentity'
                                        onChange={(selectedOption) => props.onChange('brideidentity', selectedOption)}
                                        options={identityProofList}
                                        isRequired={true}
                                    />
                                </td>

                                <td style={{ width: '40%' }}>
                                    <FileInput
                                        fieldName='brideidentitydoc'
                                        valueName={props.formData.brideidentitydoc}
                                        onChange={(e) => props.onChange(e.target.files[0], "brideidentitydoc")}
                                        isRequired={props.formData.brideidentitydoc !== null ? false : true}
                                        label='Document 1'
                                    />
                                    {props.formData.brideidentitydoc !== null &&
                                        <Button className='btn-view' onClick={() => handleOpenModal(props.formData.brideidentitydoc)} >
                                            view
                                        </Button>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '2%', fontWeight: 'bold' }}>2</td>
                                <td style={{ width: '30%' }}>Identity proof of Groom/Husband *</td>
                                <td>
                                    <DocumentSelect
                                        valueName={props.formData.groomidentity}
                                        placeholder='Select Type'
                                        fieldName='groomidentity'
                                        onChange={(selectedOption) => props.onChange('groomidentity', selectedOption)}
                                        options={identityProofList}
                                        isRequired={true}
                                    />
                                </td>

                                <td style={{ width: '40%' }}>
                                    <FileInput
                                        fieldName='groomidentitydoc'
                                        valueName={props.formData.groomidentitydoc}
                                        onChange={(e) => props.onChange(e.target.files[0], "groomidentitydoc")}
                                        isRequired={props.formData.groomidentitydoc !== null ? false : true}
                                        label='Document 1'
                                    />
                                    {props.formData.groomidentitydoc !== null &&
                                        <Button className='btn-view' onClick={() => handleOpenModal(props.formData.groomidentitydoc)} >
                                            view
                                        </Button>
                                    }
                                </td>

                            </tr>
                            {/* age */}
                            <tr>
                                <td style={{ width: '2%', fontWeight: 'bold' }}>3</td>
                                <td style={{ width: '30%' }}>Age proof of Bride/Wife *</td>
                                <td>
                                    <DocumentSelect
                                        valueName={props.formData.brideageproof}
                                        placeholder='Select Type'
                                        fieldName='brideageproof'
                                        onChange={(selectedOption) => props.onChange('brideageproof', selectedOption)}
                                        options={ageProofList}
                                        isRequired={true}
                                    />
                                </td>

                                <td style={{ width: '40%' }}>
                                    <FileInput
                                        fieldName='brideageproofdoc'
                                        valueName={props.formData.brideageproofdoc}
                                        onChange={(e) => props.onChange(e.target.files[0], "brideageproofdoc")}
                                        isRequired={props.formData.brideageproofdoc !== null ? false : true}
                                        label='Document 1'
                                    />
                                    {props.formData.brideageproofdoc !== null &&
                                        <Button className='btn-view' onClick={() => handleOpenModal(props.formData.brideageproofdoc)} >
                                            view
                                        </Button>
                                    }
                                </td>

                            </tr>
                            <tr>
                                <td style={{ width: '2%', fontWeight: 'bold' }}>4</td>
                                <td style={{ width: '30%' }}>Age proof of Groom/Husband *</td>
                                <td>
                                    <DocumentSelect
                                        valueName={props.formData.groomageproof}
                                        placeholder='Select Type'
                                        fieldName='groomageproof'
                                        onChange={(selectedOption) => props.onChange('groomageproof', selectedOption)}
                                        options={ageProofList}
                                        isRequired={true}
                                    />
                                </td>

                                <td style={{ width: '40%' }}>
                                    <FileInput
                                        fieldName='groomageproofdoc'
                                        valueName={props.formData.groomageproofdoc}
                                        onChange={(e) => props.onChange(e.target.files[0], "groomageproofdoc")}
                                        isRequired={props.formData.groomageproofdoc !== null ? false : true}
                                        label='Document 1'
                                    />
                                    {props.formData.groomageproofdoc !== null &&
                                        <Button className='btn-view' onClick={() => handleOpenModal(props.formData.groomageproofdoc)} >
                                            view
                                        </Button>
                                    }
                                </td>

                            </tr>

                            {/* address */}
                            <tr>
                                <td style={{ width: '2%', fontWeight: 'bold' }}>5</td>
                                <td style={{ width: '30%' }}>Present Address Proof of Bride/Wife *</td>
                                <td>
                                    <DocumentSelect
                                        valueName={props.formData.bridepresentaddress}
                                        placeholder='Select Type'
                                        fieldName='bridepresentaddress'
                                        onChange={(selectedOption) => props.onChange('bridepresentaddress', selectedOption)}
                                        options={presentAddressProofList}
                                        isRequired={true}
                                    />
                                </td>

                                <td style={{ width: '40%' }}>
                                    <FileInput
                                        fieldName='bridepresentaddressdoc'
                                        valueName={props.formData.bridepresentaddressdoc}
                                        onChange={(e) => props.onChange(e.target.files[0], "bridepresentaddressdoc")}
                                        isRequired={props.formData.bridepresentaddressdoc !== null ? false : true}
                                        label='Document 1'
                                    />
                                    {props.formData.bridepresentaddressdoc !== null &&
                                        <Button className='btn-view' onClick={() => handleOpenModal(props.formData.bridepresentaddressdoc)} >
                                            view
                                        </Button>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '2%', fontWeight: 'bold' }}>6</td>
                                <td style={{ width: '30%' }}>Permanent Address Proof of Bride/Wife *</td>
                                <td>
                                    <DocumentSelect
                                        valueName={props.formData.bridepermanentaddress}
                                        placeholder='Select Type'
                                        fieldName='bridepermanentaddress'
                                        onChange={(selectedOption) => props.onChange('bridepermanentaddress', selectedOption)}
                                        options={permanentAddressProofList}
                                        isRequired={true}
                                    />
                                </td>

                                <td style={{ width: '40%' }}>
                                    <FileInput
                                        fieldName='bridepermanentaddressdoc'
                                        valueName={props.formData.bridepermanentaddressdoc}
                                        onChange={(e) => props.onChange(e.target.files[0], "bridepermanentaddressdoc")}
                                        isRequired={props.formData.bridepermanentaddressdoc !== null ? false : true}
                                        label='Document 1'
                                    />
                                    {props.formData.bridepermanentaddressdoc !== null &&
                                        <Button className='btn-view' onClick={() => handleOpenModal(props.formData.bridepermanentaddressdoc)} >
                                            view
                                        </Button>
                                    }
                                </td>
                            </tr>

                            <tr>
                                <td style={{ width: '2%', fontWeight: 'bold' }}>7</td>
                                <td style={{ width: '30%' }}>Present Address Proof of Groom/Husband *</td>
                                <td>
                                    <DocumentSelect
                                        valueName={props.formData.groompresentaddress}
                                        placeholder='Select Type'
                                        fieldName='groompresentaddress'
                                        onChange={(selectedOption) => props.onChange('groompresentaddress', selectedOption)}
                                        options={presentAddressProofList}
                                        isRequired={true}
                                    />
                                </td>

                                <td style={{ width: '40%' }}>
                                    <FileInput
                                        fieldName='groompresentaddressdoc'
                                        valueName={props.formData.groompresentaddressdoc}
                                        onChange={(e) => props.onChange(e.target.files[0], "groompresentaddressdoc")}
                                        isRequired={props.formData.groompresentaddressdoc !== null ? false : true}
                                        label='Document 1'
                                    />
                                    {props.formData.groompresentaddressdoc !== null &&
                                        <Button className='btn-view' onClick={() => handleOpenModal(props.formData.groompresentaddressdoc)} >
                                            view
                                        </Button>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '2%', fontWeight: 'bold' }}>8</td>
                                <td style={{ width: '30%' }}>Permanent Address Proof of Groom/Husband *</td>
                                <td>
                                    <DocumentSelect
                                        valueName={props.formData.groompermanentaddress}
                                        placeholder='Select Type'
                                        fieldName='groompermanentaddress'
                                        onChange={(selectedOption) => props.onChange('groompermanentaddress', selectedOption)}
                                        options={permanentAddressProofList}
                                        isRequired={true}
                                    />
                                </td>

                                <td style={{ width: '40%' }}>
                                    <FileInput
                                        fieldName='groompermanentaddressdoc'
                                        valueName={props.formData.groompermanentaddressdoc}
                                        onChange={(e) => props.onChange(e.target.files[0], "groompermanentaddressdoc")}
                                        isRequired={props.formData.groompermanentaddressdoc !== null ? false : true}
                                        label='Document 1'
                                    />
                                    {props.formData.groompermanentaddressdoc !== null &&
                                        <Button className='btn-view' onClick={() => handleOpenModal(props.formData.groompermanentaddressdoc)} >
                                            view
                                        </Button>
                                    }
                                </td>
                            </tr>
                        </table>

                    </Grid>
                </Box>
            </form>
        </div>
    )
}

export default DocumentSubmit