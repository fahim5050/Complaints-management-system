import React from 'react';
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

const UserDetailModal = ({  open, onClose, user }) => {
   
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
        {user && (
          <div>
            <Typography variant="body1"><strong>ID:</strong> {user.id}</Typography>
            <Typography variant="body1"><strong>Name:</strong> {user.name}</Typography>
            <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
            <Typography variant="body1"><strong>Role:</strong> {user.role}</Typography>
            {/* Add more fields as needed */}
          </div>
        )}
        <Button onClick={onClose} variant="contained"  sx={{ mt: 2,  }}>
          Close
        </Button>
        <Button variant="contained"
              color="secondary"  sx={{ mt: 2, ml:2,}}>
          Update
        </Button>
        
        <Button variant="contained"
              color="error"  sx={{ mt: 2, ml:2,  }}>
          Delete
        </Button>
        
      </Box>
    </Modal>
  );
};

export default UserDetailModal;
