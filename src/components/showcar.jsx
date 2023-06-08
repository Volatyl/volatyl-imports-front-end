import React, { useContext } from "react";
import { ProjectContext } from "./context";

const Showcar = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const car = state.selectedCar;

  let formattedPrice;
  if (car.price) {
    formattedPrice = car.price.toLocaleString();
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
          <button className="showBtn">Enquire via whatsapp</button>
          <button className="showBtn">Call</button>
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
    </div>
  );
};

export default Showcar;
