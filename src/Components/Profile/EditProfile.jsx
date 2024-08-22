import React from 'react';
import { TextField, Button, Box } from "@mui/material";

const EditProfile = () => {
  return (
    <Box
      sx={{
        width: 800,
        bgcolor: "background.paper",
        boxShadow: 3,
        p: 4,
        margin: '2px auto',
        borderRadius: 2,
        overflowY: "auto",
      }}
    >
      <h2 style={{ display: "flex", justifyContent: 'center' }}>Update Profile</h2>

      <div style={{ display: "flex", gap: "2rem" }}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value=""
        />
        <TextField
          fullWidth
          margin="normal"
          label="Father Name"
          name="fatherName"
          value=""
        />
        <TextField
          fullWidth
          margin="normal"
          label="CNIC"
          name="cnic"
          value=""
        />
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        <TextField
          fullWidth
          margin="normal"
          label="Mobile Number"
          name="mobileNumber"
          value=""
        />
        <TextField
          fullWidth
          margin="normal"
          label="Telephone Number"
          name="telephoneNumber"
          value=""
        />
        <TextField
          fullWidth
          margin="normal"
          label="Business Number"
          name="businessNumber"
          value=""
        />
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value=""
        />
        
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value=""
        />  
       
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
      <TextField
          fullWidth
          margin="normal"
          label="Occupation"
          name="occupation"
          value=""
        />
       
        <TextField
          fullWidth
          margin="normal"
          label="Business Address"
          name="businessAddress"
          value=""
        />
        <TextField
          fullWidth
          margin="normal"
          label="Mailing Address"
          name="mailingAddress"
          value=""
        />
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        <TextField
          fullWidth
          margin="normal"
          label="Emergency Number"
          name="emergencyNumber"
          value=""
        />
        <TextField
          fullWidth
          margin="normal"
          label="Vehicle Information"
          name="vehicleInformation"
          value=""
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
          sx={{ mt: 2 }}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
        >
          Cancel
        </Button>
      </div>
    </Box>
  );
};

export default EditProfile;
