import about_data from "../resources/about_data";
import InformationImageSection from "./utility/InformationImageSection";
import "../styles/about.css";

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
      <div className="d-flex flex-column justify-content-center align-items-center mb-5 border-bottom">
        <h1 id="about-who-are-we-slogan">{about_data[lang].title}</h1>
        <p className="text-style-nunito">{about_data[lang].subtitle}</p>
      </div>
      <InformationImageSection data={data} />
    </div>
  );
}
