import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal, Box, Typography, Button } from '@mui/material';
const modalStyle = {
  position: 'absolute',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#BADFE7',
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
        Complaint Title
         
        </Typography>
        {complaint && (
          <div>
            <Typography variant="body1"><strong>ID:</strong> {complaint.id}</Typography>
            <Typography variant="body1"><strong>Title:</strong> {complaint.title}</Typography>
            <Typography variant="body1"><strong>Description:</strong> {complaint.description}</Typography>
            <Typography variant="body1"><strong>User Name:</strong> {complaint.userName}</Typography>
            <Typography variant="body1"><strong>Status:</strong> {complaint.status}</Typography>
            <Typography variant="body1"></Typography>
            {/* Add more fields as needed */}
          </div>
        )}
        <div className="btn" style={{display:'flex',justifyContent:'center',gap:'1rem'}}>
        <Button onClick={onClose} variant="contained">
         <CloseIcon/>
        </Button>
        {/* <Button variant="contained"
              color="secondary"  >
          <EditNoteIcon
         onClick={() => complainthandleUpdate()}
          />
        </Button> */}
        
        <Button variant="contained"
              color="error"  >
          <DeleteIcon/>
        </Button>
        </div>
      </Box>
    </Modal>
  )
}

export default ComplaintsModal