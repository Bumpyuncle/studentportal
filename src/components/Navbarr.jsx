import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">StudentPortal</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Start</Nav.Link>
          <Nav.Link as={Link} to="/courses">Kurser</Nav.Link>
          <Nav.Link as={Link} to="/news">Nyheter</Nav.Link>
          <Nav.Link as={Link} to="/register">Registrera</Nav.Link>
          <Nav.Link as={Link} to="/registered">Registrerade Kurser</Nav.Link>
        </Nav>
      </Container>
      <Nav.Link as={Link} to="/registered">
  Registrerade Kurser
</Nav.Link>

    </Navbar>
    
  );
}
