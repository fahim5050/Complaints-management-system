import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const CreateComplaint = () => {
  const [formData, setFormData] = useState({
    type: "",
    subType: "",
    useProfile: false,
    pocName: "",
    pocContact: "",
    description: "",
  });
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch profile data from users API
    axios
      .get("http://localhost:3031/users/1") // Assuming user ID 1
      .then((response) => setProfileData(response.data))
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const complaintData = {
      ...formData,
      status: "pending",
    };
    // Submit form data to complaints API
    axios
      .post("http://localhost:3031/complaints", complaintData)
      .then((response) => console.log("Complaint submitted:", response.data))
      .catch((error) => console.error("Error submitting complaint:", error));
  };

  useEffect(() => {
    if (formData.useProfile && profileData) {
      setFormData({
        ...formData,
        pocName: profileData.name,
        id: profileData.id,
        email: profileData.email,
        pocContact: profileData.contact,
      });
    } else {
      setFormData({
        ...formData,
        pocName: "",
        // id: "",
        // email: "",
        pocContact: "",
      });
    }
  }, [formData.useProfile, profileData]);

  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "10px",
        p: 3,
        maxWidth: 500,
        mx: "auto",
        mt: 5,
      }}
    >
      <Typography
        style={{ display: "flex", justifyContent: "center" }}
        variant="h4"
        component="h1"
        gutterBottom
      >
        New Complaint
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            value={formData.type}
            onChange={handleChange}
            label="Type"
          >
            <MenuItem value="self">Self</MenuItem>
            <MenuItem value="behalf">On Behalf</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Sub Type</InputLabel>
          <Select
            name="subType"
            value={formData.subType}
            onChange={handleChange}
            label="Sub Type"
          >
            {/* Add options as needed */}
            <MenuItem value="electrician">Electrician</MenuItem>
            <MenuItem value="plumber">Plumber</MenuItem>
            <MenuItem value="technician">AC Technician</MenuItem>
            <MenuItem value="mason">Mason</MenuItem>
            <MenuItem value="carpenter">Carpenter</MenuItem>
            <MenuItem value="painter">Painter</MenuItem>
            <MenuItem value="cleaner">Cleaner</MenuItem>
            <MenuItem value="glassworker">Glass Worker</MenuItem>
            <MenuItem value="ceilingworker">Ceiling Worker</MenuItem>
            <MenuItem value="welder">Welder</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              name="useProfile"
              checked={formData.useProfile}
              onChange={handleChange}
            />
          }
          label="Use Same Information as profile"
        />
        <TextField
          fullWidth
          margin="normal"
          name="pocName"
          label="POC's Name"
          value={formData.pocName}
          onChange={handleChange}
          disabled={formData.useProfile}
        />
        <TextField
          fullWidth
          margin="normal"
          name="pocContact"
          label="POC's Contact Number"
          value={formData.pocContact}
          onChange={handleChange}
          disabled={formData.useProfile}
        />
        <TextField
          fullWidth
          margin="normal"
          name="description"
          label="Description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CreateComplaint;
