import React from 'react';
import xtian from '../assets/xtian.png';
import resume from '../assets/christianTrinidad_Resume2018.pdf';

import styled from 'styled-components';
import Container from '../containers/ContainerHOC';
import AboutLinks from './AboutLinks';
import { bluePrimary, blueSecondary, white } from '../colors';
import Button from './DefaultBtn';

const Wrapper = styled.section`
  padding: 60px 0 60px 0;
  background: ${blueSecondary};
  .about-contents {
    display: grid;
    .left {
      margin: auto;
      .xtian {
        width: 165px;
        height: 165px;
        margin-bottom: 10%;
        border-radius: 50%;
        box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
      }
    }
    .right {
      color: ${white};
      text-align: center;
      h3 {
        font-size: 1.3em;
        margin: 0 0 5px 0;
      }
      p {
        margin-top: 0;
      }
      .mobile-resume {
        text-align: center;
        margin-top: 25px;
      }
    }
    .personalLinks {
      display: flex;
      align-items: center;
      justify-content: center;
      /* hide first resume btn on mobile view */
      .res-1 {
        display: none;
      }
      a {
        &:nth-child(2) {
          margin: 0 10px;
        }
        i {
          font-size: 2.2em;
          color: ${white};
          &:hover {
            color: ${bluePrimary};
            transition: 0.3s;
          }
          &.fa-download {
            font-size: 1.2em;
            color: inherit;
            margin-right: 5px;
          }
        }
      }
    }

    /* media queries for .about-contents */
    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 3fr;
      grid-gap: 10%;
      .personalLinks .res-1 {
        display: block;
      }
      /* hide 2nd resume btn on desktops */
      .mobile-resume {
        display: none;
      }
      .right {
        font-size: 1.1em;
        text-align: left;
      }
    }
  }
`;
const About = props => {
  return (
    <Wrapper id="aboutsSection">
      <Container>
        <div className="about-contents">
          <div className="left">
            <img className="xtian" src={xtian} alt="images of christian" />
          </div>
          <div className="right ">
            <h3>About Me</h3>
            <p>
              I'm an undergraduate student studying computer science at
              California State University Northridge, specializing in web
              engineering. I'm a former web developer for my university's Career
              Center and currently a technical support specialist for our
              Distance Learning Center. Outside the world of programming, I
              enjoy playing basketball, listening to music, and growing my
              sneaker collection.
            </p>
            <div className="personalLinks ">
              <AboutLinks />
              <Button
                btnColor={blueSecondary}
                classname="res-1"
                href={resume}
                content={
                  <>
                    <i className="fa fa-download" /> Download Résumé (PDF)
                  </>
                }
              />
            </div>
            <div className="mobile-resume">
              <Button
                btnColor={blueSecondary}
                href={resume}
                content={
                  <>
                    <i className="fa fa-download" /> Download Résumé (PDF)
                  </>
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default About;
