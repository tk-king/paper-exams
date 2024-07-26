import React from 'react';
import { Modal, Box } from '@mui/material';
import TextQestionModalContent from './TextQestionModalContent';

const CreateQuestionModal = ({ open, onClose, questionType }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                {questionType === 'text' ? (
                    <TextQestionModalContent />
                ) : null}
            </Box>
        </Modal>
    );
};

export default CreateQuestionModal;
