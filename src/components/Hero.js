import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import Container from '../containers/ContainerHOC';
import { bluePrimary, primaryTextColor } from '../colors';
import Me from '../assets/me.jpg';

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  background-color: ${bluePrimary};

  .hero-section {
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    color: ${primaryTextColor};

    span {
      font-size: calc(2.5em + 1vw);
      font-weight: bold;
      display: block;

      &:nth-child(2) {
        font-size: calc(1.2em + 1vw);
        margin: 10px 0 30px 0;
      }
    }
  }

  .me {
    border-radius: 50%;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    max-width: 180px;
    max-height: 180px;
  }

  @media screen and (min-width: 580px) {
    .hero-section {
      top: 23%;
    }
    .me {
      max-width: 240px;
      max-height: 240px;
    }
    span {
      font-size: calc(3em + 1vw);
      &:nth-child(2) {
        font-size: calc(2em + 1vw);
      }
    }
  }
  @media screen and (min-width: 992px) {
    span {
      font-size: calc(4em + 1vw);
      &:nth-child(2) {
        font-size: calc(3em + 1vw);
      }
    }
  }
`;
const Hero = () => {
  return (
    <Wrapper>
      <Particles className="particles" />
      <Container>
        <div className="hero-section">
          <span>Hello World!</span>
          <span>> I'm Christian Trinidad </span>

          <img
            className="me rounded-circle"
            alt="Christian Trinidad"
            src={Me}
          />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
