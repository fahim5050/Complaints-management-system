

import React, { useEffect, useState } from "react";

import axios from "axios";

import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import WorkerList from "./WorkerList";
const WorkerData = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await axios.get("http://localhost:3031/workers");
        setWorkers(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error fetching users", error);
        setLoading(false);
      }
    };
    console.log(workers)
    
    fetchComplaint();
  }, []);
  const handleView = (worker) => {
    // Implement view logic here
    alert(`Viewing user: ${worker.name}`);
  };

  const handleUpdate = (worker) => {
    // Implement update logic here
    alert(`Updating user: ${worker.name}`);
  };

  // const handleDelete = (user) => {
  //   // Implement delete logic here
  //   alert(`Deleting user: ${user.name}`);
  //   // Optionally remove the user from the state
  //   setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
  // };
  const handleDelete = (worker) => {
    // Now accessing Name via user.row.Name
    const confirmDelete = window.confirm(`Are you sure you want to delete: ${worker.row.name}?`);
    if (!confirmDelete) return;
  
    fetch(`http://localhost:3031/workers${worker.row.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Update the state to remove the deleted user
          setWorkers((prevWorker) =>
            prevWorker.filter((w) => w.id !== worker.row.id)
          );
        } else {
          alert('Failed to delete the user');
        }
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        alert('Error occurred while deleting the user');
      });
  };
  
  return (
    <div className="userForm">
      <div className="add_user">
        <Link
          to="/register_employee"
          style={{
            display: "flex",
            color: "white",
            textDecoration: "none",
            background: "#388087",
            alignItems: "center",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "1rem",
            
          }}
        >
          <span>
            {/* <AddIcon /> */}
            Add Employee
          </span>
        </Link>
      </div>
      <WorkerList
        workers={workers}
        onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default WorkerData;
