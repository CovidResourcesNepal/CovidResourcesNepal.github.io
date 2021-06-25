import {
  Container,
  Nav,
  Navbar,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap'
import { Link } from "react-router-dom";

function Header({changeLng, lng, t}) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="site-navbar" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">{t('header.site-title')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/">{t('header.menu.home')}</Nav.Link>
            <Nav.Link as={Link} to="/about">{t('header.menu.about-us')}</Nav.Link>

          </Nav>
          {/* <Form.Control as="select" aria-label="Floating label select example" defaultValue={lng} size="sm" custom onChange={(e) => changeLng(e.target.value)}>
            <option value="en">English</option>
            <option value="np">Nepali</option>
          </Form.Control> */}
          <ToggleButtonGroup type="radio" defaultValue={lng.substring(0,2)} name="lng-select" size="sm" className="mx-2">
            <ToggleButton value="np" id="lang-np" variant="outline-secondary" onClick={() => changeLng("np")}>
              नेपाली
            </ToggleButton>
            <ToggleButton value="en" id="lang-en" variant="outline-secondary" onClick={() => changeLng("en")}>
              English
            </ToggleButton>
          </ToggleButtonGroup>
          {/* <DropdownButton variant="outline-light" id="language-selector" title="Select Language" size="sm" className="mx-2">
            <Dropdown.Item onClick={() => changeLng("np")}>Nepali</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLng("en")}>English</Dropdown.Item>
          </DropdownButton> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;