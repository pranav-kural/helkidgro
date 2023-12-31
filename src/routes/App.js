import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { LanguageContext } from "../app/LanguageContext";
import { Outlet } from "react-router-dom";
import { CurrentPageContextProvider } from "../app/CurrentPageContext";

function App({ lang, setLang, currentPage, setCurrentPage }) {
  return (
    <CurrentPageContextProvider value={currentPage}>
      <LanguageContext.Provider value={lang}>
        <Navigation
          lang={lang}
          setLang={setLang}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Outlet />
        <Footer lang={lang} />
      </LanguageContext.Provider>
    </CurrentPageContextProvider>
  );
}

export default App;
