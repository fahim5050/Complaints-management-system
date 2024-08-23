import React from "react";
import "./UserDashboard.css";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { Link } from "react-router-dom";
const UserDashboard = () => {
  return (
    <div className="user_d_wrapper">
      <span>
        Hi <strong>Ali </strong>Welcome to DHA Complaint Management System
      </span>
      <div className="user_d_container">
        <Link to="/user_complaints" style={{textDecoration:'none'}}>
        <div className="my_complaints"> 
            <AutoStoriesIcon/>
            My Complaints</div>
            </Link>
            <Link to="/add_complaint" style={{textDecoration:'none'}}>
        <div className="create_complaints">
            <EnhancedEncryptionIcon/>
            Create Complaints</div>
            </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
