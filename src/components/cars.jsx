import React, { useContext } from "react";
import { ProjectContext } from "./context";
import Filter from "./filter";
import Showcar from "./showcar";

const Cars = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const filteredCars = Array.from(state.filteredCars);
  const filteredTwo = Array.from(state.filteredTwo);

  const show = state.showCar;

  function handleclick(car) {
    console.log(car);
    dispatch({ type: "SHOW_CAR", payload: car });
    dispatch({ type: "SHOW_CAR_BOOL", payload: true });

    const newCars = filteredCars.filter((acar) => acar.id !== car.id);
    dispatch({ type: "FILTER_CARS_SHOW", payload: newCars });
  }

  const carsToShow = show ? filteredTwo : filteredCars;
  console.log(carsToShow);

  return (
    <>
      {show && <Showcar />}
      <div id="cars-container">
        {!show && <Filter />}
        {carsToShow.map((car) => {
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
    </>
  );
};

export default Cars;
