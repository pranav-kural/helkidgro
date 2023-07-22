import { Link, useLocation } from "react-router-dom";
import artwork_data from "../../resources/artwork_data";
import kids_data from "../../resources/kids_data";
import artwork_display_data from "../../resources/artwork_display_data";

export default function ArtworkDisplayPage({ artwork_id_prop, lang }) {
  const location = useLocation();

  // if artwork_id_prop is not passed as prop, then retrieve it from the url
  const artwork_id = artwork_id_prop || location.pathname.split("/").pop();

  // function to get the object from "collection" array, where the field "artwork_art_id" matches the "artwork_id" passed as argument
  const getArtworkObject = (artwork_id) => {
    return artwork_data[lang].collection.find(
      (artwork) => artwork.artwork_art_id === artwork_id
    );
  };

  // function to get the object from "collection" array, where the field "id" matches the "artist_id" passed as argument
  const getArtistObject = (artist_id) => {
    return kids_data[lang].collection.find((artist) => artist.id === artist_id);
  };

  // if artwork object is empty, then retrieve the artwork from artwork data
  const artwork = getArtworkObject(artwork_id);

  // if artist object is empty, then retrieve the artist from kids data
  const artist = getArtistObject(artwork.artwork_artist_id);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src={artwork.artwork_image}
            alt={artwork.artwork_desc}
            width="80%"
          />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="px-sm-0 px-md-3 px-xl-4 px-xxl-5">
            <h1 id="home-art-is-the-way-slogan">{artwork.artwork_heading}</h1>
            <p className="home-landing-description">
              By
              <Link to={`/kid/${artist.id}`} className="artist-link ps-1">
                {artist.name}
              </Link>
              , {artist.age}, from {artist.country}
            </p>
            <p>{artwork.artwork_subtitle}</p>
            {artwork.artwork_desc.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}

            <div className="d-flex justify-content-center align-items-center">
              <button
                variant="primary"
                className="btn bg-color-primary text-color-white bg-color-primary-on-hover mx-3 my-4"
              >
                {artwork_display_data[lang].donate}
              </button>
              <button
                variant="primary"
                className="btn bg-color-primary text-color-white bg-color-primary-on-hover"
              >
                {artwork_display_data[lang].order_product}
              </button>
              <Link
                to="/explore/artwork"
                variant="primary"
                className="btn text-color-white bg-color-primary bg-color-primary-on-hover ms-3"
              >
                {artwork_display_data[lang].go_back}
              </Link>
            </div>
            <p className="text-size-small">
              {artwork_display_data[lang].disclaimer}:
            </p>
            <p className="text-muted text-size-small">
              {artwork_display_data[lang].donate_disclaimer}
            </p>
            <p className="text-muted text-size-small">
              {artwork_display_data[lang].order_disclaimer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
