import { Link, useLocation } from "react-router-dom";
import non_profits_data from "../../resources/non_profits_data";
import display_page_data from "../../resources/display_page_data";

export default function NonProfitDisplayPage({ nonprofit_id_prop, lang }) {
  const location = useLocation();

  // if nonprofit_id_prop is not passed as prop, then retrieve it from the url
  const nonprofit_id = nonprofit_id_prop || location.pathname.split("/").pop();

  // function to get the object from "collection" array, where the field "artwork_art_id" matches the "nonprofit_id" passed as argument
  const getNonProfitObject = (nonprofit_id) => {
    return non_profits_data[lang].collection.find(
      (nonprofit) => nonprofit.id === nonprofit_id
    );
  };

  const nonprofit = getNonProfitObject(nonprofit_id);

  // back link
  const go_back_link =
    location.state && location.state.go_back_link
      ? location.state.go_back_link
      : "/explore/non-profits";

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={nonprofit.img} alt={nonprofit.short_desc} width="80%" />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="px-sm-0 px-md-3 px-xl-4 px-xxl-5">
            <h1 id="home-art-is-the-way-slogan">{nonprofit.name}</h1>
            <p>{nonprofit.short_desc}</p>
            {nonprofit.desc.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}

            <div className="d-flex justify-content-center align-items-center">
              <button
                variant="primary"
                className="btn bg-color-primary text-color-white bg-color-primary-on-hover mx-3 my-4"
              >
                {display_page_data[lang].donate}
              </button>
              <Link
                to={go_back_link}
                variant="primary"
                className="btn text-color-white bg-color-primary bg-color-primary-on-hover ms-3"
              >
                {display_page_data[lang].go_back}
              </Link>
            </div>
            <p className="text-size-small">
              {display_page_data[lang].disclaimer}:
            </p>
            <p className="text-muted text-size-small">
              {display_page_data[lang].donate_disclaimer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
