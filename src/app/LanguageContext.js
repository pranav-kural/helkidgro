import { createContext, useState } from "react";

export const LanguageContext = createContext({
  lang: "en",
  setLanguage: () => {},
});

export const LanguageContextProvider = (props) => {
  const setLanguage = (language) => {
    setState({ ...state, language: language });
  };

  const initialState = {
    lang: "en",
    setLanguage: setLanguage,
  };

  const [state, setState] = useState(initialState);

  return (
    <LanguageContext.Provider value={state}>
      {props.children}
    </LanguageContext.Provider>
  );
};
