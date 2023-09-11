import { createContext, useContext, useReducer } from "react";
import { stateReducer } from "./reducer";
export const searchContext = createContext();

export const useSearch = () => {
  return useContext(searchContext);
};

export const SearchProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(stateReducer, {
    q: "",
  });
  return (
    <searchContext.Provider value={{ appState, dispatch }}>
      {children}
    </searchContext.Provider>
  );
};
