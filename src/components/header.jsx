import React from "react";
import logo from "../images/logoweb.png";

import NavBar from "./navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <NavLink to="/" className="navlinks">
        <img src={logo} alt="logo" />
      </NavLink>

      <NavBar />
    </div>
  );
};

export default Header;
