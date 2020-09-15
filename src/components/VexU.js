import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../style/VexU.scss';
import { Row, Col } from 'react-bootstrap';

const vexu = props => {
    return (
        <div className="VexU">
            <Row>
                <Col lg={3} xs={0} md={1}/>
                <Col lg={3} xs={12} md={5}>
                    <ScrollAnimation animateIn='fadeInUp' animateOut="fadeOutLeft">
                        <div className="MainParagraph">
                            <h1>
                                Raider Robotics
                            </h1>
                            <p>
                                One of our project teams is the Raider Robotics VEX U team, providing students a way to put their skills to the test with competitive robotics. In VEX U, students work with the team to design, develop, test, and compete with multiple robots against other collegiate teams. This team works year-long to design and program two collaborative robots to compete in a yearly game, provided to us by VEX Robotics. These robots are required to both operate completely autonomously, as well as operating with human drivers during a competition match.
                            </p>
                        </div>
                    </ScrollAnimation>
                </Col>
                <Col lg={3} xs={12} md={5}>
                    <ScrollAnimation animateIn='fadeInRight' animateOut="fadeOutRight">
                        <div className="TeamPic">
                            <img src={"./rr-team-pic.jpg"} alt="Team" className="Team"/>    
                        </div>
                    </ScrollAnimation>
                </Col>
                <Col lg={3} xs={0} md={1}/>
            </Row>
        </div>
    );
}

export default vexu;