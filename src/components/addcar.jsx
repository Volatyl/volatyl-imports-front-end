import React, { useContext, useState } from "react";
import { ProjectContext } from "./context";

const Addcar = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const [car, setCar] = useState({
    brand: "",
    image: "",
    year: null,
    price: null,
    usage: "",
    description: "",
    id: null,
    model: "",
    mileage: null,
    cc: null,
    drive: "",
  });

  function handleSubmit(e) {
    alert("Add function Disabled by admin");

  //   fetch("https://volatyl-imports.onrender.com/cars/add", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(car),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  //   alert("Car added successfully");
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setCar({ ...car, [name]: value });
  }
  return (
    <div id="addcar">
      <h2>ADD A CAR</h2>
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

export default Addcar;
