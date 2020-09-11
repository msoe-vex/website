import React, { Fragment } from 'react';
import { Section } from 'react-scroll-section';
import { SectionContainer, AboutSectionContainer, ReducedSectionContainer } from './Builders';
import ContactForm from './ContactForm';
import VexU from './VexU';
import About from './About';
import Programs from './Programs';

const Sections = () => (
  <Fragment>
    <Section id="about">
      <AboutSectionContainer >
        <About />
      </AboutSectionContainer>
    </Section>
    <Section id="programs">
      <ReducedSectionContainer>
        <Programs />
      </ReducedSectionContainer>
    </Section>
    <Section id="vexu">
      <ReducedSectionContainer>
        <VexU />
      </ReducedSectionContainer>
    </Section>
    <Section id="contact">
      <SectionContainer>
        <ContactForm />
      </SectionContainer>
    </Section>
  </Fragment>
);

export default Sections;