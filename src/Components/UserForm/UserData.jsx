import React, { useEffect, useState } from "react";
import "./UserForm.css";
import axios from "axios";
import UserDataTable from "../User/UserDataTable";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await axios.get("http://localhost:3031/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error fetching users", error);
        setLoading(false);
      }
    };
    
    fetchComplaint();
  }, []);
  const handleView = (user) => {
    // Implement view logic here
    alert(`Viewing user: ${user.name}`);
  };

  const handleUpdate = (updatedUser) => {
    setUsers((prevUser) =>
      prevUser.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };
  // const handleDelete = (user) => {
  //   // Implement delete logic here
  //   alert(`Deleting user: ${user.name}`);
  //   // Optionally remove the user from the state
  //   setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
  // };
  const handleDelete = (user) => {
    // Now accessing Name via user.row.Name
    const confirmDelete = window.confirm(`Are you sure you want to delete: ${user.row.Name}?`);
    if (!confirmDelete) return;
  
    fetch(`http://localhost:3031/users/${user.row.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Update the state to remove the deleted user
          setUsers((prevUsers) =>
            prevUsers.filter((u) => u.id !== user.row.id)
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
          to="/registration"
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
            Add User
          </span>
        </Link>
      </div>
      <UserDataTable
        users={users}
        onView={handleView}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UserForm;
