import React, { createContext, useContext, useReducer } from "react";

// Prepares a Data Layer
export const StateContext = createContext();

// Wrap our app and provide data layer to every components in the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull info from data Layer
export const useStateValue = () => useContext(StateContext);
