import "../../styles/explore.css";
import ArtworkPage from "./artwork/ArtworkPage";
import NonProfitsPage from "./non-profits/NonProfitsPage";
import StoriesOfKidsPage from "./stories-of-kids/StoriesOfKidsPage";
import explore_data from "../../resources/explore_data";
import { Link } from "react-router-dom";

export default function ExplorePage({ lang }) {
  return (
    <div className="container">
      <h5 className="fs-5 text-center mt-5">{explore_data[lang].subtitle}</h5>
      <div className="pt-0 mt-0 text-center">
        <ArtworkPage lang={lang} />
        <Link to="artwork" className="home-link">
          see more
        </Link>
      </div>
      <div className="pt-3 text-center">
        <NonProfitsPage lang={lang} />
        <Link to="non-profits" className="home-link">
          see more
        </Link>
      </div>
      <div className="py-3 text-center">
        <StoriesOfKidsPage lang={lang} />
        <Link to="stories-of-kids" className="home-link">
          see more
        </Link>
      </div>
    </div>
  );
}
