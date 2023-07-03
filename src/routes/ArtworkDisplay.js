import { useContext } from "react";
import { LanguageContext } from "../app/LanguageContext";
import ArtworkDisplayPage from "../components/artwork/ArtworkDisplayPage";

export default function ArtworkDisplay() {
  const lang = useContext(LanguageContext);

  return <ArtworkDisplayPage lang={lang} />;
}
