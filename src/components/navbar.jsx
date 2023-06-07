import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize > 540) {
      setToggle(false);
    }
  }, [screenSize]);
  return (
    <>
      <nav>
        <div className={toggle ? "links-container-mobile" : "links-container"}>
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
        <div className="nav-icon">
          <FontAwesomeIcon icon={faBars} onClick={() => setToggle(!toggle)} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
