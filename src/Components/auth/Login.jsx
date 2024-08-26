import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetch user data from db.json
      const response = await axios.get('http://localhost:3031/users');
      const users = response.data;

      // Find the user with the matching email and password
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        // If user is found, handle the role
        console.log(`Email: ${email}, Role: ${user.role}`);
        // Redirect or perform actions based on role
        if (user.role === 'Admin') {
          // Handle admin logic
        //   alert('Welcome Admin');
        navigate("/admin_dashboard")
        } else if (user.role === 'Super Admin') {
          // Handle superAdmin logic
        //   alert('Welcome Super Admin');
        navigate('/users')
        } else {
          // Handle user logic
        //   alert('Welcome User');
          navigate('/user_dashboard')
        }
      } else {
        // If no matching user is found, display an error
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching user data', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          height:'60vh',
          mb:4,
          backgroundColor:'white'
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
