import React, { useContext } from "react";
import { ProjectContext } from "./context";

const Showcar = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const car = state.selectedCar;

  console.log(car);
  //   const formattedPrice = car.price.toLocaleString();

  return (
    <div className="show-car">
      <div>
        <img src={car.image} alt="car img" />
      </div>
      <div className="show-car-details">
        <h2>
          {car.brand} {car.model}
        </h2>
        <p>{car.description}</p>
        <button>Enquire via whatsapp</button>
        <button>Call</button>
      </div>
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
