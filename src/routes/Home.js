import { useContext } from "react";
import { LanguageContext } from "../app/LanguageContext";
import HomeItWorks from "../components/home/HowItWorks";
import "../styles/home.css";
import HomeLanding from "../components/home/HomeLanding";

function HomePage() {
  const lang = useContext(LanguageContext);

  return (
    <>
      <HomeLanding lang={lang} />
      <HomeItWorks lang={lang} />
    </>
  );
}

export default HomePage;
