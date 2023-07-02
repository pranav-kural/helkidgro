import navigation_data from "../resources/navigation_data";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";

import "../styles/navigation.css";

function Navigation({ lang, setLang }) {
  return (
    <Navbar data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
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
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link
            href="#home"
            // className="active"
            // aria-current="page"
          >
            {navigation_data[lang].home}
          </Nav.Link>
          <NavDropdown title={navigation_data[lang].explore}>
            <NavDropdown.Item href="#artwork">
              {navigation_data[lang].artwork}
            </NavDropdown.Item>
            <NavDropdown.Item href="#n">
              {navigation_data[lang].non_profits}
            </NavDropdown.Item>
            <NavDropdown.Item href="#s">
              {navigation_data[lang].stories_of_kids}
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about">{navigation_data[lang].about}</Nav.Link>
          <Nav.Link href="#contact">{navigation_data[lang].contact}</Nav.Link>
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
  );
}

export default Navigation;
