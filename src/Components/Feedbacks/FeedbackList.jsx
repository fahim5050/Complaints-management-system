import React, { useState, useEffect } from 'react';
import { Table, Button, Input } from '@mui/material';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

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

  return (
    <div style={{display:'flex', flexDirection:"column",alignItems:'center',padding:'2rem'}}>
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
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeedbacks.map(feedback => (
            <tr key={feedback.id}>
              <td>{getUserName(feedback.userId)}</td>
              <td>{feedback.message}</td>
              <td>{feedback.status}</td>
              <td>
                <Button
                  // onClick={() => handleViewDetails(feedback.id)}
                  variant="contained"
                  color="primary"
                >
                  View
                </Button>
                <Button
                  // onClick={() => handleRespond(feedback.id)}
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: '10px' }}
                >
                  Respond
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FeedbackList;
