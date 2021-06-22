import React, {useState} from 'react'
import {
  Container,
  Row,
  Col,
  Modal,
} from 'react-bootstrap'
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

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
          {t('footer.email')}: <a href="mailto:covidresourcesnepal@gmail.com" target="_blank" rel="noreferrer">covidresourcesnepal@gmail.com</a>
            
            <div className="d-flex justify-content-center justify-content-md-end social-media-links">
              <a href="https://www.instagram.com/covidresourcesnepal/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /> </a>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Disclaimer Modal */}
      <Modal show={disclaimerShow} onHide={(e)=>setDisclaimerShow(false)} centered size="lg">
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
    </footer>
  );
}

export default Footer;