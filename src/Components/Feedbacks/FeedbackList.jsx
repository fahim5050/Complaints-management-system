import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false); // To control the modal
  const [selectedFeedback, setSelectedFeedback] = useState(null); // To store the selected feedback
  const [responseMessage, setResponseMessage] = useState(''); // To store the response message

  useEffect(() => {
    // Fetch feedback from the backend
    fetch('http://localhost:3031/feedbacks')
      .then(response => response.json())
      .then(data => setFeedbacks(data))
      .catch(error => console.error('Error fetching feedback:', error));

    // Fetch users from the backend
    fetch('http://localhost:3031/users')
      .then(response => response.json())
      .then(userData => setUsers(userData))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? user.Name : 'Unknown User';
  };

  const filteredFeedbacks = feedbacks.filter(feedback =>
    feedback.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getUserName(feedback.userId).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpen = (feedback) => {
    setSelectedFeedback(feedback);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFeedback(null);
    setResponseMessage('');
  };

  const handleSendResponse = () => {
    // Add logic to send the response
    // alert(`Response to feedback with ID: ${selectedFeedback.id}: ${responseMessage}`);
    handleClose();
  };

  return (
    <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '2rem' }}>
      <h2>User Feedback</h2>
      <Input
        placeholder="Search Feedback..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Table>
        <thead>
          <tr>
            <th>User</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeedbacks.map(feedback => (
            <tr key={feedback.id}>
              <td>{getUserName(feedback.userId)}</td>
              <td>{feedback.message}</td>
             
              <td >
               
                <Button
                  onClick={() => handleOpen(feedback)}
                  variant="contained"
                  color="secondary"
                  
                >
                  Respond
                </Button>
                 <Button
                  onClick={() => handleOpen(feedback)}
                  variant="contained"
                  color="error"
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Dialog open={open} onClose={handleClose}  sx={{ '& .MuiPaper-root': { backgroundColor: '#BADFE7' } }} >
        <DialogTitle >{selectedFeedback ? getUserName(selectedFeedback.userId) : ''} - Feedback</DialogTitle>
        <DialogContent >
          <DialogContentText>
            {selectedFeedback ? selectedFeedback.message : ''}
          </DialogContentText>
          {selectedFeedback && (
            <>
              <TextField
                autoFocus
                margin="dense"
                // label="Response"
                type="text"
                placeholder='Enter your response'
                fullWidth
                variant="standard"
                value={responseMessage}
                onChange={(e) => setResponseMessage(e.target.value)}
                multiline
                rows={4}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSendResponse} color="secondary">
            Send Response
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedbackList;
