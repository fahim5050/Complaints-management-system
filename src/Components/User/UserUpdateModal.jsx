import React, { useState } from "react";
import { Modal, TextField, Button, Box } from "@mui/material";

const UserUpdateModal = ({ open, onClose, user, onUpdate }) => {
  const [updatedComplaint, setUpdatedComplaint] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedComplaint({ ...updatedComplaint, [name]: value });
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
        <h2>Update User Record</h2>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="Name"
          value={updatedComplaint.Name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={updatedComplaint.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Mobile Number"
          name="mobileNumber"
          value={updatedComplaint.mobileNumber}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Role"
          name="role"
          value={updatedComplaint.role}
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
            Cancle
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default UserUpdateModal;
