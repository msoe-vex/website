import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../style/Sponsors.scss';
import Marquee from "react-marquee-slider";
import { Row, Col } from 'react-bootstrap';
import Image from 'react-image-resizer';

import msoeLogo from '../sponsorLogos/msoeLogo.png';
// import moreLogo from "../public/moreLogo.png";
import polyMathLogo from "../sponsorLogos/polyMathLogo.gif";
import fvcrLogo from "../sponsorLogos/fvcrLogo.png";
import lakeAreaLogo from "../sponsorLogos/lakeAreaLogo.gif";
import iscLogo from "../sponsorLogos/iscLogo.png";

const Sponsors = props => {   

    return (
        <div className="Sponsors">
            <Row>
                <Col lg={3} xs={0} md={1}/>
                <Col md={10} lg={6} xs={12}>
                    <ScrollAnimation animateIn={"zoomIn"} animateOut={"fadeOut"}>
                        <div className="MainParagraph">
                            <h1>
                                Our Sponsors
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla ipsum et sodales tincidunt. Nullam eleifend interdum ipsum a iaculis. In accumsan felis ac nunc imperdiet, sed tincidunt turpis sodales. Vivamus eleifend iaculis felis sed tincidunt. Fusce id auctor sapien, ac pharetra quam. Aenean lectus mauris, tincidunt non placerat a, tempor et libero. Nullam sed augue sed neque malesuada tristique. In hac habitasse platea dictumst. Etiam efficitur, purus nec molestie rhoncus, metus arcu consectetur lorem, quis lacinia sem enim eget risus. Cras lobortis, elit in tincidunt posuere, odio leo aliquet sem, gravida bibendum mi erat nec erat. Quisque eleifend aliquam nisi, a auctor est elementum et. Donec sed volutpat tellus. Integer ultrices laoreet nisl, eu lobortis ante tristique in. In pellentesque at magna porttitor finibus. Nunc ullamcorper nisl non felis elementum sodales. Ut varius leo tellus, a efficitur leo elementum quis.
                            </p>
                        </div>
                        <div className="MarqueeSponsors">
                            <Marquee velocity={25}>
                                <Image src={msoeLogo} key={1}  
                                height={120}
                                width={100}
                                style={{marginLeft: "30px"}}/>
                                <Image src={iscLogo} key={2}  
                                height={120}
                                width={200}
                                style={{marginLeft: "30px"}}/>
                                <Image src={fvcrLogo} key={3}  
                                height={120}
                                width={200}
                                style={{marginLeft: "30px"}}/>
                                {/* <Image src={moreLogo} key={4}  
                                height={120}
                                width={200}
                                style={{marginLeft: "30px"}}/> */}
                                <Image src={lakeAreaLogo} key={5}  
                                height={120}
                                width={200}
                                style={{marginLeft: "30px"}}/>
                                <Image src={polyMathLogo} key={6}  
                                height={120}
                                width={200}
                                style={{marginLeft: "30px"}}/>
                            </Marquee>
                        </div>
                    </ScrollAnimation>
                </Col>
                <Col lg={3} xs={0} md={1}/>
            </Row>
        </div>
    );
}

export default Sponsors;