import about_data from "../resources/about_data";
import InformationImageSection from "./utility/InformationImageSection";
import "../styles/about.css";
import SleekPageHeader from "./utility/SleekPageHeader";

export default function AboutPage({ lang }) {
  return (
    <div className="container my-5" role="main">
      <SleekPageHeader
        title={about_data[lang].title}
        subtitle={about_data[lang].subtitle}
      />
      <InformationImageSection data={about_data[lang]} />
    </div>
  );
}
