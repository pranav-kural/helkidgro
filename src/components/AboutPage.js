import about_data from "../resources/about_data";
import InformationImageSection from "./utility/InformationImageSection";
import "../styles/about.css";
import SleekPageHeader from "./utility/SleekPageHeader";

export default function AboutPage({ lang }) {
  const data = {
    section_first_heading: about_data[lang].section_first_heading,
    section_first_image: "./assets/image_sample.png",
    section_second_heading: about_data[lang].section_second_heading,
    section_second_image: "./assets/image_sample.png",
    section_third_heading: about_data[lang].section_third_heading,
    section_third_image: "./assets/image_sample.png",
  };

  return (
    <div className="container my-5">
      <SleekPageHeader
        title={about_data[lang].title}
        subtitle={about_data[lang].subtitle}
      />
      <InformationImageSection data={data} />
    </div>
  );
}
