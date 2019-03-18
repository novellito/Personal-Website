import React from 'react';
import styled from 'styled-components';
import { bluePrimary, blueSecondary, white, primaryTextColor } from '../colors';
import '../assets/Devicons/devicon.css';
import '../assets/Devicons/devicon-colors.css';
import vscode from '../assets/vscode.png';
import sel from '../assets/selenium.png';
import Button from './DefaultBtn';

const Wrapper = styled.section`
  padding: 3rem 1.5rem;
  padding-bottom: 4rem;
  background: ${bluePrimary};
  .skills-card {
    background-color: ${white};
    border-radius: 35px;
    box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
    color: ${primaryTextColor};
    padding: 2.25em;
    padding-bottom: 6em;
    margin-top: -9em;
    p {
      color: #5a5d7adb;
      font-weight: 600;
      &:nth-of-type(3) {
        margin-bottom: 0;
      }
    }
    h1 {
      font-size: 2em;
      margin-top: 0;
    }
  }
  .projects-btn {
    position: relative;
    top: 30px;
  }
  .dev {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 25px;
    .colored {
      font-size: 4em;
      margin: 7px;
    }
    img {
      height: 80px;
      &.vscode {
        height: 70px;
      }
      &.selenium {
        width: 120px;
      }
    }
  }
  @media screen and (min-width: 1120px) {
    padding: 3rem 5.5rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 3rem 21.5rem;
    padding-bottom: 5em;
    .dev {
      margin: auto;
      .colored {
        font-size: 5em;
        margin: 0px 15px;
      }
      img {
        height: 92px;
        &.vscode {
          height: 80px;
          margin-left: 0;
        }
        &.selenium {
          width: 130px;
        }
      }
    }
  }
`;

const Skills = props => {
  return (
    <Wrapper>
      <div className="skills-card">
        <h1>Skills</h1>
        <p>Frontend</p>
        <div className="dev">
          <i className="devicon-react-original colored" />
          <i className="devicon-angularjs-plain colored" />
          <i className="devicon-html5-plain colored" />
          <i className="devicon-sass-plain colored" />
          <i className="devicon-jquery-plain colored" />
        </div>
        <p>Backend</p>
        <div className="dev ">
          <i className="devicon-nodejs-plain colored" />
          <i className="devicon-mongodb-plain colored" />
          <i className="devicon-java-plain colored" />
          <i className="devicon-mysql-plain colored" />
          <i className="devicon-python-plain colored" />
          <i className="devicon-php-plain colored" />
        </div>
        <p>Tools</p>
        <div className="dev">
          <i className="devicon-github-plain colored" />
          <i className="devicon-docker-plain colored" />
          <img src={vscode} className="vscode" alt="vscode" />
          <img src={sel} className="selenium" alt="selenium" />
        </div>
        <Button
          btnColor={white}
          // href={resume}
          borderColor={blueSecondary}
          classname="projects-btn"
          content={
            <>
              <i className="fa fa-code" /> {'  '} View Projects
            </>
          }
        />
      </div>
    </Wrapper>
  );
};

export default Skills;
