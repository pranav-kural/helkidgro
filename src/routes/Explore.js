import { useContext } from "react";
import { LanguageContext } from "../app/LanguageContext";
import ExplorePage from "../components/explore/ExplorePage";

function Explore() {
  const lang = useContext(LanguageContext);

  return <ExplorePage lang={lang} />;
}

export default Explore;
