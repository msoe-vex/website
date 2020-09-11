import React from 'react';
import '../style/About.scss';
import ScrollAnimation from 'react-animate-on-scroll';

const about = props => {
    return (
        <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
            <div className="About">
                <h1>
                    About MSOE Robotics
                </h1>
                <p>
                    MSOE Robotics is a student run collegiate robotics team with three main goals: community outreach through support of local FIRST robotics programs, professional development of students through connections with local businesses and experts in STEM industries, and competition in college level competitive robotics across multiple offered platforms.
                </p>
            </div>
        </ScrollAnimation>
    );
};

export default about;