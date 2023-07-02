import ExploreArtwork from "./ExploreArtwork";
import ExploreNonProfits from "./ExploreNonProfits";
import ExploreStoriesOfKids from "./ExploreStoriesOfKids";
import "../../styles/explore.css";

export default function ExplorePage({ lang }) {
  return (
    <div>
      <h1>Explore Page</h1>
      <ExploreArtwork lang={lang} />
      <ExploreNonProfits lang={lang} />
      <ExploreStoriesOfKids lang={lang} />
    </div>
  );
}
