import { useContext } from "react";
import { LanguageContext } from "../app/LanguageContext";
import ContactPage from "../components/ContactPage";

export default function Contact() {
  const lang = useContext(LanguageContext);
  return <ContactPage lang={lang} />;
}
