import React, { useContext } from "react";
import { ProjectContext } from "./context";

const Editcar = () => {
  const { state, dispatch } = useContext(ProjectContext);
  return (
    <div>
      <h2>EDIT CAR</h2>
      <form id="add-car-form">
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <input
          type="text"
          name="usage"
          placeholder="Usage"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="text"
          name="mileage"
          placeholder="Mileage"
          onChange={handleChange}
        />
        <input type="text" name="cc" placeholder="Cc" onChange={handleChange} />
        <input
          type="text"
          name="drive"
          placeholder="Drive"
          onChange={handleChange}
        />
        <input type="submit" id="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Editcar;
