import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ProjectContext } from "./context";

const Filter = () => {
  const { state, dispatch } = useContext(ProjectContext);
  const [filter, setFilter] = useState(state.filter);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const updatedFilter = { ...filter, [name]: value };
    setFilter(updatedFilter);
    dispatch({ type: "FILTER_CARS", payload: updatedFilter });
  }

  return (
    <div>
      <form className="filter-card">
        {/* Name and model filter */}
        <label htmlFor="model">Name</label>
        <br />
        <input
          type="text"
          placeholder="Vehicle name"
          name="name"
          className="text-input"
          onChange={handleChange}
        />
        <br />
        <select name="make" id="make" className="input" onChange={handleChange}>
          <option value="" defaultValue>
            Make
          </option>
          <option value="Toyota">Toyota</option>
          <option value="Audi">Audi</option>
        </select>
        <select
          name="model"
          id="make"
          className="input"
          onChange={handleChange}
        >
          <option value="" defaultValue>
            Model
          </option>
          <option value="Toyota">Toyota</option>
          <option value="Audi">Audi</option>
        </select>
        <br />
        {/* Year filter */}
        <label htmlFor="year">Year of manufacture</label>
        <br />
        <input
          type="text"
          placeholder="Min YOM"
          name="minYear"
          className="input"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Max YOM"
          name="maxYear"
          className="input"
          onChange={handleChange}
        />
        <br />
        {/* Price filter */}
        <label htmlFor="price">Price</label>
        <br />
        <input
          type="text"
          placeholder="Min price"
          name="minPrice"
          className="input"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Max price"
          name="maxPrice"
          className="input"
          onChange={handleChange}
        />
        {/* search button */}
        <div className="search-btn">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "rgb(215, 229, 224)" }}
          />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
