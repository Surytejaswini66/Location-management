import React, { useState } from "react";
import CountryList from "./components/CountryList";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");
  const [isInputExpanded, setInputExpanded] = useState(true); // State to manage country list visibility

  const addCountry = () => {
    if (newCountry.trim()) {
      setCountries([...countries, { name: newCountry, states: [] }]);
      setNewCountry("");
    }
  };

  const toggleInputExpand = () => {
    setInputExpanded(!isInputExpanded); // Toggle visibility of the country list
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Location Management</h1>

      {/* Input Box and Add Country Button (Always visible) */}
      <div className="input-toggle">
        <button className="input-toggle-btn" onClick={toggleInputExpand}>
          {isInputExpanded ? "v" : "^"} {/* Toggle button for country list */}
        </button>

        <div className="country-input">
          <input
            type="text"
            placeholder="Enter country name"
            value={newCountry}
            onChange={(e) => setNewCountry(e.target.value)}
          />
          <button className="add-btn" onClick={addCountry}>
            + Add Country
          </button>
        </div>
      </div>

      {/* List of countries (Toggled visibility) */}
      {isInputExpanded && <CountryList countries={countries} setCountries={setCountries} />}
    </div>
  );
};

export default App;
