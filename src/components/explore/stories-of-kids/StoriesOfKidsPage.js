import stories_of_kids_data from "../../../resources/stories_of_kids_data";
import SleekPageHeader from "../../utility/SleekPageHeader";
import StoriesOfKidsCards from "./StoriesOfKidsCards";

export default function StoriesOfKidsPage({ lang }) {
  return (
    <div className="container my-5">
      <SleekPageHeader
        title={stories_of_kids_data[lang].title}
        subtitle={stories_of_kids_data[lang].subtitle}
      />
      <StoriesOfKidsCards
        stories_of_kids_data={stories_of_kids_data[lang].collection}
      />
    </div>
  );
}
