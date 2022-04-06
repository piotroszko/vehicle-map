import React, { useState, useContext } from "react";

import "./Filter.css";
import { filterContext } from "./../../../../contexts/FilterContextProvider";

const Filter = () => {
  let filters = useContext(filterContext);
  const [available, setAvailable] = useState("");
  const [percent, setPercent] = useState(0);
  const filter = () => {
    if (filters.setAvailable) filters.setAvailable(available);
    if (filters.setBatteryLevelPct) filters.setBatteryLevelPct(percent);
  };
  const clearFilters = () => {
    setPercent(0);
    setAvailable("null");
    if (filters.setAvailable) filters.setAvailable("");
    if (filters.setBatteryLevelPct) filters.setBatteryLevelPct(0);
  };
  return (
    <div className="filter">
      <div className="filterDialog">
        <div className="available">
          <label> Dostępne: </label>
          <select
            onChange={(e) => setAvailable(e.target.value)}
            value={available}>
            <option value=""> </option>
            <option value="available">Dostępne</option>
            <option value="unavailable">Niedostępne</option>
          </select>
        </div>
        <div className="percent">
          <label> Minimalny poziom naładowania: </label>
          <div className="containerSlider">
            <input
              type="range"
              min="0"
              max="100"
              value={percent}
              onChange={(e) => {
                setPercent(Number(e.target.value));
              }}
              className="slider"
              id="myRange"></input>
            <p className={percent > 50 ? "left" : "right"}>
              {percent.toString() + "%"}
            </p>
          </div>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              filter();
            }}>
            {" "}
            Filtruj{" "}
          </button>
          <button
            onClick={() => {
              clearFilters();
            }}>
            {" "}
            Wyczyść{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
