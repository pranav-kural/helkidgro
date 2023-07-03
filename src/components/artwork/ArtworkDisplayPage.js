import artwork_display_data from "../../resources/artwork_display_data";

export default function ArtworkDisplayPage({ lang }) {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src="/assets/images/artworks/cat_art.jpg"
            alt="Art by a kid"
            width="80%"
          />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="px-sm-0 px-md-3 px-xl-4 px-xxl-5">
            <h1 id="home-art-is-the-way-slogan">
              {artwork_display_data[lang].artwork_heading}
            </h1>
            <p className="home-landing-description">
              {artwork_display_data[lang].artwork_desc}
            </p>
            <p className="home-landing-description">
              {artwork_display_data[lang].artwork_artist}
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <button
                variant="primary"
                type="submit"
                className="btn bg-color-primary text-color-white bg-color-primary-on-hover mx-3 my-4"
              >
                {artwork_display_data[lang].donate}
              </button>
              <button
                variant="primary"
                type="submit"
                className="btn bg-color-primary text-color-white bg-color-primary-on-hover"
              >
                {artwork_display_data[lang].order_product}
              </button>
            </div>
            <span className="text-muted">
              {artwork_display_data[lang].order_disclaimer}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
