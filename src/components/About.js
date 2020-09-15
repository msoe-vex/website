import React from 'react';
import '../style/About.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'react-bootstrap';

const about = props => {
    return (
        <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
            <div className="About">
            <Row>
                <Col lg={2} xs={0} md={1}/>
                    <Col lg={8} xs={12} md={10}>
                    <h1>
                        About MSOE Robotics
                    </h1>
                    <p>
                        MSOE Robotics is a student run collegiate robotics team with three main goals: community outreach through support of local FIRST robotics programs, professional development of students through connections with local businesses and experts in STEM industries, and competition in college level competitive robotics across multiple offered platforms.
                    </p>
                    </Col>
                <Col lg={2} xs={0} md={1}/>
            </Row>
            </div>
        </ScrollAnimation>
    );
};

export default about;