import React from "react";
import camaro from "../images/camaro.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  function handleClick() {
    dispatch({ type: "SHOW-CAR-BOOL", payload: false });
  }
  return (
    <div id="home">
      <h1>Find your dream car</h1>
      <img src={camaro} alt="gari main" id="car"  />

      <NavLink to="/cars" id="homeBtn" onClick={handleClick}>
        VIEW AVAILABLE CARS
      </NavLink>
    </div>
  );
};

export default Home;
