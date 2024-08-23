import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Input, Button } from '@mui/material';

const UserComplaints = ({ userId }) => {
  const [complaints, setComplaints] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3031/complaints?userId=${userId}`)
        .then(response => response.json())
        .then(data => setComplaints(data))
        .catch(error => console.error('Error fetching complaints:', error));
    }
  }, [userId]);

  const filteredComplaints = complaints.filter(complaint =>
    (complaint.message || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', padding: '2rem' }}>
      <h2>User Complaints</h2>
      <Input
        placeholder="Search Complaints..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Title</strong></TableCell>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
            <TableCell><strong>Action</strong></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredComplaints.map(complaint => (
            <TableRow key={complaint.id}>
              <TableCell>{complaint.title}</TableCell>
              <TableCell>{complaint.description}</TableCell>
              <TableCell>{complaint.status}</TableCell>
              <TableCell><Button
              variant="contained"
             color="secondary"
              >Feedback</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserComplaints;
