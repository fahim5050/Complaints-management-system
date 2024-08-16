
// import React, { useState } from 'react';
// import { TextField, Button, MenuItem, Grid, Typography } from '@mui/material';


// const serviceTypes = [
//   'Electrician',
//   'Plumber ',
//   'AC Technician ',
//   'Mason',
//   'Carpenter',
//   'Painter',
//   'Cleaner',
//   'Construction',
//   'Glass Worker',
//   'Ceiling Worker',
//   'Welder',
// ];

// const WorkerRegistration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     serviceType: '',
//     experience: '',
//     contact: '',
//     email: '',
//     password:'',
//     conformPassowrd:''
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log('Form Submitted:', formData);
//     // Add your form submission logic here
//     if (formData.password !== formData.confirmPassword) {
//       setErrorMessage('Passwords do not match');
//       return;
//     }

//     setErrorMessage('');
//     console.log('Form Submitted:', formData);
//     // Add your form submission logic here


//   };

//   return (
//     <Grid container spacing={2} justifyContent="center" >
//       <Grid item xs={12} sm={8} md={6} sx={{backgroundColor:'white',padding:'2rem',borderRadius:'10px',marginTop:'4rem',marginBottom:'4rem'}} >
//         <Typography variant="h4" align="center" gutterBottom>
//           Employee Registration
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             fullWidth
//             select
//             label="Service Type"
//             name="serviceType"
//             value={formData.serviceType}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//           >
//             {serviceTypes.map((option) => (
//               <MenuItem key={option} value={option}>
//                 {option}
//               </MenuItem>
//             ))}
//           </TextField>
//           <TextField
//             fullWidth
//             label="Experience"
//             name="experience"
//             type="number"
//             value={formData.experience}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             fullWidth
//             label="Contact"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//           />
//           <TextField
//             fullWidth
//             label="Confirm Password"
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             margin="normal"
//             variant="outlined"
//           />
//           {errorMessage && (
//             <Typography color="error" variant="body2" align="center" margin="normal">
//               {errorMessage}
//             </Typography>
//           )}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 2 }}
//           >
//             Register
//           </Button>
//         </form>
//       </Grid>
//     </Grid>
//   );
// };

// export default WorkerRegistration;

import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Typography } from '@mui/material';

const serviceTypes = [
  'Electrician',
  'Plumber ',
  'AC Technician ',
  'Mason',
  'Carpenter',
  'Painter',
  'Cleaner',
  'Construction',
  'Glass Worker',
  'Ceiling Worker',
  'Welder',
];

const WorkerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    serviceType: '',
    experience: '',
    contact: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    setErrorMessage('');
    console.log('Form Submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={8} md={6} sx={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', marginTop: '4rem', marginBottom: '4rem' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Employee Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            select
            label="Service Type"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          >
            {serviceTypes.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Experience"
            name="experience"
            type="number"
            value={formData.experience}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          {errorMessage && (
            <Typography color="error" variant="body2" align="center" margin="normal">
              {errorMessage}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default WorkerRegistration;
