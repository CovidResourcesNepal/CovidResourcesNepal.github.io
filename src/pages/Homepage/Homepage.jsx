import {
  Container,
  Button,
  Row,
  Col,
  Card,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './style.css'

function Homepage({t}) {
  return (
    <>
      {/* Top hero section  */}
      <Container className="section Homepage-bg" fluid>

        <div className="top-hero">
          <h1 id="hero-text">{t('home.title')}</h1>
          <p id="hero-subtitle">{t('home.hero-subtitle')}</p>
        </div>

        <Row>
          <Col>
            <LinkContainer to="/resources#fundraisers">
              <Button variant="primary" size="lg" target="_blank">
                {t('home.fundraisers')}
              </Button>
            </LinkContainer>
            <div className="button-info">{t('home.fundraisers-subtitle')}</div>
          </Col>
          <Col>
            <LinkContainer to="/resources#resources">
              <Button variant="primary" size="lg" target="_blank">
                {t('home.resources')}
              </Button>
            </LinkContainer>
            <div className="button-info">{t('home.resources-subtitle.part1')}<br/>{t('home.resources-subtitle.part2')}</div>
          </Col>
          <Col>
            <Button variant="primary" size="lg" target="_blank"
              href="https://vaccine.mohp.gov.np/">
              {t('home.vaccine')}
            </Button>
            <div className="button-info">{t('home.vaccine-subtitle')}</div>
          </Col>
          {/* <Col>
            <Button variant="primary" size="lg" target="_blank"
              href="https://www.change.org/p/urge-us-government-to-send-emergency-covid-19-vaccine-humanitarian-aid-to-nepal">
              {t('home.vaccine')}
            </Button>
            <div className="button-info">{t('home.vaccine-subtitle')}</div>
          </Col> */}
        </Row>
        <Row>
        </Row>
      </Container>

      {/* Help section  */}
      <div className="Homepage-help">
        <Container className="section">
          <h1 className="section-header">{t('home.help')}</h1>

          <Row className="justify-content-around align-items-stretch help-cards-container">
            <Col sm={12} md={6}>
              <Card body className="help-card">
                <h3>{t('home.donate')}</h3>
                <p>{t('home.donate-text')}</p>
                <div className="spacer"></div>
                <div className="button-container">
                  <LinkContainer to="/resources#fundraisers">
                    <Button variant="outline-primary" target="_blank">
                      {t('home.donate')}
                    </Button>
                  </LinkContainer>
                </div>
              </Card>
            </Col>
            <Col sm={12} md={6}>
              <Card body className="help-card">
                <h3>{t('home.vax-petition')}</h3>
                <p>{t('home.vax-petition-text')}</p>
                <div className="spacer"></div>
                <div className="button-container">
                <Button variant="outline-primary" target="_blank"
                  href="https://www.change.org/p/urge-us-government-to-send-emergency-covid-19-vaccine-humanitarian-aid-to-nepal">
                    {t('home.vax-petition')}
                </Button>
                </div>
              </Card>
            </Col> 
            <Col sm={12} md={6}>
              <Card body className="help-card">
                <h3>{t('home.add2db')}</h3>
                <p>{t('home.add2db-text')}</p>
                <div className="spacer"></div>
                <div className="button-container">
                  <Button variant="outline-primary" target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScbwDZCkG8iiacpJb5rFBH71EC3wUExG_q-D2o_mAUpLlhHGQ/viewform">
                      {t('home.add2db')}
                  </Button>
                </div>
                <div className="button-container mt-3">
                  <Button variant="outline-primary" target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScDVTkpMDasRZEMy7zk-ALjH4ARE8AZlR5inpIc8opPbMdIHg/viewform">
                      {t('home.suggest-changes')}
                </Button>
                </div>
              </Card>
            </Col> 
            <Col sm={12} md={6}>
              <Card body className="help-card">
                <h3>{t('home.vax-signup')}</h3>
                <p>{t('home.vax-signup-text')}</p>
                <div className="spacer"></div>
                <div className="button-container">
                <Button variant="outline-primary" target="_blank"
                  href="https://vaccine.mohp.gov.np/">
                    {t('home.vax-signup')}
                </Button>
                </div>
              </Card>
            </Col> 
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Homepage;