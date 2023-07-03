import { Row } from "react-bootstrap";
import InfoCard from "../../utility/InfoCard";
import "../../../styles/info-card-primary.css";

export default function ArtworkCards({ artwork_data }) {
  function getData() {
    let data = {};
    for (let i = 0; i < artwork_data.length; i++) {
      data[i] = {
        title: artwork_data[i].artwork_heading,
        description: artwork_data[i].artwork_desc,
        secondary_text: artwork_data[i].artwork_artist,
        image_src: artwork_data[i].artwork_image,
        image_alt: artwork_data[i].artwork_heading,
        more_info_text: artwork_data[i].artwork_more_from_artist,
        more_info_link:
          "/explore/artwork/artist/" + artwork_data[i].artwork_artist_id,
        card_styles: "h-100 text-center info-card",
        card_image_styles: "info-card-image mb-3",
        card_title_styles: "text-style-aclonica text-color-primary",
        card_description_styles: "py-3",
        card_footer_styles: "bg-color-white text-center",
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
