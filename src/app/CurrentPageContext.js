import { createContext, useState } from "react";

export const CurrentPageContext = createContext({
  currentPage: "home",
  setCurrentPage: () => {},
});

export const CurrentPageContextProvider = (props) => {
  const setCurrentPage = (currentPage) => {
    setState({ ...state, currentPage: currentPage });
  };

  const initialState = {
    currentPage: "home",
    setCurrentPage: setCurrentPage,
  };

  const [state, setState] = useState(initialState);

  return (
    <CurrentPageContext.Provider value={state}>
      {props.children}
    </CurrentPageContext.Provider>
  );
};
