import { Row } from "react-bootstrap";
import InfoCard from "../../utility/InfoCard";
import "../../../styles/info-card-primary.css";

export default function StoriesOfKidsCards({ stories_of_kids_data }) {
  function getData() {
    let data = {};
    for (let i = 0; i < stories_of_kids_data.length; i++) {
      data[i] = {
        title: stories_of_kids_data[i].name,
        description:
          stories_of_kids_data[i].age + ", " + stories_of_kids_data[i].country,
        secondary_text: stories_of_kids_data[i].description,
        image_src: stories_of_kids_data[i].image,
        image_alt: stories_of_kids_data[i].name,
        more_info_text: stories_of_kids_data[i].link_text,
        more_info_link: stories_of_kids_data[i].link,
        card_styles: "h-100 text-center info-card",
        card_image_styles: "info-card-image mb-3",
        card_title_styles: "text-style-raleway text-color-primary mb-2",
        card_description_styles: " mb-3",
        card_footer_styles: "bg-color-white text-center mt-4",
        card_more_info_link_styles:
          "info-card-footer-link text-decoration-underline",
      };
    }
    return data;
  }

  return (
    <Row xs={1} md={3} className="g-4">
      {/* For each element of array received from getData */}
      {Object.values(getData()).map((data, index) => (
        <InfoCard key={index} data={data} />
      ))}
    </Row>
  );
}
