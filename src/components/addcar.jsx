import React, { useContext } from "react";
import { ProjectContext } from "./context";

const Addcar = () => {
  const { state, dispatch } = useContext(ProjectContext);
  return (
    <div id="addcar">
      <h2>ADD A CAR</h2>
      <form id="add-car-form">
        <input type="text" placeholder="Brand" />
        <input type="text" placeholder="Model" />
        <input type="text" placeholder="Image" />
        <input type="text" placeholder="Year" />
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Usage" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Mileage" />
        <input type="text" placeholder="Cc" />
        <input type="text" placeholder="Drive" />
        <input type="submit" id="submit"/>
      </form>
    </div>
  );
};

export default Addcar;
