import { useContext } from "react";
import { LanguageContext } from "../app/LanguageContext";
import NonProfitsPage from "../components/non-profits/NonProfitsPage";

function NonProfits() {
  const lang = useContext(LanguageContext);

  return <NonProfitsPage lang={lang} />;
}

export default NonProfits;
