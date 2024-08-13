import React from 'react'
import "./Footer.css"
// import logo from "../../images/logo.jpg"
const Footer = () => {
  return (
    <div className="footer_wrapper">
        <div className="footer_container">
            {/* <div className="footer_left">
                <img src={logo} alt="" />
                <span>CMS</span>
            </div> */}
            {/* end of the footer left side */}
            {/* <div className="footer_mid">
            <span> Dashboard</span>
          <span>Users</span>
          <span>Administrators</span>
          <span>Complaints</span>
          <span>Feedbacks</span>
            </div> */}
            {/* end of the footer middle side */}
            <div className="footer_right">
               
                {/* <h5>Contact us</h5>
                <span>cms@gmail.com</span> */}
                {/* <span>+923001234567</span> */}

            </div>
            {/* end of the footer right side */}
        </div>
        {/* end of container */}
    </div>
  )
}

export default Footer