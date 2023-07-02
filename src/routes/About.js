import { useContext } from "react";
import { LanguageContext } from "../app/LanguageContext";
import AboutPage from "../components/AboutPage";

function About() {
  const lang = useContext(LanguageContext);

  return <AboutPage lang={lang} />;
}

export default About;
