import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Tab, Nav, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

import { Row, Col, Card, CardDeck, CardGroup, CardColumns } from 'react-bootstrap'

import { VictoryPie, VictoryTheme } from 'victory';

const Resources = () => {
  const location = useLocation();
  const initialTab = location.hash.substring(1) === "resources" ? "resources" : "fundraisers";

  const [fundraisers, setFundraisers] = useState([]);

  // Simulating componentDidMount
  useEffect(() => {
    fetch('https://covidresources-316406.ue.r.appspot.com/api/fundraisers', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then(data => setFundraisers(data))
      .catch(error => console.log(error))
  }, []);


  // Array of category names as strings
  const categories = [... new Set(fundraisers.map(x => x.category))]

  // Nested array of fundraiser objects by category
  const byCategory = categories.map((category) => {
    return fundraisers.filter(f => f.category === category)
  })

  /**
   * Returns Cols of fundraiser embeds from array of fundraiser objs
   */
  const renderCategory = (fundraisers) => {
    return fundraisers.map((fundraiser) => {
      let curSymbol = (
                        fundraiser.currency === "USD" 
                        ? "$"
                        : (fundraiser.currency === "GBP" ? "£" : fundraiser.currency))
      return (
        <Col>
          <Card className="flex-sm-column flex-lg-row align-items-center">
            <strong style={{ flex: 0.2 }}>
             {fundraiser.name}
            </strong>
            <div style={{ flex: 0.3 }}>
              <VictoryPie
                padAngle={0}
                // used to hide labels
                labelComponent={<span />}
                innerRadius={20}
                radius={25}
                width={100} height={70}
                data={[{ 'key': "", 'y': fundraiser.fund_raised}, { 'key': "", 'y': (fundraiser.fundraising_goal - fundraiser.fund_raised) }]}
                colorScale={["#19B3A6", "#EEEEEE"]}
              />
              <div>{curSymbol}{fundraiser.fund_raised} out of {curSymbol}{fundraiser.fundraising_goal} raised</div>
            </div>
            <div style={{ flex: 0.4 }} className="p-2">Goal{fundraiser.stated_goal}</div>
            <div style={{ flex: 0.1 }}>
              <a href={fundraiser.url} target="_blank" className="btn btn-primary stretched-link">Donate</a>
            </div>
          </Card>
          <br />
        </Col>
      );
    });
  }

  // Gallery of embeds by cateogry
  const gallery = byCategory.map((fundraiserArray) => {
    return (
      <div>
        <h2 className="text-left">{fundraiserArray[0].category}</h2>
        <Row xs={1} sm={1} lg={1}>
          {renderCategory(fundraiserArray)}
        </Row>
      </div>
    );
  });


  return (
    <Container className="section">
      <Tab.Container defaultActiveKey={initialTab}>
        <Nav variant="tabs" className="tab-navs primary">
          <Nav.Link as="div" eventKey="fundraisers" className="tab-button">
            Fundraisers
          </Nav.Link>
          <Nav.Link as="div" eventKey="resources" className="tab-button">
            Resources
          </Nav.Link>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="fundraisers" title="Fundraisers">
            <iframe className="sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQv_zDW2SIhkyb3W0yFsAFJxGD1Mmny2U1vFjfN6BTQK6phr-gfM6wRR538UBeVr8OTXsBdectTsQHf/pubhtml?widget=true&amp;headers=false"></iframe>
            <Container>
              <h1>Fundraisers</h1>
              {gallery}
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="resources" title="Resources">
            <Tab.Container defaultActiveKey="general-info">
              <Nav className="tab-navs secondary">
                <Nav.Link as="div" eventKey="general-info" className="tab-button">
                  General Info
                </Nav.Link>
                <Nav.Link as="div" eventKey="helpline" className="tab-button">
                  Helpline
                </Nav.Link>
                <Nav.Link as="div" eventKey="mental-health" className="tab-button">
                  Mental Health
                </Nav.Link>
                <Nav.Link as="div" eventKey="food" className="tab-button">
                  Food
                </Nav.Link>
                <Button variant="outline-primary" target="_blank" href="https://www.covidconnectnp.org/">
                  Medical Resources
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