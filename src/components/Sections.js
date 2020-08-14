import React, { Fragment } from 'react';
import { Section } from 'react-scroll-section';
import { SectionContainer } from './Builders';

const Sections = () => (
  <Fragment>
    <Section id="about">
      <SectionContainer>
        <span role="img" aria-label="hands up">
          🙋‍♂️
        </span>
      </SectionContainer>
    </Section>
    <Section id="history">
      <SectionContainer>
        <span role="img" aria-label="computer">
          💻
        </span>
      </SectionContainer>
    </Section>
    <Section id="contact">
      <SectionContainer>
        <span role="img" aria-label="letter">
          💌
        </span>
      </SectionContainer>
    </Section>
  </Fragment>
);

export default Sections;