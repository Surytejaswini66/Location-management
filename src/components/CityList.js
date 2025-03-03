import React, { useState } from "react";
import "../styles/CityList.css";

const CityList = ({ state, countries, setCountries, countryIndex, stateIndex }) => {
  const [isInputExpanded, setInputExpanded] = useState(true); // State to manage input visibility

  const addCity = () => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.push(cityName);
      setCountries(updatedCountries);
    }
  };

  const editCity = (cityIndex) => {
    const newName = prompt(
      "Enter new city name:",
      countries[countryIndex].states[stateIndex].cities[cityIndex]
    );
    if (newName && window.confirm("Are you sure you want to update this city?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities[cityIndex] = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.splice(cityIndex, 1);
      setCountries(updatedCountries);
    }
  };

  const toggleInputExpand = () => {
    setInputExpanded(!isInputExpanded); // Toggle visibility of the input box
  };

  return (
    <div className="city-container">
      {/* Input Box with toggle button for adding city */}
      <div className="input-toggle">
        <button className="input-toggle-btn" onClick={toggleInputExpand}>
          {isInputExpanded ? "v" : "^"} {/* Toggle button for city input */}
        </button>
        {isInputExpanded && (
          <button className="add-btn" onClick={addCity}>
            + Add City
          </button>
        )}
      </div>

      <ul>
        {state.cities.map((city, cityIndex) => (
          <li key={cityIndex} className="city-item fade-in">
            <div className="city-name">{city}</div>
            <div className="button-container">
              <button className="edit-btn" onClick={() => editCity(cityIndex)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteCity(cityIndex)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
