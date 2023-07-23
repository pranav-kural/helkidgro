import kids_data from "../../resources/kids_data";
import SleekPageHeader from "../utility/SleekPageHeader";
import StoriesOfKidsCards from "./StoriesOfKidsCards";

export default function StoriesOfKidsPage({ lang }) {
  return (
    <div className="container my-5">
      <SleekPageHeader
        title={kids_data[lang].title}
        subtitle={kids_data[lang].subtitle}
      />
      <StoriesOfKidsCards kids_data={kids_data[lang].collection} />
    </div>
  );
}
