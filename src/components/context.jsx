import { createContext, useEffect, useReducer } from "react";

// state
const initialState = {
  users: [],
  cars: [],
  filteredCars: [],
  filteredTwo: [],
  reviews: {},
  selectedCar: {},
  showCar: false,
  filters: {
    name: "",
    make: "",
    model: "",
    minYear: null,
    maxYear: null,
    minPrice: null,
    maxPrice: null,
  },
};

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case "GET_CARS":
      return { ...state, cars: action.payload };
    case "SHOW_CAR":
      return { ...state, selectedCar: action.payload };
    case "FILTER_CARS_SHOW":
      return { ...state, filteredTwo: action.payload };
    case "SHOW_CAR_BOOL":
      return { ...state, showCar: action.payload };
    case "FILTER_CARS":
      return {
        ...state,
        filters: action.payload,
        filteredCars: filtercars(state.cars, action.payload),
      };
    case "DELETE_CAR":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
        filteredCars: state.filteredCars.filter(
          (car) => car.id !== action.payload
        ),
        selectedCar: {},
        showCar: false,
      };
    default:
      return state;
  }
}

function filtercars(cars, filters) {
  return cars.filter((car) => {
    // console.log(car)
    if (
      filters.name &&
      !car.model.toLowerCase().includes(filters.name.toLowerCase())
    ) {
      return false;
    }
    if (
      filters.make &&
      car.brand.toLowerCase() !== filters.make.toLowerCase()
    ) {
      return false;
    }
    if (
      filters.model &&
      car.model.toLowerCase() !== filters.model.toLowerCase()
    ) {
      return false;
    }
    if (filters.minYear && car.year < filters.minYear) {
      return false;
    }
    if (filters.maxYear && car.year > filters.maxYear) {
      return false;
    }
    if (filters.minPrice && car.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && car.price > filters.maxPrice) {
      return false;
    }
    return true;
  });
}

// create context jj
const ProjectContext = createContext(initialState);

// context provider
function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://volatyl-imports.onrender.com/cars")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_CARS", payload: data }));
  }, []);

  useEffect(() => {
    dispatch({ type: "FILTER_CARS", payload: state.filters });
  }, [state.cars, state.filters]);

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}

export { ProjectContext, ProjectProvider };
