import { Card, Col } from "react-bootstrap";

export default function InfoCard({ data }) {
  console.log("InfoCard", data);
  return (
    <Col>
      <Card className={data.card_styles}>
        <Card.Img
          variant="top"
          src={data.image_src}
          alt={data.image_alt}
          className={data.card_image_styles}
        />
        <Card.Body>
          <Card.Title className={data.card_title_styles}>
            {data.title}
          </Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Text className={data.card_description_styles}>
            {data.description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text className={data.card_secondary_text_styles}>
            {data.secondary_text}
          </Card.Text>
        </Card.Body>
        <Card.Footer className={data.card_footer_styles}>
          <Card.Link
            className={data.card_more_info_link_styles}
            href={data.more_info_link}
          >
            {data.more_info_text}
          </Card.Link>
        </Card.Footer>
      </Card>
    </Col>
  );
}
