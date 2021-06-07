import React from 'react'
import { Tab, Nav } from 'react-bootstrap'
import './styles.css'

const Tabs = () => {
    return(
        <div id="new-app">
            <Tab.Container defaultActiveKey="fundraisers">
                <Nav className="tab-navs">
                    <Nav.Link as="div" eventKey="fundraisers" className="tab-button">
                        Fundraisers
                    </Nav.Link>
                    <Nav.Link as="div" eventKey="resources" className="tab-button">
                        Resources
                    </Nav.Link>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="fundraisers" title="Fundraisers">
                        <iframe className="sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS-JxGxJwFFBqh4F6vOJaKZOFfpZVIYJ879eS3RcWMWX7btyOMPWFegXWo6iPIqVZo3kW6aCdfGrwZO/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                    </Tab.Pane>
                    <Tab.Pane eventKey="resources" title="Resources">
                        <iframe className="sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS-JxGxJwFFBqh4F6vOJaKZOFfpZVIYJ879eS3RcWMWX7btyOMPWFegXWo6iPIqVZo3kW6aCdfGrwZO/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}

export default Tabs;