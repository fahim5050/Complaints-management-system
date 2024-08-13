
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
  width: 500,
  bgcolor: '#BADFE7',
  boxShadow: 24,
  p: 4,
  color:"black",
  borderRadius: '5px',
};

const WorkerModel = ({  open, onClose, worker}) => {
   
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-detail-modal-title"
      aria-describedby="user-detail-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="user-detail-modal-title" variant="h6" component="h2">
          Worker Details
         
        </Typography>
        {worker && (
          <div>
            <Typography variant="body1" ><strong>ID:</strong> {worker.id}</Typography>
            <Typography variant="body1" ><strong>Name:</strong> {worker.name}</Typography>
            <Typography variant="body1" ><strong>Service Type:</strong> {worker.serviceType}</Typography>
            <Typography variant="body1" ><strong>Contact:</strong> {worker.contact}</Typography>
           
            <Typography variant="body1" ><strong>Email:</strong> {worker.email}</Typography>
            <Typography variant="body1" ><strong>Address:</strong> {worker.address}</Typography>
            <Typography variant="body1" ><strong>Assigned Tasks:</strong> {worker.serviceType}</Typography>
            <Typography variant="body1" ><strong>Created Date:</strong> {worker.createdDate}</Typography>
            {/* Add more fields as needed */}
          </div>
        )}
        <div className="btn" style={{display:'flex',justifyContent:'center',gap:'1rem'}}>
        <Button onClick={onClose} variant="contained">
         <CloseIcon/>
        </Button>
        <Button variant="contained"
              color="secondary"  >
          <EditNoteIcon/>
        </Button>
        
        <Button variant="contained"
              color="error"  >
          <DeleteIcon/>
        </Button>
        </div>
        
      </Box>
    </Modal>
  );
};

export default WorkerModel;
