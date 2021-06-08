import React from 'react'

// Import bootstrap components 
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  Modal,
  Nav,
  Navbar
} from 'react-bootstrap'
import TeamGallery from './components/TeamGallery'
import Resources from './components/Resources/Resources'
import { LinkContainer } from 'react-router-bootstrap'

// React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

// Stylesheets
import './style.scss';
import './App.css';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      team: {"core": [], "steering": []},
      resourceShow: false,
      disclaimerShow: false
    }
  }

  componentDidMount() {
    fetch('data/team.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then(data => this.setState({team: data}))
      .catch(error => console.log(error));
  }
  
  render() {
    const {resourceShow, disclaimerShow} = this.state;

    const homepageElement = (
    <div>
      {/* Landing section  */}
      <Container className="section Homepage-bg" fluid>

        <div className="top-hero">
          <h1 id="hero-text">COVID Resources for Nepal</h1>
          <p id="hero-subtitle">A common source for resources, donation campaigns, support systems, and Nepal’s response to COVID-19 in one place</p>
        </div>

        <Row>
          <Col>
            <LinkContainer to="/resources#fundraisers">
              <Button variant="primary" size="lg" target="_blank">
                  Fundraisers
              </Button>
            </LinkContainer>
            <div className="button-info">List of campaigns seeking donations</div>
          </Col>
          <Col>
            <LinkContainer to="/resources#resources">
              <Button variant="primary" size="lg" target="_blank">
                  Resources
              </Button>
            </LinkContainer>
            <div className="button-info">List of available resources <br/> (medical, food, mental health, others)</div>
          </Col>
          <Col>
            <Button variant="primary" size="lg" target="_blank"
              href="https://www.change.org/p/urge-us-government-to-send-emergency-covid-19-vaccine-humanitarian-aid-to-nepal">
                Vaccine Petition
            </Button>
            <div className="button-info">Link to sign a petition</div>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>

      {/* Help section  */}
      <Container className="section Homepage-help" fluid>
        <h1 className="section-header">How you can help</h1>

        <Row className="justify-content-around align-items-stretch help-cards-container">
          <Col sm={12} md={6} lg={4}>
            <Card body className="help-card">
              <h3>Donate</h3>
              <p>
                We have compiled a list of fundraisers trying to appeal to a larger community and allocate funds to 
                support Nepal in tackling and minimizing the effects of the Covid-19. These fundraisers are supporting 
                initiatives on the ground that are related to medical needs, food distribution, delivery of home isolation 
                kits among many others. We have tried to give a brief overview of each campaign. Please feel free to 
                scroll through and support these fundraisers to the best of your ability. Every donation counts, every 
                little effort adds up. 
              </p>
              <div className="spacer"></div>
              <div className="button-container">
                <LinkContainer to="/resources#fundraisers">
                  <Button variant="outline-primary" target="_blank">
                      Donate
                  </Button>
                </LinkContainer>
              </div>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card body className="help-card">
              <h3>Add to the Database</h3>
              <p>
                Our volunteers have worked day and night to compile the data that we have. However, we believe there are 
                many more resources, campaigns, and fundraisers that need to be listed alongside. If you know of one, whether 
                it be resources, campaigns or any support systems, please use the form below to let us know.
              </p>
              <div className="spacer"></div>
              <div className="button-container">
                <Button variant="outline-primary" target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScbwDZCkG8iiacpJb5rFBH71EC3wUExG_q-D2o_mAUpLlhHGQ/viewform">
                    Add Resource
                </Button>
              </div>
              <div className="button-container mt-3">
                <Button variant="outline-primary" target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScDVTkpMDasRZEMy7zk-ALjH4ARE8AZlR5inpIc8opPbMdIHg/viewform">
                    Suggest Changes
              </Button>
              </div>
            </Card>
          </Col> 
          <Col sm={12} md={6} lg={4}>
            <Card body className="help-card">
              <h3>Sign Vaccine Petition</h3>
              <p>
                Only about 4% of the population has received at least one dose of the Covid-19 vaccine and it is unlikely 
                Nepal will receive more vaccines from its primary source, India, in the near future provided the crisis India 
                itself is going through. So, countries like the US could really help fight this pandemic in Nepal by donating 
                vaccines to the Government of Nepal. This will forestall immeasurable devastation for the people of Nepal. 
                Please sign this petition organized by Nepal Rising to urge the US Department of State to support vaccine 
                donations to Nepal. 
              </p>
              <div className="spacer"></div>
              <div className="button-container">
              <Button variant="outline-primary" target="_blank"
                href="https://www.change.org/p/urge-us-government-to-send-emergency-covid-19-vaccine-humanitarian-aid-to-nepal">
                  Sign Petition
              </Button>
              </div>
            </Card>
          </Col> 
        </Row>
      </Container>
      </div>
    );

    const aboutElement = (
      <div> 
        {/* About Us Section */}
        <Container className="section Homepage-about pb-5">
          <h1 className="section-header">About us</h1>

          <div className="Homepage-about-paragraph">
            We are a group of Nepali students and young professionals trying to integrate all the resources dedicated to Nepal’s
            response to Covid-19 in one place. We hope that this platform can make the search for various types of resources and 
            impactful fundraisers effective, including those people/organizations that need to address emergency situations in 
            a short amount of time. 
          </div>
        </Container>

        <Container className="section homepage-team pt-0 pb-5">
          <h3 className="section-header">Core Team</h3>
          <TeamGallery members={this.state.team.core}/>
        </Container>

        <Container className="section homepage-team pt-0">
          <h3 className="section-header">Team Leads</h3>
          <TeamGallery members={this.state.team.steering}/>
        </Container>
      </div>
    );

    return (
      <div className="App">
        <Router>  
        {/* NavBar */}
          <Navbar bg="dark" variant="dark" expand="lg" id="site-navbar" fixed="top">
            <Container>
              <Navbar.Brand as={Link} to="/">Covid Resources Nepal</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                <Nav className="justify-content-end">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

            <Switch>
              <Route path="/about">
                <div>{aboutElement}</div>
              </Route>
              <Route path="/resources">
                <Resources/>
              </Route>
              <Route path="/">
              <div>{homepageElement}</div>
              </Route>
            </Switch>
        
        {/* Footer  */}
          <footer className="footer">
            <Container> 
              <Row className="justify-content-between">
                <Col xs={12} md={6} className="text-md-left">
                  <h5 className="footer-title">Covid Resources Nepal</h5>
                  <p>A common source for resources, donation campaigns, support systems, and Nepal’s response to COVID-19 in one place</p>
                  &copy; CovidResourcesNepal |&nbsp;
                  <span onClick={(e)=>this.setState({disclaimerShow:true})} className="btn-cursor">
                    Disclaimer
                  </span>
                  <br className="d-md-none"/>
                </Col>
                <Col xs={12} md={6} className="text-md-right">
                <h5 className="footer-title">Contact:</h5>
                  Email: <a href="mailto:covidresourcesnepal@gmail.com" target="_blank" rel="noreferrer">covidresourcesnepal@gmail.com</a>
                  
                  <div className="d-flex justify-content-center justify-content-md-end social-media-links">
                    <a href="https://www.instagram.com/covidresourcesnepal/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /> </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
        </Router>

        {/* Resource Modal */}
        <Modal show={resourceShow} onHide={(e)=>this.setState({resourceShow:false})} centered>
        <Modal.Header closeButton >
          <Modal.Title className="resources-title">Links to Resources</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Row>
              <Button href="https://docs.google.com/spreadsheets/d/16ynrRYS3Qg6dVRG7UdQ2Gp4OdBpQ7doGdiCIkXdG9-0/edit#gid=0"
              className="resource-buttons"
              target="_blank"
              variant="outline-primary">
                General Info on Covid-19
              </Button>
            </Row>
            <Row>
              <Button href="https://docs.google.com/spreadsheets/d/1MwqmhNEFfw_7b_BVYiTiQUHKAUxgx1jp3maTT5qqmo8/edit#gid=0"
              className="resource-buttons"
              target="_blank"
              variant="outline-primary">
                Helpline Resources
              </Button>
            </Row>
            <Row>
              <Button href="https://docs.google.com/spreadsheets/d/12gKTeQR5Ma7Fmw0JorVLjKyJZdp0V1ZxyArLQCcYyK0/edit#gid=0"
              className="resource-buttons"
              target="_blank"
              variant="outline-primary">
                Mental Health Resources
              </Button>
            </Row>
            <Row>
              <Button href="https://docs.google.com/spreadsheets/d/1S7JcDkfHdxu_iEZU5RklNT8buKCGv68vjetNKIg0nws/edit#gid=0"
              className="resource-buttons"
              target="_blank"
              variant="outline-primary">
                Food Resources
              </Button>
            </Row>
            <Row>
              <Button href="https://www.covidconnectnp.org/" 
              className="resource-buttons"
              target="_blank" 
              variant="outline-primary">
                Medical Resources
              </Button>
            </Row>       
        </Modal.Body>
        </Modal>

        {/* Disclaimer Modal */}
        <Modal show={disclaimerShow} onHide={(e)=>this.setState({disclaimerShow:false})} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Disclaimers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
          <li>
            Please note that the information curated here are gathered publicly and we do not own, operate or control the 
            helpline numbers or apps listed here. We try our best to verify the information but cannot make recommendations 
            or guarantee any advice you might receive from these sources. 
          </li>
          <li>
            If you are a professional or part of an organization offering services for free/at subsidized rates or know 
            someone who does and want to get added to this list, please use the "Add to our database" link on our website.
          </li>
          <li>
            We are continuously updating this list and if you have any information/suggestion that does not fall 
            under #2 above,  please email us at <a href="mailto:covidresourcesnepal@gmail.com" target="_blank" rel="noreferrer">covidresourcesnepal@gmail.com</a> with
            the subject line "Name of Category for the Information" For eg: "Suggestion: Food Resources"
          </li>
          </ol>
        </Modal.Body>
        </Modal>
      </div>
    );
  }
}

// export default App;
