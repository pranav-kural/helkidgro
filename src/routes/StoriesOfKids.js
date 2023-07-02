import { useContext } from "react";
import { LanguageContext } from "../app/LanguageContext";
import StoriesOfKidsPage from "../components/stories-of-kids/StoriesOfKidsPage";

function StoriesOfKids() {
  const lang = useContext(LanguageContext);

  return <StoriesOfKidsPage lang={lang} />;
}

export default StoriesOfKids;
