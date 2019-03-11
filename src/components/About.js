import React from 'react';
import xtian from '../assets/xtian.png';
import resume from '../assets/christianTrinidad_Resume2018.pdf';
import styled from 'styled-components';
import Container from '../containers/ContainerHOC';
import { blueSecondary, white } from '../colors';
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
      /* font-family: 'Open Sans', sans-serif; */
      .personalLinks {
        display: flex;
        align-items: center;
        a {
          &:nth-child(2) {
            margin: 0 10px;
          }
          i {
            font-size: 2.2em;
            color: ${white};
            &:hover {
              color: #00a0ff;
              transition: 0.3s;
            }
            &.fa-download {
              font-size: 1.2em;
              &:hover {
                color: ${blueSecondary};
              }
            }
          }
        }
        .resume-btn {
          cursor: pointer;
          background-color: ${blueSecondary};
          color: ${white};
          margin-left: auto;
          text-decoration: none;
          font-size: 0.8em;
          padding: 1.1em 2em;
          border: 1.3px solid ${white};
          border-radius: 100px;
          &:hover {
            background: ${white};
            transition: 0.3s;
            color: ${blueSecondary};
          }
          /* @media screen and (min-width: 992px) {
            float: right;
          } */
        }
      }
      @media screen and (min-width: 660px) {
        text-align: left;
        padding: 0;
      }
      @media screen and (min-width: 992px) {
        padding-right: 10%;
        font-size: 1.1em;
      }
    }
    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 3fr;
      grid-gap: 10%;
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
            <div className="personalLinks">
              <a
                href="https://github.com/novellito"
                target="_blank"
                alt="my github"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github "
                  data-toggle="tooltip"
                  data-placement="top"
                  title="View my GitHub"
                />
              </a>
              <a
                href="mailto:cntrinidad@gmail.com"
                alt="email me"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-envelope"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Email Me"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/christian-trinidad07/"
                alt="my linked in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-linkedin-square social-ink"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="View my LinkedIn"
                  rel="noopener noreferrer"
                />
              </a>
              <a
                className="resume-btn"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-download" /> Download Résumé (PDF)
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default About;
