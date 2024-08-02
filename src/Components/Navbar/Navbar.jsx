import React from "react";

import logo from "../../images/logo.jpg";
import "./Navbar.css";
import { IoIosNotifications } from "react-icons/io";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav_wrapper">
      <div className="nav_container">
        <div className="nav_log">
          <img src={logo} alt="" />
          <span>CMS</span>
        </div>
        {/* end of the navbar logo */}
        <div className="nav_menu">
          {/* <Link></Link> */}
          <span> Dashboard</span>
          {/* <Link to="/users"><span>Users</span></Link> */}
          <span>Administrators</span>
          <span>Complaints</span>
          <span>Registration</span>
          <span>Feedbacks</span>
          <span>
            <IoIosNotifications
              style={{
                width: 25,
                height: 25,
                alignItems: "center",
                marginTop: 10,
              }}
            />
          </span>
        </div>
        {/* end of the navbar menu */}
        <div className="profile">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <span>user name</span>
        </div>
      </div>
      {/* end of the navbar container */}
    </div>
  );
};

export default Navbar;
