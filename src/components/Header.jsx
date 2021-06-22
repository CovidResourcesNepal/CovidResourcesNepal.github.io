import {
  Container,
  Nav,
  Navbar,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap'
import { Link } from "react-router-dom";

function Header({changeLng, lng}) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="site-navbar" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Covid Resources Nepal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <ToggleButtonGroup type="radio" defaultValue={lng==="en" ? 1 : 2} name="options" className="language-tog">
              <ToggleButton value={1} id="en" variant="outline-secondary" onClick={() => changeLng("en")}>
                en
              </ToggleButton>
              <ToggleButton value={2} id="np" variant="outline-secondary" onClick={() => changeLng("np")}>
                np
              </ToggleButton>
            </ToggleButtonGroup>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;