import React, {useState, useEffect} from 'react';
import Particles from './Particles';
import Image from 'react-image-resizer';
import { Section } from 'react-scroll-section';
import { SectionContainer } from './Builders';
import '../style/Landing.scss';
import Marquee from "react-marquee-slider";

import msoeLogo from "../sponsorLogos/msoeLogo.png"
import moreLogo from "../sponsorLogos/moreLogo.png";
import polyMathLogo from "../sponsorLogos/polyMathLogo.gif";
import fvcrLogo from "../sponsorLogos/fvcrLogo.png";
import lakeAreaLogo from "../sponsorLogos/lakeAreaLogo.gif";
import iscLogo from "../sponsorLogos/iscLogo.png";
import rockwellLogo from "../sponsorLogos/rockwellLogo.png";
import milwaukeeLogo from "../sponsorLogos/milwaukeeLogo.png";

const Landing = props => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  return (
    <Section id="home">
      <SectionContainer>
    <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black"
        }}
      >
        <Particles />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
              <div className="sponsors-div">
                <Marquee velocity={25}>
                  <Image src={msoeLogo} key={1}  
                  height={120}
                  width={100}
                  style={{marginLeft: "100px", zIndex: "1"}}/>
                  <Image src={iscLogo} key={2}  
                  height={120}
                  width={200}
                  style={{marginLeft: "100px", zIndex: "1"}}/>
                  <Image src={milwaukeeLogo} key={3}  
                  height={120}
                  width={200}
                  style={{marginLeft: "100px", zIndex: "1"}}/>
                  <Image src={fvcrLogo} key={4}  
                  height={120}
                  width={200}
                  style={{marginLeft: "100px", zIndex: "1"}}/>
                  <Image src={moreLogo} key={5}  
                  height={120}
                  width={200}
                  style={{marginLeft: "100px", zIndex: "1"}}/>
                  <Image src={rockwellLogo} key={6}  
                  height={120}
                  width={200}
                  style={{marginLeft: "100px", zIndex: "1"}}/>
                  <Image src={lakeAreaLogo} key={7}  
                  height={120}
                  width={200}
                  style={{marginLeft: "100px", zIndex: "1"}}/>
                  <Image src={polyMathLogo} key={8}  
                  height={120}
                  width={200}
                  style={{marginLeft: "100px", zIndex: "1"}}/>
              </Marquee>
            </div>
            <div className="container-div">
              <div className="logo-div">
                <Image
                img src={"./msoeRoboticsLogo.png"} className="center"
                height={width > 767 ? 314 : 141}
                width={width > 767 ? 729 : 328}/>
              </div>
              <div className="arrow"></div>
              <div className="grayArea"/>
            </div>
        {props.children}
        </div>
    </div>
    </SectionContainer>
    </Section>
  );
};

export default Landing;
