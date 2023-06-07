import React, { useContext } from "react";
import { ProjectContext } from "./context";
import Filter from "./filter";

const Cars = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const cars = Array.from(state.cars);
  //   console.log(cars);

  function handleclick(car) {
    console.log(car);
    dispatch({ type: "SHOW-CAR", payload: car });
  }

  return (
    <div id="cars-container">
      <Filter />
      {cars.map((car) => {
        const description = car.description.substring(
          0,
          car.description.indexOf(".") + 1
        );
        const formattedPrice = car.price.toLocaleString();
        return (
          <div
            key={car.model}
            className="car-card"
            onClick={() => handleclick(car)}
          >
            <div className="img-container">
              <img src={car.image} alt="car img" className="car-images" />
            </div>
            <div className="car-details">
              <div className="name-year-container">
                <p>{car.year}</p>
                <h3>{car.model}</h3>
              </div>

              <div className="car-specs">
                <p>{car.drive}</p>
                <p>{car.cc}</p>
                <p>{car.usage}</p>
              </div>
              <p>{description}</p>
              <h3>KES {formattedPrice}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cars;
