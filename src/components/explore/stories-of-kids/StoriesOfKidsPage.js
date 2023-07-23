import kids_data from "../../../resources/kids_data";
import StoriesOfKidsCards from "../../stories-of-kids/StoriesOfKidsCards";
import SleekPageHeader from "../../utility/SleekPageHeader";

export default function StoriesOfKidsPage({ lang }) {
  return (
    <div className="container my-5">
      <SleekPageHeader
        title={kids_data[lang].featured_title}
        subtitle={kids_data[lang].subtitle}
      />
      <StoriesOfKidsCards
        kids_data={kids_data[lang].collection}
        featured_kids_ids={kids_data[lang].featured_kids_ids}
      />
    </div>
  );
}
