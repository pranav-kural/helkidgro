import artwork_data from "../../../resources/artwork_data";
import ArtworkCards from "../../artwork/ArtworkCards";

export default function ArtworkPage({ lang }) {
  return (
    <div className="container my-5">
      <div className="d-flex flex-column justify-content-center align-items-center mb-5">
        <h1 id="about-who-are-we-slogan">{artwork_data[lang].title}</h1>
        <p className="text-style-nunito">{artwork_data[lang].subtitle}</p>
      </div>
      <ArtworkCards
        artwork_data={artwork_data[lang].collection}
        featured_artwork_ids={artwork_data[lang].featured_artwork_ids}
      />
    </div>
  );
}
