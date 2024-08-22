import React from "react";
import "./Profile.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="profile_wrapper">
      <div className="pofile_main">
        <div className="profile_left">
          <div className="profile_left_top">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
            />
          </div>
          {/* end of the profile left top side */}
          <div className="profile_left_bottom">
            <Button
              variant="contained"
              style={{ backgroundColor: "#ff5722", color: "#fff" }}
            >
              Logout
            </Button>
            <Link to='/edit_profile'>
            <Button
              variant="contained"
              style={{ backgroundColor: "#4caf50", color: "#fff" }}
            >
              Edit 
            </Button>
            </Link>
          </div>
          {/* end of the profile left bottom */}
        </div>
        {/* end of the profile left side */}
        <div className="profile_right">
            <span ><strong>Name:</strong>jhon Doe</span>
            <span><strong>Father Name:</strong>Thomas jhon</span>
            <span><strong>CNIC:</strong>12341-232-3456-7</span>
            <span><strong>Mobile Number:</strong>2345678909876</span>
            <span><strong>Telephone Number:</strong>091234556</span>
            <span><strong>Emergency Number:</strong>091987654</span>
            <span><strong>Email:</strong>admin@gmail.com</span>
            <span><strong>Occuption:</strong>Front end developer</span>
            <span><strong>Address:</strong>Tech Track Technology Deans Trad Center Peshawar</span>
            <span><strong>Business Address:</strong>Tech Track Technology Deans Trad Center Peshawar</span>
            <span><strong>Vehicle Information:</strong>5</span>
        </div>
        {/* end of the profile right side  */}
      </div>
    </div>
  );
};

export default Profile;
