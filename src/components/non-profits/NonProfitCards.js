import { Row } from "react-bootstrap";
import InfoCard from "../utility/InfoCard";
import "../../styles/info-card-primary.css";

export default function NonProfitCards({
  non_profits_data,
  featured_non_profits_ids = [],
}) {
  function getData() {
    // if featured_non_profits_ids is empty, then return all non-profits
    return featured_non_profits_ids.length === 0
      ? getAllNonProfits()
      : getFeaturedNonProfits();
  }

  function getFeaturedNonProfits() {
    let data = {};
    for (let i = 0; i < featured_non_profits_ids.length; i++) {
      data[i] = getNonProfitObject(
        non_profits_data,
        featured_non_profits_ids[i]
      );
    }
    return data;
  }

  function getAllNonProfits() {
    let data = {};
    for (let i = 0; i < non_profits_data.length; i++) {
      data[i] = getNonProfitObject(non_profits_data, i);
    }
    return data;
  }

  function getNonProfitObject(non_profits_data, i) {
    return {
      title: non_profits_data[i].name,
      description: non_profits_data[i].short_desc,
      secondary_text:
        non_profits_data[i].donations_received_title +
        " " +
        non_profits_data[i].donations_received,
      image_src: non_profits_data[i].image,
      image_alt: non_profits_data[i].name,
      more_info_text: non_profits_data[i].link,
      more_info_link: non_profits_data[i].link,
      card_styles: "h-100 text-center info-card",
      card_image_styles: "info-card-image mb-3",
      card_title_styles: "text-style-raleway text-color-primary mb-5",
      card_description_styles: "text-style-raleway mb-3",
      card_footer_styles: "bg-color-white text-center mt-4",
      card_more_info_link_styles:
        "info-card-footer-link text-decoration-underline",
      card_link: "/explore/non-profits/non-profit/" + non_profits_data[i].id,
    };
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
