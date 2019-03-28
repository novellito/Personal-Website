import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import Container from '../containers/ContainerHOC';
import { bluePrimary, primaryTextColor } from '../utils/colors';
import particleConfig from '../utils/particleConfig';
import Me from '../assets/me.jpg';

const cursorColor = '#E3F2FD';
const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  background-color: ${bluePrimary};
  .particles {
    height: 100%;
  }
  .hero-section {
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    color: ${primaryTextColor};
    p {
      font-size: calc(2.5em + 1vw);
      font-weight: bold;
      margin: 0;
      &.typewriter {
        font-size: calc(1.2em + 1vw);
        overflow: hidden;
        border-right: 0.18em solid ${cursorColor};
        white-space: nowrap;
        margin: 10px auto 30px auto;
        padding-right: 5px;
        animation: typing 1.5s steps(30, end),
          blink-caret 0.75s step-end infinite;
      }
    }
  }
  .typewriter-container {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  .me {
    border-radius: 50%;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    max-width: 180px;
    max-height: 180px;
  }
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${cursorColor};
    }
  }
  @media screen and (min-width: 580px) {
    .hero-section {
      top: 23%;
      p {
        font-size: calc(3em + 1vw);
        &.typewriter {
          font-size: calc(2em + 1vw);
          margin: 10px auto 20px auto;
        }
      }
    }
    .me {
      max-width: 240px;
      max-height: 240px;
    }
  }
  @media screen and (min-width: 992px) {
    .hero-section {
      p {
        font-size: calc(4em + 1vw);
        &.typewriter {
          font-size: calc(3em + 1vw);
          margin: 10px auto 30px auto;
        }
      }
    }
  }
  /* for devices in landscape mode */
  @media only screen and (max-width: 900px) and (orientation: landscape) {
    .me {
      max-width: 125px;
    }
  }
  /* for xs devices in landscape mode */
  @media only screen and (max-width: 600px) and (orientation: landscape) {
    .me {
      max-width: 100px;
    }
    .hero-section {
      p.typewriter {
        margin: 10px auto 10px auto;
      }
    }
  }
`;
const Hero = () => {
  return (
    <Wrapper>
      <Particles className="particles" params={particleConfig} />
      <Container>
        <div className="hero-section">
          <p>Hello World!</p>
          <div className="typewriter-container">
            <p className="typewriter">> I'm Christian Trinidad </p>
            <img
              className="me rounded-circle"
              alt="Christian Trinidad"
              src={Me}
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
