import React from 'react'
import { Container } from 'react-bootstrap'
import TeamGallery from '../../components/TeamGallery'
import './style.css'

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      team: {"core": [], "steering": []},
      resourceShow: false
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
      <>
        <Container className="section Homepage-about pb-5">
          <h1 className="section-header">About us</h1>

          <div className="about-paragraph">
            We are a group of Nepali students and young professionals trying to integrate all the resources dedicated to Nepal’s
            response to Covid-19 in one place. We hope that this platform can make the search for various types of resources and 
            impactful fundraisers effective, including those people/organizations that need to address emergency situations in 
            a short amount of time. 
          </div>
        </Container>

        <Container className="section homepage-team pt-0 pb-5">
          <h3 className="section-header">Core Team</h3>
          <TeamGallery members={this.state.team.core}/>
        </Container>

        <Container className="section homepage-team pt-0">
          <h3 className="section-header">Team Leads</h3>
          <TeamGallery members={this.state.team.steering}/>
        </Container>
      </>
    );
  }

  
}

export default About;