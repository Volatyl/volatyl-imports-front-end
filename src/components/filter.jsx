import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  return (
    <div>
      <form className="filter-card">
        {/* Name and model filter */}
        <label htmlFor="model">Name</label>
        <br />
        <input type="text" placeholder="Vehicle name" className="text-input" />
        <br />
        <select name="make" id="make" className="input">
          <option value="Make" selected>
            Make
          </option>
          <option value="Toyota">Toyota</option>
          <option value="Audi">Audi</option>
        </select>
        <select name="model" id="make" className="input">
          <option value="Model" selected>
            Model
          </option>
          <option value="Toyota">Toyota</option>
          <option value="Audi">Audi</option>
        </select>
        <br />
        {/* Year filter */}
        <label htmlFor="year">Year of manufacture</label>
        <br />
        <input type="text" placeholder="Min YOM" className="input" />
        <input type="text" placeholder="Max YOM" className="input" />
        <br />
        {/* Price filter */}
        <label htmlFor="price">Price</label>
        <br />
        <input type="text" placeholder="Min price" className="input" />
        <input type="text" placeholder="Max price" className="input" />
        {/* search button */}
        <div className="search-btn">
          <FontAwesomeIcon icon={faSearch} style={{ color: "rgb(215, 229, 224)" }} />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
