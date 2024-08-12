import React, { useEffect, useState } from "react";
import axios from "axios";
import ComplaintDataTable from "./ComplaintDataTable";
import { Link } from "react-router-dom";
import './complaintData.css'

const ComplaintData = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [workers, setWorkers]=useState([])

  useEffect(() => {
    // Function to fetch complaints
    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://localhost:3031/complaints");
        setComplaints(response.data);
      } catch (error) {
        console.log("Error fetching complaints", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    // Function to fetch users
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3031/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    const fetchWorker = async () => {
      try {
        const response = await axios.get("http://localhost:3031/workers");
        setWorkers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
     
    };
    // Fetch both complaints and users
    fetchComplaints();
    fetchUsers();
    fetchWorker();
  }, []);

  // Map complaints to include user names
  const complaintsWithUserNames = complaints.map((complaint) => {
    const user = users.find((user) => user.id === String(complaint.userId));
    return { ...complaint, userName: user ? user.Name : "Unknown User" };
  });

  // Handle viewing a complaint 
  const handleView = (complaint) => {
    alert(`Viewing complaint: ${complaint.title}`);
  };

  // Handle updating a complaint
  const handleUpdate = (complaint) => {
    alert(`Updating complaint: ${complaint.title}`);
  };

  // Handle deleting a complaint
  const handleDelete = (complaint) => {
    alert(`Deleting complaint: ${complaint.title}`);
    setComplaints((prevComplaints) =>
      prevComplaints.filter((c) => c.id !== complaint.id)
    );
  };

  // Render loading state
  if (loading) {
    return <div>Loading complaints...</div>;
  }

  return (
    <div className="complaint_data">
      <div className="add_complaint">
        <Link to='/add_complaint' style={{textDecoration:'none',color:'white',backgroundColor:'#388087',padding:'1rem',marginRight:'1rem', borderRadius:'5px'}}><span>Add Complaint</span></Link>
      </div>
      <ComplaintDataTable
        complaints={complaintsWithUserNames}
        onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        workers={workers}
      />
    </div>
  );
};

export default ComplaintData;

