import { Row } from "react-bootstrap";
import InfoCard from "../utility/InfoCard";
import "../../styles/info-card-primary.css";

export default function StoriesOfKidsCards({
  kids_data,
  featured_kids_ids = [],
}) {
  console.log("featured_kids_ids", featured_kids_ids);

  function getData() {
    // if featured_kids_ids is empty, then return all kids
    return featured_kids_ids.length === 0 ? getAllKids() : getFeaturedKids();
  }

  function getAllKids() {
    let data = {};
    for (let i = 0; i < kids_data.length; i++) {
      data[i] = getKidObject(kids_data, i);
    }
    return data;
  }

  function getFeaturedKids() {
    let data = {};
    for (let i = 0; i < featured_kids_ids.length; i++) {
      data[i] = getKidObject(kids_data, featured_kids_ids[i]);
    }
    return data;
  }

  function getKidObject(kids_data, i) {
    return {
      title: kids_data[i].name,
      description: kids_data[i].age + ", " + kids_data[i].country,
      secondary_text: kids_data[i].desc[0],
      image_src: kids_data[i].img,
      image_alt: kids_data[i].name,
      more_info_text: `Learn more about ${kids_data[i].name}`,
      more_info_link: `/explore/stories-of-kids/kid/${kids_data[i].id}`,
      card_styles: "h-100 text-center info-card",
      card_image_styles: "info-card-image mb-3",
      card_title_styles: "text-style-raleway text-color-primary mb-2",
      card_description_styles: " mb-3",
      card_footer_styles: "bg-color-white text-center mt-4",
      card_more_info_link_styles:
        "info-card-footer-link text-decoration-underline",
      card_link: `/explore/stories-of-kids/kid/${kids_data[i].id}`,
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
