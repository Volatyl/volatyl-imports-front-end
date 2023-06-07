import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav>
        {toggle && (
          <div id="links-container">
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
          </div>
        )}
        <div className="nav-icon">
          <FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
