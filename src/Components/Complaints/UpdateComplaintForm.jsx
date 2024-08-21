import React, { useState, useEffect } from "react";
import { Modal, TextField, Button, Box, MenuItem } from "@mui/material";

const statusOptions = ["Pending", "Approved", "In Progress", "Resolved"];

const UpdateComplaintModal = ({ open, onClose, complaint, onUpdate }) => {
  const [updatedComplaint, setUpdatedComplaint] = useState(complaint);

  useEffect(() => {
    if (complaint) {
      setUpdatedComplaint(complaint);
    }
  }, [complaint]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedComplaint((prevComplaint) => ({
      ...prevComplaint,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onUpdate(updatedComplaint);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Update Complaint</h2>
        <TextField
          fullWidth
          margin="normal"
          label="Title"
          name="title"
          value={updatedComplaint.title || ''}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={updatedComplaint.description || ''}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          select
          margin="normal"
          label="Status"
          name="status"
          value={updatedComplaint.status || ''}
          onChange={handleChange}
        >
          {statusOptions.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          margin="normal"
          label="User Name"
          name="userName"
          value={updatedComplaint.userName || ''}
          onChange={handleChange}
        />
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={onClose}
            sx={{ mt: 2 }}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default UpdateComplaintModal;
