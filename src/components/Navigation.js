import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ setCurrentPage }) {
  return (
    <Navbar bg="light" data-bs-theme="light">
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
            // className="active"
            onClick={(e) => setCurrentPage(0)}
            // aria-current="page"
          >
            Home
          </Nav.Link>
          <Nav.Link href="#explore" onClick={(e) => setCurrentPage(1)}>
            Explore
          </Nav.Link>
          <Nav.Link href="#about" onClick={(e) => setCurrentPage(2)}>
            About
          </Nav.Link>
          <Nav.Link href="#contact" onClick={(e) => setCurrentPage(3)}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
