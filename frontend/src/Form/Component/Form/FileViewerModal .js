import React from 'react';
import { Modal } from '@mui/material';

const FileViewerModal = ({ open, onClose, file }) => {
    const getFileType = () => {
        if (file instanceof Blob) {
            return file.type?.startsWith('image/') ? 'image' : 'pdf';
        }
        console.log('Invalid File Format:', file);
        return '';
    };
    const fileType = getFileType();

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="file-viewer-modal"
        >
            {fileType === 'image' ? (
                <img
                    src={URL.createObjectURL(file)}
                    alt="File Preview"
                    style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', margin: 'auto' }}
                />
            ) : fileType === 'pdf' ? (
                <iframe
                    title="File Preview"
                    src={URL.createObjectURL(file)}
                    style={{ width: '100%', height: '100%' }}
                />
            ) : (
                <div>Invalid File Format</div>
            )}
        </Modal>
    );
};

export default FileViewerModal;
