import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavReactB(props) {
  return (
    <Navbar className="bg-danger navbar-danger" expand="lg">
      <Navbar.Brand href="#home" style={{ color: "white" }}>
        Movies
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Peliculas</Nav.Link>
          <Nav.Link>Cortos</Nav.Link>
          <Nav.Link>Series</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
