import React from 'react'
import { Container, Accordion, Card } from 'react-bootstrap'
import TeamGallery from '../../components/TeamGallery'
import './style.css'
import TeamEN from "./teamEN.json"
import TeamNP from "./teamNP.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

function About({t, lng}) {
  const team = lng === "en" ? TeamEN : TeamNP
  return (
    <>
      <Container className="section Homepage-about pb-5">
        <h1 className="section-header">{t('about.title')}</h1>

        <div className="about-paragraph">
          {t('about.about-us')}
        </div>
      </Container>

      <Container className="section homepage-team pt-0 pb-5">
        <h3 className="section-header">{t('about.core')}</h3>
        <TeamGallery members={team.core}/>
      </Container>

      {/* <Container className="section homepage-team pt-0">
        <h3 className="section-header">{t('about.team-leads')}</h3>
        <TeamGallery members={team.steering}/>
      </Container> */}

      <Container className="section about-teams pt-0">
        <h3 className="section-header">{t('about.teams')}</h3>
        {team.teams.map((singleTeam) => (
          // <Container className="section homepage-team pt-0">
          //   <h3 className="section-header">{singleTeam.teamName}</h3>
          //   <TeamGallery members={singleTeam.members}/>
          // </Container>
          
          <Accordion>
            <Card>
              <Accordion.Toggle as="h5" variant="link" eventKey={singleTeam.teamName} className="m-0">
                <Card.Header>
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                    {singleTeam.teamName}
                </Card.Header>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={singleTeam.teamName}>
                <Card.Body>
                  <TeamGallery members={singleTeam.members}/>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </Container>
    </>
  );
}

export default About;