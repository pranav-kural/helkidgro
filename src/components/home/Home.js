function Home({ setCurrentPage, setSubPage }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img src="./assets/fox_art.jpg" alt="Art by Hamid" width="80%" />
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-start">
          <div className="px-5">
            <h1 id="home-art-is-the-way-slogan">Art is the way.</h1>
            <p className="home-landing-description">
              Help kids living in underprivileged parts of the world by
              supporting their artwork.
            </p>
            <p className="home-landing-description">
              Explore artwork listed by non-profits trying to raise funds for
              education, healthcare and nutrition for children who need it the
              most.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <span
                className="home-link"
                onClick={(e) => setCurrentPage(1) && setSubPage(0)}
              >
                Artwork
              </span>
              <span
                className="home-link"
                onClick={(e) => setCurrentPage(1) && setSubPage(1)}
              >
                Non-profits
              </span>
              <span
                className="home-link"
                onClick={(e) => setCurrentPage(1) && setSubPage(2)}
              >
                Stories of Kids
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
