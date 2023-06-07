import { createContext, useEffect, useReducer } from "react";

// state
const initailState = {
  users: {},
  cars: {},
  reviews: {},
  selectedCar: {},
};

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case "GET_CARS":
      return { ...state, cars: action.payload };
    case "SHOW-CAR":
      return { ...state, selectedCar: action.payload };
    default:
      return state;
  }
}

// create context
const ProjectContext = createContext(initailState);

// context provider
function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initailState);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/cars")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_CARS", payload: data }));
  }, []);
  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}

export { ProjectContext, ProjectProvider };
