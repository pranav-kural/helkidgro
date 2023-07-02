import home_landing_data from "../../resources/home_landing_data";

export default function HomeLanding({ lang }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img src="./assets/fox_art.jpg" alt="Art by Hamid" width="80%" />
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
              <span className="home-link">
                {home_landing_data[lang].artwork}
              </span>
              <span className="home-link">
                {home_landing_data[lang].non_profits}
              </span>
              <span className="home-link">
                {home_landing_data[lang].stories_of_kids}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
