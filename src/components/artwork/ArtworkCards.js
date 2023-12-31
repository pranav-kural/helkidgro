import { Container, Row } from "react-bootstrap";
import InfoCard from "../utility/InfoCard";
import "../../styles/info-card-primary.css";

export default function ArtworkCards({
  artwork_data,
  featured_artwork_ids = [],
}) {
  function getData() {
    // if featured_artwork_ids is empty, then return all artwork
    return featured_artwork_ids.length === 0
      ? getAllArtwork()
      : getFeaturedArtwork();
  }

  function getFeaturedArtwork() {
    let data = {};
    for (let i = 0; i < featured_artwork_ids.length; i++) {
      data[i] = getArtworkObject(artwork_data, featured_artwork_ids[i]);
    }
    return data;
  }

  function getAllArtwork() {
    let data = {};
    for (let i = 0; i < artwork_data.length; i++) {
      data[i] = getArtworkObject(artwork_data, i);
    }
    return data;
  }

  function getArtworkObject(artwork_data, i) {
    return {
      title: artwork_data[i].artwork_heading,
      description: artwork_data[i].artwork_subtitle,
      secondary_text: artwork_data[i].artwork_artist,
      image_src: artwork_data[i].artwork_image,
      image_alt: artwork_data[i].artwork_heading,
      more_info_text: artwork_data[i].artwork_more_from_artist,
      more_info_link:
        "/explore/artwork/artist/" + artwork_data[i].artwork_artist_id,
      card_container_styles: "artwork-card-container",
      card_styles: "h-100 text-center info-card",
      card_image_styles: "info-card-image mb-3",
      card_title_styles: "text-style-aclonica text-color-primary",
      card_description_styles: "py-3",
      card_secondary_text_styles: "text-muted mb-3",
      card_footer_styles: "bg-color-white text-center",
      card_more_info_link_styles:
        "info-card-footer-link text-decoration-underline",
      card_link: "/explore/artwork/art/" + artwork_data[i].artwork_art_id,
    };
  }

  return (
    <Container id="artwork-cards-container">
      {/* For each element of array received from getData */}
      {
        // if data is null, then display message saying no artwork found
        artwork_data.length === 0 ? (
          <Row className="text-center w-100 mt-5 fs-4">
            <p>Oops! No artwork found for selected criteria :(</p>
          </Row>
        ) : (
          Object.values(getData()).map((data, index) => (
            <InfoCard key={index} data={data} />
          ))
        )
      }
    </Container>
  );
}
