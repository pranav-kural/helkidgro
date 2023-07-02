import { useContext } from "react";
import { LanguageContext } from "../app/LanguageContext";
import ArtworkPage from "../components/artwork/ArtworkPage";

function Artwork() {
  const lang = useContext(LanguageContext);

  return <ArtworkPage lang={lang} />;
}

export default Artwork;
