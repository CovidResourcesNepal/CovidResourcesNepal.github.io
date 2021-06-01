// Import bootstrap components 
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Import stylesheets
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      {/* Landing section  */}
      <Container className="Container Homepage-bg" fluid>
        <h1>COVID RESOURCES NEPAL</h1>
        <p>
          A one liner here.
        </p>
        <br />

        <Row>
          <Col>
            <Button variant="danger" size="lg">Donations</Button> 
          </Col>
          <Col>
            <Button variant="danger" size="lg">Resources</Button>
          </Col>
        </Row>
      </Container>

      {/* Help section  */}
      <Container className="Container Homepage-help" fluid> 
        <h1>How can you help?</h1>
        <br />

        <Row>
          <Col>
            <Container className="Card-container">
              <h2>Donate</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Enim neque volutpat ac tincidunt vitae semper quis. 
              Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. 
              Facilisis gravida neque convallis a cras. Lorem ipsum dolor sit amet. 
              Tristique senectus et netus et malesuada fames.
              </p>
            </Container>
          </Col>
          <Col>
            <Container className="Card-container">
              <h2>More Resources</h2>
              <div className="Card-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Enim neque volutpat ac tincidunt vitae semper quis. 
              Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. 
              Facilisis gravida neque convallis a cras. Lorem ipsum dolor sit amet. 
              Tristique senectus et netus et malesuada fames.
              </div>
            </Container>
          </Col> 
        </Row>
      </Container>

      {/* About Us Section */}
      <Container className="Container Homepage-about" fluid>
        <h1>About us</h1>
        <br />
        <br />

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
        Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. 
        Tortor posuere ac ut consequat semper viverra nam libero justo.
        Felis bibendum ut tristique et egestas. Congue nisi vitae suscipit
        tellus mauris. Integer enim neque volutpat ac tincidunt vitae.
        Justo donec enim diam vulputate ut pharetra sit amet aliquam.
        In vitae turpis massa sed elementum. Sed libero enim sed faucibus.
        </div>
      </Container>

      {/* Footer  */}
      <Container className="Footer" fluid>
        <div className="container_footer">
          <font size="3">Covid Resources Nepal</font>
            email@gmail.com
        </div>
      </Container>
    </div>
  );
}

export default App;
