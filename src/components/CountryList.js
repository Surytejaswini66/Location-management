import React, { useState } from "react";
import StateList from "./StateList";
import "../styles/CountryList.css";

const CountryList = ({ countries, setCountries }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isInputExpanded, setInputExpanded] = useState(false);  // New state for input box toggle

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  const editCountry = (index) => {
    const newName = prompt("Enter new country name:", countries[index].name);
    if (newName && window.confirm("Are you sure you want to update this country?")) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      const updatedCountries = [...countries];
      updatedCountries.splice(index, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="country-container">
      {countries.map((country, index) => (
        <div key={index} className="country-card fade-in">
          <div className="country-header">
            <button className="toggle-btn" onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? "v" : "^"}
            </button>
            <h2>{country.name}</h2>
          </div>

          {/* Input Box with toggle button on the left side */}
          <div className="input-toggle">
    
            {isInputExpanded && (
              <input
                type="text"
                placeholder="Enter Country name"
                value={country.name}
                onChange={(e) => {
                  const updatedCountries = [...countries];
                  updatedCountries[index].name = e.target.value;
                  setCountries(updatedCountries);
                }}
              />
            )}
          </div>

          {/* Country Content */}
          {expandedIndex === index && (
            <div className="country-content">
              <div className="buttons">
                <button className="edit-btn" onClick={() => editCountry(index)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteCountry(index)}>Delete</button>
              </div>
              <StateList country={country} countries={countries} setCountries={setCountries} countryIndex={index} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountryList;
