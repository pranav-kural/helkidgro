import { useLocation } from "react-router-dom";
import artwork_data from "../../resources/artwork_data";
import ArtworkCards from "./ArtworkCards";

export default function ArtworkPage({ lang }) {
  const { state } = useLocation();
  const { artist_id } = state || {};
  console.log("artist_id", artist_id);

  return (
    <div className="container my-5">
      <div className="d-flex flex-column justify-content-center align-items-center mb-5">
        <div className="container mb-5">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="start typing to search for an artwork"
            className="search-artwork-input form-control mb-3"
          />
          <div className="container">
            <span className="fw-bold px-4">
              {artwork_data[lang].category_selection_heading}:
            </span>
            <span className="text-decoration-underline px-2 text-cursor-pointer-on-hover text-color-primary-on-hover">
              {artwork_data[lang].category_painting}
            </span>
            <span className="text-decoration-underline px-2 text-cursor-pointer-on-hover text-color-primary-on-hover">
              {artwork_data[lang].category_drawing}
            </span>
            <span className="text-decoration-underline px-2 text-cursor-pointer-on-hover text-color-primary-on-hover">
              {artwork_data[lang].category_abstract}
            </span>
            <span className="text-decoration-underline px-2 text-cursor-pointer-on-hover text-color-primary-on-hover">
              {artwork_data[lang].category_photography}
            </span>
            <span className="text-decoration-underline px-2 text-cursor-pointer-on-hover text-color-primary-on-hover">
              {artwork_data[lang].category_contemporary}
            </span>
            <span className="text-decoration-underline px-2 text-cursor-pointer-on-hover text-color-primary-on-hover">
              {artwork_data[lang].category_other}
            </span>
          </div>
        </div>
        <h1 id="about-who-are-we-slogan">{artwork_data[lang].title}</h1>
        <p className="text-style-nunito">{artwork_data[lang].subtitle}</p>
      </div>
      <ArtworkCards artwork_data={artwork_data[lang].collection} />
    </div>
  );
}
