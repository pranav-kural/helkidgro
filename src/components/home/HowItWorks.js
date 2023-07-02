import how_it_works_data from "../../resources/how_it_works_data";
import InformationImageSection from "../utility/InformationImageSection";

export default function HowItWorks({ lang }) {
  const data = {
    section_first_heading: how_it_works_data[lang].section_first_heading,
    section_first_image: "./assets/image_sample.png",
    section_second_heading: how_it_works_data[lang].section_second_heading,
    section_second_image: "./assets/image_sample.png",
    section_third_heading: how_it_works_data[lang].section_third_heading,
    section_third_image: "./assets/image_sample.png",
  };

  return (
    <div className="container my-5">
      <h1 className="text-center border-bottom text-color-primary text-style-nunito pt-3">
        {how_it_works_data[lang].title}
      </h1>
      <InformationImageSection data={data} />
    </div>
  );
}
