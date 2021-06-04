import React from 'react'
// Import bootstrap components 
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import TeamGallery from './components/TeamGallery'

// Import stylesheets
// import 'bootstrap/dist/css/bootstrap.min.css';

import './style.scss';
import './App.css';
import { Modal, ListGroup } from 'react-bootstrap'

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
    return (
      <div className="App">

        {/* Landing section  */}
        <Container className="section Homepage-bg" fluid>

          <div className="top-hero">
            <h1 id="hero-text">COVID Resources for Nepal</h1>
            <p id="hero-subtitle">A common source for resources, donation campaigns, support systems, and Nepal’s response to COVID-19 in one place</p>
          </div>

          <Row>
            <Col>
              <Button variant="primary" size="lg" target="_blank" 
                href="https://docs.google.com/spreadsheets/d/1BQZvGqM3Ao48A6lHo_U1yfkFzb8DWPPnqhExFd6X8-8/edit#gid=570437755">
                  Fundraisers
              </Button>
              <div className="button-info">List of organizations seeking donations</div>
            </Col>
            <Col>
              <Button variant="primary" size="lg" target="_blank" onClick={(e)=>this.setState({resourceShow:true})}>
                  Resources
              </Button>
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

          <Row className="justify-content-around align-items-center">
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
                <div className="button-container">
                <Button variant="outline-primary" target="_blank"
                  href="https://docs.google.com/spreadsheets/d/1BQZvGqM3Ao48A6lHo_U1yfkFzb8DWPPnqhExFd6X8-8/edit#gid=570437755">
                    Donate
                </Button></div>
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
                <div className="button-container">
                <Button variant="outline-primary" target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScbwDZCkG8iiacpJb5rFBH71EC3wUExG_q-D2o_mAUpLlhHGQ/viewform">
                    Add Resource
                </Button></div>
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

        {/* Footer  */}
        <footer className="footer">
          <Container>
            <Row className="justify-content-between">
              <Col xs={12} md="auto">
                &copy; Covid Resources Nepal
              </Col>
              <Col xs={12} md="auto">
                Contact: <a href="mailto:covidresourcesnepal@gmail.com" target="_blank" rel="noreferrer">covidresourcesnepal@gmail.com</a>
              </Col>
              <Col xs={12} md="auto">
                <div onClick={(e)=>this.setState({disclaimerShow:true})} className="btn-cursor">
                  Disclaimer
                </div>
              </Col>
            </Row>
          </Container>
        </footer>

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
            <Row>
              <Button href="https://docs.google.com/spreadsheets/d/1i_AhVbNUkdSula82hzKPOuceQ6c4otNvvydyTFauWxI/edit#gid=0" 
              className="resource-buttons" 
              target="_blank"
              variant="outline-primary">
              Experts to Follow on Social Media
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
