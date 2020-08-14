import React from 'react';
import Particles from './Particles';
import Image from 'react-image-resizer';
import { Section } from 'react-scroll-section';
import { SectionContainer } from './Builders';

const Landing = props => (
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
            <div className="container-div">
            <Image
            img src={"./rrlogo.png"} alt="RR" className="center"
            height={380}
            width={320}/>
            </div>
        {props.children}
        </div>
    </div>
    </SectionContainer>
    </Section>
);

export default Landing;
