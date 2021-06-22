import React from 'react'
import { useLocation } from 'react-router-dom'
import { Tab, Nav, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Resources = ({t}) => {
  const location = useLocation();
  const initialTab = location.hash.substring(1) === "resources" ? "resources" : "fundraisers";

  return(
    <Container className="section">
      <Tab.Container defaultActiveKey={initialTab}>
        <Nav variant="tabs" className="tab-navs primary">
          <Nav.Link as="div" eventKey="fundraisers" className="tab-button">
          {t('home.fundraisers')}
          </Nav.Link>
          <Nav.Link as="div" eventKey="resources" className="tab-button">
            {t('home.resources')}
          </Nav.Link>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="fundraisers" title="Fundraisers">
            <iframe className="sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQv_zDW2SIhkyb3W0yFsAFJxGD1Mmny2U1vFjfN6BTQK6phr-gfM6wRR538UBeVr8OTXsBdectTsQHf/pubhtml?widget=true&amp;headers=false"></iframe>
          </Tab.Pane>
          <Tab.Pane eventKey="resources" title="Resources">
            <Tab.Container defaultActiveKey="general-info">
              <Nav className="tab-navs secondary">
                <Nav.Link as="div" eventKey="general-info" className="tab-button">
                  {t('resources.general-info')}
                </Nav.Link>
                <Nav.Link as="div" eventKey="helpline" className="tab-button">
                  {t('resources.helpline')}
                </Nav.Link>
                <Nav.Link as="div" eventKey="mental-health" className="tab-button">
                  {t('resources.mental-health')}
                </Nav.Link>
                <Nav.Link as="div" eventKey="food" className="tab-button">
                  {t('resources.food')}
                </Nav.Link>
                <Button variant="outline-primary" target="_blank" href="https://www.covidconnectnp.org/">
                  {t('resources.medical-resources')}
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" className="ml-2" />
                </Button>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="general-info" title="General-Resources">
                  <iframe className="sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT9dqyD7CXCyv-48PfvCq0YG9IeXllKYU573a-fRrPBzQzvWb295IRKbcxoSJf6_x_ygBQxmuyhljOV/pubhtml?widget=true&amp;headers=false"></iframe>
                </Tab.Pane>
                <Tab.Pane eventKey="helpline" title="Helpline-Resources">
                  <iframe className="sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTClFPRtyhBUiifHzU8Lqsi_3UmKIQmtKmVPycdwRdE3pqIwCBXLhYlHlJ_IG4ok9faOTsh2yB2Vc5u/pubhtml?widget=true&amp;headers=false"></iframe>
                </Tab.Pane>
                <Tab.Pane eventKey="mental-health" title="Mental-Health">
                  <iframe className="sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQe3p8AgEcbpozf0GpalZQSZtdYkJgbItI9uGkDCLEY8eagfqOa2Pmn3Ug-7RiH-EbnVF_zql3TIA6r/pubhtml?widget=true&amp;headers=false"></iframe>
                </Tab.Pane>
                <Tab.Pane eventKey="food" title="Food-Resources">
                  <iframe className="sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRCklDzK2w1mWMSo8uxNjaIV9CuCFzNO3Fgox8qgI3FUx83oi0TyoHtVrTUC1bUXDLxH1d9VRZ-CqK5/pubhtml?widget=true&amp;headers=false"></iframe>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  )
}

export default Resources;