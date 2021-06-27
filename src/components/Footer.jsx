import React, {useState} from 'react'
import {
  Container,
  Row,
  Col,
  Modal,
} from 'react-bootstrap'
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Trans } from 'react-i18next'

function Footer({t}) {
  const [disclaimerShow, setDisclaimerShow] = useState(false)
  return (
    <footer className="footer">
      <Container> 
        <Row className="justify-content-between">
          <Col xs={12} md={6} className="text-md-left">
            <h5 className="footer-title">{t('home.title')}</h5>
            <p>{t('footer.subtext')}</p>
            &copy; CovidResourcesNepal |&nbsp;
            <span onClick={(e)=>setDisclaimerShow(true)} className="btn-cursor">
              {t('footer.disclaimer')}
            </span>
            <br className="d-md-none"/>
          </Col>
          <Col xs={12} md={6} className="text-md-right">
          <h5 className="footer-title">{t('footer.contact')}:</h5>
            
            <div className="d-flex justify-content-center justify-content-md-end social-media-links">
              <a href="mailto:covidresourcesnepal@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /> </a>
              <a href="https://www.facebook.com/covidresourcesnepal" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /> </a>
              <a href="https://www.instagram.com/covidresourcesnepal/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /> </a>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Disclaimer Modal */}
      <Modal show={disclaimerShow} onHide={(e)=>setDisclaimerShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{t('disclaimer.title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            <li>{t('disclaimer.disclaimers.0')}</li>
            <li>{t('disclaimer.disclaimers.1')}</li>
            <li>
              {/* <Trans i18nKey="disclaimer.disclaimer.2">
                <a href="mailto:covidresourcesnepal@gmail.com" target="_blank" rel="noreferrer">covidresourcesnepal@gmail.com</a>
              </Trans> */}
              <Trans
                i18nKey="disclaimer.disclaimers.2" // optional -> fallbacks to defaults if not provided
                components={[<a href="mailto:covidresourcesnepal@gmail.com" target="_blank" rel="noreferrer">covidresourcesnepal@gmail.com</a>]}
              />
            </li>
            {/* <li>
              We are continuously updating this list and if you have any information/suggestion that does not fall 
              under #2 above,  please email us at <a href="mailto:covidresourcesnepal@gmail.com" target="_blank" rel="noreferrer">covidresourcesnepal@gmail.com</a> with
              the subject line "Name of Category for the Information" For eg: "Suggestion: Food Resources"
            </li> */}
          </ol>
        </Modal.Body>
      </Modal>
    </footer>
  );
}

export default Footer;