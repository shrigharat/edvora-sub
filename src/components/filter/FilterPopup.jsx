import React, { useContext, useState } from "react";
import { RidesContext } from "../../contexts/ridesContext";
import "./FilterPopup.styles.scss";

const FilterPopup = () => {
  const { states, cities } = useContext(RidesContext);
  const [selectedState, setSelectedState] = useState(undefined);
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div className="filter-container">
      <span className="filter-title">Filters</span>
      <div className="state-select">
        <select
          placeholder="Select City"
          name=""
          id=""
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {Object.keys(states).map((key) => (
            <option value={key}>{key}</option>
          ))}
        </select>
      </div>
      <div className="city-select">
        <select name="" id="" placeholder="Select City">
          {!selectedState
            ? cities.map((city) => <option value={city}>{city}</option>)
            : states &&
              states[selectedState].map((city) => (
                <option value={city}>{city}</option>
              ))}
        </select>
      </div>
    </div>
  );
};

export default FilterPopup;
