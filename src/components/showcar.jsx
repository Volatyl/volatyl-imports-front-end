import React, { useContext } from "react";
import { ProjectContext } from "./context";
import { NavLink } from "react-router-dom";

const Showcar = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const car = state.selectedCar;

  let formattedPrice;
  if (car.price) {
    formattedPrice = car.price.toLocaleString();
  }

  function handleDelete() {
    alert("Delete Disabled by admin");
    // fetch(`https://volatyl-imports.onrender.com/cars/${car.id}`, {
    //   method: "DELETE",
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       dispatch({ type: "DELETE_CAR", payload: car.id });
    //     } else {
    //       // Handle delete error
    //       console.log("Error deleting car");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Error deleting car:", error);
    //   });
  }

  return (
    <div id="show-main">
      <div className="show-car">
        <div className="img-container">
          <img src={car.image} alt="car img" />
        </div>
        <div className="show-car-details">
          <h2>
            {car.brand} {car.model}
          </h2>
          <p>{car.description}</p>
          <button className="showBtn">
            <a
              href="https://wa.me/254705790997"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire via whatsapp
            </a>
          </button>
          <button
            className="showBtn"
            onClick="window.location.href = 'tel:+254705790997'"
          >
            Call
          </button>

          <NavLink to="/edit" className="showBtn">
            Edit Car
          </NavLink>

          <button className="showBtn" onClick={handleDelete} >
            Delete
          </button>
        </div>
      </div>
      <h2 id="car-price">Ksh {formattedPrice}</h2>
      <div className="show-car-specs">
        <div className="specs-left">
          <strong>Year of manufacture </strong>
          <strong>Usage </strong>
          <strong>Mileage </strong>
          <strong>Engine Size </strong>
          <strong>Drive </strong>
        </div>
        <div className="specs-right">
          <p>{car.year}</p>
          <p>{car.usage}</p>
          <p>{car.mileage}</p>
          <p>{car.cc}</p>
          <p>{car.drive}</p>
        </div>
      </div>
      <div id="showCarFooter">
        <h2>More Vehicles</h2>
        <p>
          People who viewed the {car.brand} {car.model} also consider
        </p>
      </div>
    </div>
  );
};

export default Showcar;
