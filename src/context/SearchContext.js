import React, { useReducer } from "react";
// const { createContext } = require('react');
// export const SearchContext = createContext();
// OR
export const SearchContext = React.createContext();

export const keywordReducer = (state, action) => {
  switch (action.type) {
    case "search":
      return { value: action.value };

    default:
      return { value: state.value };
  }
};

export default function SearchContextProvider({ children }) {
  const [keyword, dispatch] = useReducer(keywordReducer, "");

  return (
    <SearchContext.Provider value={{ keyword, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}
