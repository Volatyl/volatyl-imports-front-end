import React from "react";
import logo from "../images/logoweb.png";

import NavBar from "./navbar";

const Header = () => {
  return (
    <div id="header">
      <img src={logo} alt="logo" />
      <NavBar />
    </div>
  );
};

export default Header;
