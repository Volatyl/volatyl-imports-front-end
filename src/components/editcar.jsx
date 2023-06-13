import React, { useContext, useState } from "react";
import { ProjectContext } from "./context";
import { useNavigate } from "react-router";

const Editcar = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const [car, setCar] = useState(state.selectedCar);

  const history = useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    // setCar((prevCar) => ({ ...prevCar, [name]: value }));
    // console.log(car);
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value === "" ? state.selectedCar[name] : value,
    }));
  }
  function handleSubmit(e) {
    alert("Editing Disabled by admin");
    // fetch(`https://volatyl-imports.onrender.com/edit/${state.selectedCar.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(car),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // history("/cars");
    //   })
    //   .catch((error) => console.log(error));
    // history("/");
  }
  return (
    <div>
      <h2 id="edit-car-h2">EDIT CAR</h2>
      <form id="edit-car">
        <input
          type="text"
          name="brand"
          placeholder={car.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="model"
          placeholder={car.model}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image url"
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder={car.year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder={car.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="usage"
          placeholder={car.usage}
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
          placeholder={car.mileage}
          onChange={handleChange}
        />
        <input type="text" name="cc" placeholder="Cc" onChange={handleChange} />
        <input
          type="text"
          name="drive"
          placeholder={car.drive}
          onChange={handleChange}
        />
        <input type="submit" id="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Editcar;
