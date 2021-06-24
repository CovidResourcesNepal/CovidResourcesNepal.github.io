import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Tab, Nav, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

import { Row, Col, Card} from 'react-bootstrap'

import { VictoryPie} from 'victory';

const Resources = ({t}) => {
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
  const categories = [...new Set(fundraisers.map(x => x.category))]

  // Nested array of fundraiser objects by category
  const byCategory = categories.map((category) => {
    return fundraisers.filter(f => f.category === category)
  })

  /**
   * Returns Cols of fundraiser cards from array of fundraiser objs
   */
  const renderCategory = (fundraisers) => {
    return fundraisers.map((fundraiser) => {
      let curSymbol = (
        fundraiser.currency === "USD"
          ? "$"
          : (fundraiser.currency === "GBP" ? "£" : fundraiser.currency))
      return (
          <Card className="flex-row align-items-center fundraiser-card py-3 px-lg-3 m-2 flex-wrap" key={fundraiser.name}>
            <Col xs lg={2}>
              <h6>
                {fundraiser.name}
              </h6>
              <p className="d-lg-none font-italic">
              {curSymbol}{fundraiser.fund_raised} / {curSymbol}{fundraiser.fundraising_goal} raised
              </p>
            </Col>
            <Col xs="auto" lg={3}>
              { fundraiser.fundraising_goal &&
                <div>
                  <VictoryPie
                    padAngle={0}
                    // used to hide labels
                    labelComponent={<svg width="100%" height="100%"></svg>}
                    innerRadius={20}
                    radius={30}
                    width={80}
                    height={80}
                    data={[{ 'key': "", 'y': fundraiser.fund_raised }, { 'key': "", 'y': (fundraiser.fundraising_goal - fundraiser.fund_raised) }]}
                    colorScale={["#19B3A6", "#EEEEEE"]}
                  />
                  <div className="text-center font-italic d-none d-lg-block">{curSymbol}{fundraiser.fund_raised} / {curSymbol}{fundraiser.fundraising_goal} raised</div>
                </div>
              }
            </Col>
            <Col xs={12} lg>
              <div>
                <strong>Goal</strong>
                <p>{fundraiser.stated_goal}</p>
              </div>
            </Col>
            <Col xs={12} lg="auto">
            <div className="text-center">
              <a href={fundraiser.url} target="_blank" className="btn btn-primary" rel="noreferrer">Donate</a>
            </div>
            </Col>
          </Card>
      );
    });
  }

  const galleryTabs = categories.map((category) => {
    return (
      <Nav.Link as="div" eventKey={'fundraiser-' + category} className="tab-button">
        {category}
      </Nav.Link>
    );
  });

  // Gallery of cards by cateogry
  const gallery = byCategory.map((fundraiserArray) => {
    return (
      <Tab.Pane eventKey={'fundraiser-' + fundraiserArray[0].category} title={fundraiserArray[0].category}>
        <h2 className="text-left">{fundraiserArray[0].category}</h2>
        <Row xs={1} sm={1} lg={1}>
          {renderCategory(fundraiserArray)}
        </Row>
      </Tab.Pane>
    );
  });


  return (
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
            <Tab.Container defaultActiveKey={'fundraiser-Food'}>
              <Nav className="tab-navs secondary sticky-top bg-white">
                { galleryTabs }
              </Nav>
              <Tab.Content>
                { gallery }
              </Tab.Content>
            </Tab.Container>

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
                  <iframe className="sheet" src={t('resources.sheets.general-info')} title="General Resources"></iframe>
                </Tab.Pane>
                <Tab.Pane eventKey="helpline" title="Helpline-Resources">
                  <iframe className="sheet" src={t('resources.sheets.helpline')} title="Helpline Resources"></iframe>
                </Tab.Pane>
                <Tab.Pane eventKey="mental-health" title="Mental-Health">
                  <iframe className="sheet" src={t('resources.sheets.mental-health')} title="Mental Health Resources"></iframe>
                </Tab.Pane>
                <Tab.Pane eventKey="food" title="Food-Resources">
                  <iframe className="sheet" src={t('resources.sheets.food')} title="Food Resources"></iframe>
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