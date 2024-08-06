import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal, Box, Typography, Button } from '@mui/material';
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#C2EDCE',
  boxShadow: 24,
  p: 4,
  color:"black",
  borderRadius: '5px',
};

const ComplaintsModal = ({open,onClose,complaint}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-detail-modal-title"
      aria-describedby="user-detail-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="user-detail-modal-title" variant="h6" component="h2">
          User Details
         
        </Typography>
        {complaint && (
          <div>
            <Typography variant="body1"><strong>ID:</strong> {complaint.id}</Typography>
            <Typography variant="body1"><strong>Name:</strong> {complaint.title}</Typography>
            <Typography variant="body1"><strong>Email:</strong> {complaint.description}</Typography>
            <Typography variant="body1"><strong>Status:</strong> {complaint.status}</Typography>
            {/* Add more fields as needed */}
          </div>
        )}
        <Button onClick={onClose} variant="contained"  sx={{ mt: 2,  }}>
         <CloseIcon/>
        </Button>
        <Button variant="contained"
              color="secondary"  sx={{ mt: 2, ml:2,}}>
          <EditNoteIcon/>
        </Button>
        
        <Button variant="contained"
              color="error"  sx={{ mt: 2, ml:2,  }}>
          <DeleteIcon/>
        </Button>
        
      </Box>
    </Modal>
  )
}

export default ComplaintsModal