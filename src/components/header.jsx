import React from "react";
import logo from "../images/logoweb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./navbar";

const Header = () => {
  return (
    <div id="header">
      <img src={logo} alt="logo" />
      {/* <div className="nav-icon">
        <FontAwesomeIcon icon={faBars} />
      </div> */}
      <NavBar />
    </div>
  );
};

export default Header;
