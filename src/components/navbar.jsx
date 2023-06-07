import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink to="/cars" className="navlinks">
          Cars
        </NavLink>
        <NavLink to="/about" className="navlinks">
          About
        </NavLink>
        <NavLink to="/contacts" className="navlinks">
          Contacts
        </NavLink>
        <NavLink to="/faq" className="navlinks">
          FAQ
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
