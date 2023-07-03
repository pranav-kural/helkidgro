import navigation_data from "../resources/navigation_data";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";

import "../styles/navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation({ lang, setLang }) {
  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];

  return (
    <div className="container">
      <Navbar data-bs-theme="light">
        <Container>
          <Link to="/" className="navbar-brand">
            <span id="nav-logo" className="text-color-primary">
              Helkidgro
            </span>
            <br />
            <span id="nav-logo-slogan">
              <span>
                <span className="text-color-primary">Hel</span>p{" "}
              </span>
              <span>
                <span className="text-color-primary">kid</span>s{" "}
              </span>
              <span>
                <span className="text-color-primary">gro</span>w
              </span>
            </span>
          </Link>
          <Nav className="justify-content-end">
            <Link
              to="/"
              className={`nav-link ${currentPage === "" ? "active" : ""}`}
            >
              {navigation_data[lang].home}
            </Link>
            <Link
              to="explore"
              id="nav-explore-link"
              className={`nav-link ${
                currentPage === "explore" ? "active" : ""
              }`}
            >
              {navigation_data[lang].explore}
            </Link>
            <NavDropdown title="">
              <Link
                to="explore/artwork"
                className={`dropdown-item ${
                  currentPage === "explore" ? "active" : ""
                }`}
              >
                {navigation_data[lang].artwork}
              </Link>
              <Link
                to="explore/non-profits"
                className={`dropdown-item ${
                  currentPage === "explore" ? "active" : ""
                }`}
              >
                {navigation_data[lang].non_profits}
              </Link>
              <Link
                to="explore/stories-of-kids"
                className={`dropdown-item ${
                  currentPage === "explore" ? "active" : ""
                }`}
              >
                {navigation_data[lang].stories_of_kids}
              </Link>
            </NavDropdown>
            <Link
              to="about"
              className={`nav-link ${currentPage === "about" ? "active" : ""}`}
            >
              {navigation_data[lang].about}
            </Link>
            <Link
              to="contact"
              className={`nav-link ${
                currentPage === "contact" ? "active" : ""
              }`}
            >
              {navigation_data[lang].contact}
            </Link>
          </Nav>
        </Container>
        <div
          id="nav-language-selector"
          className="d-flex align-items-center justify-content-center"
        >
          <span
            className={`mx-2 ${lang === "en" ? "active" : ""}`}
            onClick={(e) => setLang("en")}
          >
            en
          </span>
          <div className="vr"></div>
          <span
            className={`mx-2 ${lang === "fr" ? "active" : ""}`}
            onClick={(e) => setLang("fr")}
          >
            fr
          </span>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
