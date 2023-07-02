import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Navigation from "./components/Navigation";
import HomePage from "./routes/Home";
import Footer from "./components/Footer";
import { LanguageContext } from "./app/LanguageContext";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const [lang, setLang] = useState("en");
  return (
    <LanguageContext.Provider value={lang}>
      <Navigation lang={lang} setLang={setLang} />
      <RouterProvider router={router} />
      <Footer lang={lang} />
    </LanguageContext.Provider>
  );
}

export default App;
