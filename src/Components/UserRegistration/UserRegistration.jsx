import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const roles = ["Admin", "Super Admin", "User"];

const UserRegistrationForm = () => {
  const nevigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    fatherName: "",
    CNIC: "",
    mobileNumber: "",
    telephoneNumber: "",
    email: "",
    occuption: "",
    address: "",
    businessAddress: "",
    businessNumber: "",
    mailingAddress: "",
    role: "",
    emergencyNumber: "",
    VehicleInformation: "",
    createdDate: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3031/users", formData)
      .then((response) => console.log("Complaint submitted:", response.data))
      .catch((error) => console.error("Error submitting complaint:", error));
    console.log(formData);
    setFormData({
      Name: "",
      fatherName: "",
      CNIC: "",
      mobileNumber: "",
      telephoneNumber: "",
      email: "",
      occuption: "",
      address: "",
      businessAddress: "",
      businessNumber: "",
      mailingAddress: "",
      role: "",
      emergencyNumber: "",
      VehicleInformation: "",
      password:"",
      conformPassword:"",
    });
    // Here you can send the formData to your server or handle it as needed
  };
  const handleNevigate = () => {
    nevigate("/users");
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
      <Grid item xs={12} md={6}>
        <Paper style={{ padding: "20px", backgroundColor: "white" }}>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            User Registration Form
          </Typography>
          <form onSubmit={handleSubmit} style={{}}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <TextField
                fullWidth
                label="User Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Father Name"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                margin="normal"
                required
              />
            </div>

            <TextField
              fullWidth
              label="CNIC"
              name="CNIC"
              value={formData.CNIC}
              onChange={handleChange}
              margin="normal"
              required
            />
            <div style={{ display: "flex", gap: "2rem" }}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Telephone Number"
                name="telephoneNumber"
                value={formData.telephoneNumber}
                onChange={handleChange}
                margin="normal"
              />
            </div>

            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Occuption"
              name="occuption"
              value={formData.occuption}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Business Address"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Business Number"
              name="businessNumber"
              value={formData.businessNumber}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Mailing Address"
              name="mailingAddress"
              value={formData.mailingAddress}
              onChange={handleChange}
              margin="normal"
            />
            <div style={{ display: "flex", gap: "2rem" }}>
              <TextField
                fullWidth
                select
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                margin="normal"
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                label="Emergency Number"
                name="emergencyNumber"
                value={formData.emergencyNumber}
                onChange={handleChange}
                margin="normal"
              />
            </div>
            <div style={{display:'flex', gap:'2rem',}}>
            <TextField
              fullWidth
              label="Vehicle Information"
              name="VehicleInformation"
              value={formData.VehicleInformation}
              onChange={handleChange}
              margin="normal"
            />
             <TextField
              fullWidth
              label="Created Date"
              name="createdDate"
              value={formData.createdDate}
              onChange={handleChange}
              margin="normal"
              disabled
            />
            </div>
             <div style={{display:'flex', gap:'2rem',}}>
             <TextField
              fullWidth
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              password
            />
           
             <TextField
              fullWidth
              label="Conform Password"
              name="conformPassword"
              value={formData.conformPassword}
              onChange={handleChange}
              margin="normal"
              password
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
                onClick={handleNevigate}
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "20px" }}
              >
                Register
              </Button>
              <Button
                onClick={handleNevigate}
                type="button"
                variant="contained"
                color="error"
                style={{ marginTop: "20px" }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserRegistrationForm;
