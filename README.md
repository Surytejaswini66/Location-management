# Country, State, and City Management Application

## Project Overview

The **Country, State, and City Management** application is a ReactJS project that allows users to add, edit, and delete countries, states, and cities in a hierarchical structure. This project doesn't rely on external libraries or npm packages.

### Core Requirements:

- **Country Management**: Add, Edit, and Delete countries.
- **State Management**: Add, Edit, and Delete states for a specific country.
- **City Management**: Add, Edit, and Delete cities within a specific state.
- **Confirmation Dialogs**: Display confirmation alerts before performing delete or update actions.

---

## Functional Requirements

### 1. **Country Management**

- **Add a Country**: The user can add a new country with a button trigger, allowing countries to be added without any states initially.
- **Edit a Country**: Users can edit the name of an existing country. A confirmation dialog will appear before updating.
- **Delete a Country**: Users can delete a country and all its associated states and cities. A confirmation dialog will appear before deletion.

### 2. **State Management**

- **Add a State**: States can be added to specific countries. Users can either add them immediately or via an "edit" flow.
- **Edit a State**: Users can edit state names with a confirmation dialog before updating.
- **Delete a State**: Users can delete states and their associated cities, with a confirmation dialog before deletion.

### 3. **City Management**

- **Add a City**: Cities can be added under a specific state, either during the state creation or later via an "edit" flow.
- **Delete a City**: Users can delete cities under a specific state, with a confirmation dialog before deletion.

---

## User Interface (UI) Design

### 1. **Main Screen**

- Button to add a new country.
- List of countries with options to:
  - Edit the country name.
  - Delete the country.
  - View and manage states for the country.

### 2. **State Management Screen**

- For each country, a section with options to:
  - Add, Edit, and Delete states (with confirmation).

### 3. **City Management Screen**

- For each state, a section with options to:
  - Add and Delete cities (with confirmation).

---

## Component Breakdown

### 1. **App.js**

- Manages overall state for countries, states, and cities.
- Handles the logic for adding, updating, and deleting countries.
- Passes data and functions down to child components for state and city management.

### 2. **CountryList.js**

- Displays the list of countries.
- Allows users to add, edit, and delete countries.
- Displays the states associated with each country and allows management of those states.

### 3. **StateList.js**

- Displays the list of states for a specific country.
- Allows users to add, edit, and delete states.
- Provides links to manage cities within each state.

### 4. **CityList.js**

- Displays the list of cities for a specific state.
- Allows users to add or delete cities.
- Shows confirmation dialogs before deletion.

---

## Business Logic

### Adding New Entities:

- Users can add new countries, states, or cities via a prompt or form-based UI.
- Once added, the entity is incorporated into the data structure and the UI updates.

### Editing Existing Entities:

- Users can edit the name of any entity (country, state, or city).
- A confirmation dialog will appear before the update is executed, and the UI will reflect the change.

### Deleting Entities:

- A confirmation dialog is shown before deleting any entity.
- If confirmed, the entity is removed from the data structure, and any related states or cities are also removed.

---

## Implementation Details

### Technologies Used:

- **ReactJS**: For building the component-based UI.
- **JavaScript (ES6)**: For state management, event handling, and data manipulation.

### Development Flow:

1. Set up React App using `create-react-app`.
2. Develop components for countries, states, and cities.
3. Manage state using React’s `useState` hook.
4. Pass data and functions between components using props.
5. Use prompt and confirm dialogs for user interaction.

---

## Testing and Validation

### 1. **Functional Testing**

- Ensure that adding, editing, and deleting operations work as expected.
- Verify that confirmation dialogs appear before performing critical actions like delete and update.

### 2. **UI Testing**

- Ensure UI updates after any add, edit, or delete operation.
- Verify that the hierarchical structure (Country → State → City) is properly displayed and managed.

---

## Conclusion

This application allows users to manage countries, states, and cities in a structured manner. It includes basic functionalities like adding, editing, and deleting, with built-in confirmation dialogs to prevent accidental actions. The flow is simple, intuitive, and scalable.

---

## License

MIT License  
(See LICENSE file)
