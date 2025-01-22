import { createContext, useReducer } from "react";

export const CitiesContext = createContext();

const initialState = {
  cities: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };

    case "REMOVE_CITY":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const CitiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CitiesContext.Provider value={{ state, dispatch }}>
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;
