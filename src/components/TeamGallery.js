import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function TeamGallery(props) {

    console.log(props);

    var linkedin = (url) =>
        <a href={url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
    
    const teamMembers = props.members.map((member, idx) => 
        <Col xs={6} md={4} key={idx}>
            <Card className="team-card">
                {member.name}
                <br/>
                {(member.hasOwnProperty("email")) ? member.email : ''}
                {member.hasOwnProperty("linkedin") ? linkedin(member.linkedin) : ''}
            </Card>
        </Col>
    );
    return (
        <Row className="justify-content-around">
            {teamMembers}
        </Row>
    )
}

export default TeamGallery;