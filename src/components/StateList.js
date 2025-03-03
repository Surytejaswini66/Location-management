import React, { useState } from "react";
import CityList from "./CityList";
import "../styles/StateList.css";

const StateList = ({ country, countries, setCountries, countryIndex }) => {
  const [newState, setNewState] = useState("");
  const [isInputExpanded, setInputExpanded] = useState(true); // State to manage visibility of city details

  const addState = () => {
    if (newState.trim()) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({ name: newState, cities: [] });
      setCountries(updatedCountries);
      setNewState("");
    }
  };

  const editState = (stateIndex) => {
    const newName = prompt(
      "Enter new state name:",
      countries[countryIndex].states[stateIndex].name
    );
    if (newName && window.confirm("Are you sure you want to update this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.splice(stateIndex, 1);
      setCountries(updatedCountries);
    }
  };

  const toggleInputExpand = () => {
    setInputExpanded(!isInputExpanded); // Toggle visibility of the city details for the state
  };

  return (
    <div className="state-container">
      <h3>{country.name}</h3>

      {/* Input Box with toggle button */}
      <div className="input-toggle">
        <button className="input-toggle-btn" onClick={toggleInputExpand}>
          {isInputExpanded ? "v" : "^"} {/* Toggle button for city details */}
        </button>

        <div className="state-input">
          <h4>{country.states.length ? country.states[country.states.length - 1].name : ""}</h4> {/* Display the most recently added state */}
          <button className="add-btn" onClick={addState}>
            + Add State
          </button>
        </div>
      </div>

      {/* List of states */}
      {isInputExpanded &&
        country.states.map((state, stateIndex) => (
          <div key={stateIndex} className="state-item">
            <div className="state-actions">
              <button className="edit-btn" onClick={() => editState(stateIndex)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteState(stateIndex)}>
                Delete
              </button>
            </div>

            {/* City List for the state */}
            <CityList
              countryIndex={countryIndex}
              state={state}
              countries={countries}
              setCountries={setCountries}
              stateIndex={stateIndex}
            />
          </div>
        ))}
    </div>
  );
};

export default StateList;
