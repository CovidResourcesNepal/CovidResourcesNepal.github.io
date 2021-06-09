import {
  Container,
  Button,
  Row,
  Col,
  Card,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './style.css'

function Homepage() {
  return (
    <>
      {/* Top hero section  */}
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
    </>
  );
}

export default Homepage;