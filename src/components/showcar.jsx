import React, { useContext } from "react";
import { ProjectContext } from "./context";

const Cars = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const car = state.selectedCar;

  console.log(car);

  const Showcar = () => {
    return <div>Show</div>;
  };
};
export default Showcar;
