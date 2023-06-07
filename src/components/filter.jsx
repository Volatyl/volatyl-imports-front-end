import React from "react";

const Filter = () => {
  return (
    <div>
      <form className="filter-card">
        <label htmlFor="model">Name</label>
        <br />
        <input type="text" placeholder="Vehicle name" />
        <br />
        <select name="make" id="make">
          <option value="Make" selected>
            Make
          </option>
          <option value="Toyota">Toyota</option>
          <option value="Audi">Audi</option>
        </select>
        <select name="model" id="make">
          <option value="Model" selected>
            Model
          </option>
          <option value="Toyota">Toyota</option>
          <option value="Audi">Audi</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
