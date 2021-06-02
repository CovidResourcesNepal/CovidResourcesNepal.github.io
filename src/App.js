// Import bootstrap components 
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// Import stylesheets
// import 'bootstrap/dist/css/bootstrap.min.css';

import './style.scss';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Landing section  */}
      <Container className="section Homepage-bg">

        <div className="top-hero">
          <h1 id="hero-text">COVID RESOURCES NEPAL</h1>
          <p id="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <Row>
          <Col>
            <Button variant="primary" size="lg">Donations</Button> 
          </Col>
          <Col>
            <Button variant="primary" size="lg">Resources</Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg">Vaccine Petition</Button>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>

      {/* Help section  */}
      <Container className="section Homepage-help" fluid>
        <h1 className="section-header">How you can help</h1>

        <Row className="justify-content-around align-items-center">
          <Col sm={12} md={6} lg={5}>
            <Card body className="help-card">
              <h3>Donate</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Enim neque volutpat ac tincidunt vitae semper quis. 
              Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. 
              </p>
              <Button variant="outline-primary">Donate</Button>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={5}>
            <Card body className="help-card">
              <h3>Add More Resources</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Enim neque volutpat ac tincidunt vitae semper quis. 
              Nunc congue nisi vitae suscipit tellus mauris a diam maecenas.
              </p>
              <Button variant="outline-primary">Add Resource</Button>
            </Card>
          </Col> 
        </Row>
      </Container>

      {/* About Us Section */}
      <Container className="section Homepage-about">
        <h1 className="section-header">About us</h1>

        <div className="Homepage-about-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Enim neque volutpat ac tincidunt vitae semper quis. 
        Nunc congue nisi vitae suscipit tellus mauris a diam maecenas.
        Facilisis gravida neque convallis a cras. Lorem ipsum dolor sit amet.
        Tristique senectus et netus et malesuada fames. Lectus quam id 
        leo in vitae. Convallis aenean et tortor at risus. Imperdiet nulla
        malesuada pellentesque elit. Mollis nunc sed id semper risus in
        hendrerit gravida rutrum. Pretium fusce id velit ut tortor pretium.
        </div>
      </Container>

      {/* Footer  */}
      <footer className="Footer">
        <Container>
          <Row className="justify-content-between">
            <Col>
              &copy; Covid Resources Nepal
            </Col>
            <Col>
              Contact: covidresourcesnepal@gmail.com
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
