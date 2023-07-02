import { Link } from "react-router-dom";
import home_landing_data from "../../resources/home_landing_data";

export default function HomeLanding({ lang }) {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src="./assets/images/artworks/hands_art.jpg"
            alt="Art by Hamid"
            width="80%"
          />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-start">
          <div className="px-sm-0 px-md-3 px-xl-4 px-xxl-5">
            <h1 id="home-art-is-the-way-slogan">
              {home_landing_data[lang].title}
            </h1>
            <p className="home-landing-description">
              {home_landing_data[lang].description_line_1}
            </p>
            <p className="home-landing-description">
              {home_landing_data[lang].description_line_2}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/explore/artwork" className="home-link">
                {home_landing_data[lang].artwork}
              </Link>
              <Link to="/explore/non-profits" className="home-link">
                {home_landing_data[lang].non_profits}
              </Link>
              <Link to="/explore/stories-of-kids" className="home-link">
                {home_landing_data[lang].stories_of_kids}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
