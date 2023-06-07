import React, { useContext } from "react";
import { ProjectContext } from "./context";
import Filter from "./filter";

const Cars = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const cars = Array.from(state.cars);
  //   console.log(cars);

  return (
    <div>
      {/* <Filter /> */}
      {cars.map((car) => {
        return (
          <div key={car.model} className="car-card">
            <div className="img-container">
              <img src={car.image} alt="car img" className="car-images" />
            </div>
            <div className="car-details">
              <div className="name-year-container">
                <p>{car.year}</p>
                <h3>{car.model}</h3>
              </div>
              <p>{car.description}</p>
              <div className="car-specs">
                <p>{car.drive}</p>
                <p>{car.cc}</p>
                <p>{car.usage}</p>
              </div>
              <h3>KES {car.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cars;
