import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import Container from '../containers/ContainerHOC';
import { bluePrimary } from '../colors';
const Wrapper = styled.section`
  position: relative;

  background-color: ${bluePrimary};

  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
const Hero = () => {
  return (
    <Wrapper>
      <Particles className="particles" />
      <Container>
        <div className="hero-text">
          <h1>Hello</h1>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
