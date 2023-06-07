import React from "react";
import logo from "../images/logoweb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div id="header">
      <img src={logo} alt="logo" />
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
};

export default Header;
