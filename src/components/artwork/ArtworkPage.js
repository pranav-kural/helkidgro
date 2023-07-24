import artwork_data from "../../resources/artwork_data";
import ArtworkCards from "./ArtworkCards";
import ArtworkFilter from "./ArtworkFilter";
import { useState } from "react";
import "../../styles/artwork.css";

export default function ArtworkPage({ lang }) {
  const [artwork_results, setArtworkResults] = useState(
    artwork_data[lang].collection
  );

  console.log("artwork_results", artwork_results);

  return (
    <div className="container d-flex flex-row my-5">
      <ArtworkFilter
        lang={lang}
        artwork_results={artwork_results}
        setArtworkResults={setArtworkResults}
      />
      <div className="d-flex flex-column justify-content-start align-items-center mb-5 w-100">
        <h1 id="about-who-are-we-slogan">{artwork_data[lang].title}</h1>
        <p className="text-style-nunito">{artwork_data[lang].subtitle}</p>
        <ArtworkCards artwork_data={artwork_results} />
      </div>
    </div>
  );
}
