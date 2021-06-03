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

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      team: {"core": [], "steering": []}
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
    return (
      <div className="App">

        {/* Landing section  */}
        <Container className="section Homepage-bg">

          <div className="top-hero">
            <h1 id="hero-text">Covid Resources for Nepal</h1>
            <p id="hero-subtitle">A common source for resources, donation campaigns, support systems, and Nepal’s response to Covid-19 in one place</p>
          </div>

          <Row>
            <Col>
              <Button variant="primary" size="lg" href="https://www.google.com/" target="_blank">Fundraisers</Button> 
            </Col>
            <Col>
              <Button variant="primary" size="lg" href="https://www.google.com/" target="_blank">Resources</Button>
            </Col>
            <Col>
              <Button variant="primary" size="lg" target="_blank"
                href="https://www.change.org/p/ambassador-randy-berry-get-covid-vaccines-to-nepal-asap-and-prevent-a-humanitarian-disaster">
                  Vaccine Petition
              </Button>
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
                  We have compiled a list of fundraisers trying to appeal to a larger community and allocate funds
                  to support Nepal in tackling and minimizing the effects of the Covid-19. These fundraisers are
                  supporting initiatives on the ground that are related to medical needs, food distribution, delivery
                  of home isolation kits among many others. We have tried to give a brief overview of each campaign.
                  Please feel free to scroll through and support these fundraisers to the best of your ability. Every
                  donation counts, every little effort adds up. 
                </p>
                <Button variant="outline-primary" href="https://www.google.com/" target="_blank">Donate</Button>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card body className="help-card">
                <h3>Add More Resources</h3>
                <p>
                  Our volunteers have worked day and night to compile the data that we have. However, we believe there
                  are many more resources and campaigns that need to be listed alongside. If you know of one, whether
                  if be resources or campaigns or any support systems, please use the form below to let us know.
                </p>
                <Button variant="outline-primary" href="https://www.google.com/" target="_blank">Add Resource</Button>
              </Card>
            </Col> 
            <Col sm={12} md={6} lg={4}>
              <Card body className="help-card">
                <h3>Sign Petition</h3>
                <p>
                  Please sign the petition to urge lawmakers to support vaccine donations to Nepal.
                </p>
                <Button variant="outline-primary" target="_blank"
                  href="https://www.change.org/p/ambassador-randy-berry-get-covid-vaccines-to-nepal-asap-and-prevent-a-humanitarian-disaster">
                    Sign Petition
                </Button>
              </Card>
            </Col> 
          </Row>
        </Container>

        {/* About Us Section */}
        <Container className="section Homepage-about">
          <h1 className="section-header">About us</h1>

          <div className="Homepage-about-paragraph">
            We are a group of Nepali students and young professionals trying to integrate all the resources dedicated to
            Nepal’s response to Covid-19 in one place. We hope that this platform can make the search for various types
            of resources and impactful fundraisers effective, including those people/organizations that need to address
            emergency situations in a short amount of time. 
          </div>
        </Container>

        <Container className="section homepage-team pt-0">
          <h3 className="section-header">Core Team</h3>
          <TeamGallery members={this.state.team.core}/>
        </Container>

        <Container className="section homepage-team pt-0">
          <h3 className="section-header">Working Team</h3>
          <TeamGallery members={this.state.team.steering}/>
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
}

// export default App;
