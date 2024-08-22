import React, { useState } from "react";
import { Modal, TextField, Button, Box, MenuItem } from "@mui/material";

const roles = ["Admin", "Super Admin", "User"];

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
          width: 800,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          margin:'2px',
          maxHeight: "auto",
          overflowY: "auto",

        }}
      >
        <h2 style={{display: "flex",justifyContent:'center'}}>Update User Record</h2>
        <div style={{ display: "flex", gap: "2rem" }}>
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
          label="Father Name"
          name="fatherName"
          value={updatedComplaint.fatherName}
          onChange={handleChange}
        />
         <TextField
          fullWidth
          margin="normal"
          label="CNIC"
          name="CNIC"
          value={updatedComplaint.CNIC}
          onChange={handleChange}
        />
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
       
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
          label="Telephone Number"
          name="telephoneNumber"
          value={updatedComplaint.telephoneNumber}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Business Number"
          name="businessNumber"
          value={updatedComplaint.businessNumber}
          onChange={handleChange}
        />
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
       
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
          select
          margin="normal"
          label="Role"
          name="role"
          value={updatedComplaint.role}
          onChange={handleChange}
        >
{roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
        </TextField>
        <TextField
          fullWidth
          margin="normal"
          label="Occuption"
          name="occuption"
          value={updatedComplaint.occuption}
          onChange={handleChange}
        />
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
        
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={updatedComplaint.address}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Business Address"
          name="businessAddress"
          value={updatedComplaint.businessAddress}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Mailing Address"
          name="mailingAddress"
          value={updatedComplaint.mailingAddress}
          onChange={handleChange}
        />
        </div>
       
       
        <div style={{ display: "flex", gap: "2rem" }}>
        <TextField
          fullWidth
          margin="normal"
          label="Emergency Number"
          name="emergencyNumber"
          value={updatedComplaint.emergencyNumber}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Vehicle Information"
          name="VehicleInformation"
          value={updatedComplaint.VehicleInformation}
          onChange={handleChange}
        />
         <TextField
          fullWidth
          margin="normal"
          label="UpdateDate"
          name="createdDate"
          value={updatedComplaint.createdDate}
          onChange={handleChange}
        />
        </div>
       
       
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
