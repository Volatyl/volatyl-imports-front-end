import React from "react";
import logo from "../images/logoweb.png";

const Footer = () => {
  return (
    <div id="footer">
      <div>
        <img src={logo} alt="logo" />
        <p>© 2023 Volatyl Imports All rights reserved</p>
      </div>
      <div>
        <h3>Company</h3>
        <p>About</p>
        <p>Contact</p>
        <p>Location</p>
      </div>
      <div>
        <h3>Subscribe to our newsletter</h3>
        <input type="text" placeholder="Enter your email" id="footerInput" />
      </div>
    </div>
  );
};

export default Footer;
