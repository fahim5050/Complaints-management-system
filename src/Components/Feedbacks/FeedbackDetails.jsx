// import React, { useState, useEffect } from 'react';
// import { Button, TextField, Box } from '@mui/material';

// const FeedbackDetails = ({ feedbackId, onClose }) => {
//   const [feedback, setFeedback] = useState(null);
//   const [response, setResponse] = useState('');

//   useEffect(() => {
//     // Fetch the specific feedback details
//     fetch(`http://localhost:3031/feedbacks/${feedbackId}`)
//       .then(response => response.json())
//       .then(data => setFeedback(data))
//       .catch(error => console.error('Error fetching feedback details:', error));
//   }, [feedbackId]);

//   const handleSendResponse = () => {
//     // Send the response to the backend
//     fetch(`http://localhost:3031/feedbacks/${feedbackId}/respond`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ response }),
//     })
//       .then(() => alert('Response sent!'))
//       .catch(error => console.error('Error sending response:', error));
//   };

//   if (!feedback) return <div>Loading...</div>;

//   return (
//     <Box>
//       <h2>Feedback Details</h2>
//       <p><strong>User:</strong> {feedback.user}</p>
//       <p><strong>Message:</strong> {feedback.message}</p>
//       <p><strong>Status:</strong> {feedback.status}</p>
//       <TextField
//         label="Your Response"
//         value={response}
//         onChange={(e) => setResponse(e.target.value)}
//         fullWidth
//         multiline
//         rows={4}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleSendResponse}
//         style={{ marginTop: '20px' }}
//       >
//         Send Response
//       </Button>
//       <Button
//         variant="outlined"
//         onClick={onClose}
//         style={{ marginTop: '20px', marginLeft: '10px' }}
//       >
//         Close
//       </Button>
//     </Box>
//   );
// };

// export default FeedbackDetails;
