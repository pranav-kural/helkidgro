import { Link, useLocation } from "react-router-dom";
import kids_data from "../../resources/kids_data";
import display_page_data from "../../resources/display_page_data";

export default function SOKidDisplayPage({ kid_id_prop, lang }) {
  const location = useLocation();

  // if kid_id_prop is not passed as prop, then retrieve it from the url
  const kid_id = kid_id_prop || location.pathname.split("/").pop();

  // function to get the object from "collection" array, where the field "id" matches the "kid_id" passed as argument
  const getKidObject = (kid_id) => {
    return kids_data[lang].collection.find((kid) => kid.id === kid_id);
  };

  const kid = getKidObject(kid_id);

  // back link
  const go_back_link =
    location.state && location.state.go_back_link
      ? location.state.go_back_link
      : "/explore/stories-of-kids";

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={kid.img} alt={kid.short_desc} width="80%" />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="px-sm-0 px-md-3 px-xl-4 px-xxl-5">
            <h1 id="home-art-is-the-way-slogan">{kid.name}</h1>
            <p className="home-landing-description">{kid.short_desc}</p>
            {kid.desc.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
            <p>
              NGO:{" "}
              <Link
                to={`/explore/non-profits/non-profit/${kid.ngo_id}`}
                state={{
                  go_back_link: `/explore/stories-of-kids/kid/${kid.id}`,
                }}
                className="home-link"
              >
                {kid.ngo_name}
              </Link>
            </p>
            <p className="mt-5">
              <Link
                to="/explore/artwork"
                state={{
                  artist_id: kid.id,
                }}
                className="text-color-primary home-link text-bold-on-hover"
              >
                Explore artwork by {kid.name}
              </Link>
            </p>
            <Link
              to={go_back_link}
              variant="primary"
              className="btn text-color-white bg-color-primary bg-color-primary-on-hover mt-5"
            >
              {display_page_data[lang].go_back}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
