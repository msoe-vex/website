import React from 'react';
import '../style/Programs.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'react-bootstrap';

const programs = props => {
    return (
        <div className="Programs">
            <Row>
                <Col md="4">
                    <ScrollAnimation animateIn='fadeInLeft' animateOut="fadeOutLeft">
                        <div className="column">
                            <h1>Professional Development</h1>
                            <hr />
                            <div className="OuterPic">
                                <img src={"./prof-pic.jpg"} alt="Team" className="InnerPic"/>    
                            </div>
                            <hr />
                            <h5>
                                MSOE Robotics is dedicated to providing students the resources and opportunities they need to be successful in their future. From providing opportunities to meet peers to networking with business leaders in the community, we allow for our members to explore many possible career paths for their futures, and provide them with the resources necessary to make it a reality.  
                            </h5>
                        </div>
                        </ScrollAnimation>
                    </Col>
                    <Col md="4">
                        <ScrollAnimation animateIn='fadeInUp' animateOut="fadeOut">
                        <div className="column">
                            <h1>Community Outreach</h1>
                            <hr />
                            <div className="OuterPic">
                                <img src={"./outreach-pic.jpg"} alt="Team" className="InnerPic"/>    
                            </div>
                            <hr />
                            <h5>
                                MSOE Robotics seeks to grow local elementary through highschool STEM programs and forge pathways and opportunities for the next generation of engineers and innovators. Using our skills and resources, the MSOE Robotics organization seeks to help lower-income schools with few STEM opportunities through the sponsorship of competitive robotics teams through mentoring, providing resources and connections to.  
                            </h5>
                        </div>
                        </ScrollAnimation>
                    </Col>
                    <Col md="4">
                        <ScrollAnimation animateIn='fadeInRight' animateOut="fadeOutRight">
                        <div className="column">
                            <h1>Competitive Robotics</h1>     
                            <hr />
                            <div className="OuterPic">
                                <img src={"./competitive-pic.jpg"} alt="Team" className="InnerPic"/>    
                            </div>
                            <hr />
                            <h5>
                                MSOE Robotics features a number of competitive robotics programs that offer students experiences and opportunities they won’t find in the classroom. From hands on technical skills ranging from assembly and fabrication to developing embedded software and architecting artificial intelligence systems. Students can expect to foster these and other lifelong resume-building skills as well as relating our educational content to a broader context.
                            </h5>               
                        </div>
                        </ScrollAnimation>
                    </Col>
            </Row>
        </div>
    );
};

export default programs;