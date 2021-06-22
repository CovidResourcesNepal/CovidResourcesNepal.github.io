import React from 'react'
import { Container } from 'react-bootstrap'
import TeamGallery from '../../components/TeamGallery'
import './style.css'
import TeamEN from "./teamEN.json"
import TeamNP from "./teamNP.json"

function About({t, lng}) {
  const team = lng == "en" ? TeamEN : TeamNP
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

      <Container className="section homepage-team pt-0">
        <h3 className="section-header">{t('about.team-leads')}</h3>
        <TeamGallery members={team.steering}/>
      </Container>
    </>
  );
}

export default About;