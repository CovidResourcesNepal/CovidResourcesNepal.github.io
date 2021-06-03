import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function TeamGallery(props) {

    console.log(props);
    
    const teamMembers = props.members.map((member, idx) => 
        <Col xs={12} md={5} key={idx}>
            <Card className="team-card">
                {member.name}
                <br/>
                {(member.hasOwnProperty("email")) ? member.email : ''}
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