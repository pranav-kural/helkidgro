import { Row } from "react-bootstrap";
import InfoCard from "../../utility/InfoCard";
import "../../../styles/info-card-primary.css";

export default function NonProfitCards({ non_profits_data }) {
  function getData() {
    let data = {};
    for (let i = 0; i < non_profits_data.length; i++) {
      data[i] = {
        title: non_profits_data[i].name,
        description: non_profits_data[i].description,
        secondary_text: "",
        image_src: non_profits_data[i].image,
        image_alt: non_profits_data[i].name,
        more_info_text: non_profits_data[i].link,
        more_info_link: non_profits_data[i].link,
        card_styles: "h-100 text-center info-card",
        card_image_styles: "info-card-image mb-3",
        card_title_styles: "text-style-raleway text-color-primary mb-5",
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
