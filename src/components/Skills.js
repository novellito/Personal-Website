import React from 'react';
import styled from 'styled-components';
import {
  bluePrimary,
  blueSecondary,
  white,
  blueTertiary,
  primaryTextColor
} from '../colors';
import '../assets/Devicons/devicon.css';
import '../assets/Devicons/devicon-colors.css';
import vscode from '../assets/vscode.png';
import sel from '../assets/selenium.png';

const Wrapper = styled.section`
  padding: 3rem 6.5rem;
  padding-bottom: 4rem;
  background: ${bluePrimary};
  .skills-card {
    background-color: ${white};
    border-radius: 35px;
    box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
    color: ${primaryTextColor};
    padding: 1.25em;
  }

  .colored {
    font-size: 60px;
    margin: 0px;
  }

  .dev {
    img {
      width: 80px;
      height: 80px;
      padding-bottom: 20px;
    }
    margin-top: 25px;
  }

  @media screen and (min-width: 321px) {
    .colored {
      font-size: 60px;
      margin: 0px 15px 0px 15px;
    }
  }

  @media screen and (min-width: 576px) {
    .main-tech {
      margin: 40px 0px 0px 0px;
    }
    .colored {
      font-size: 80px;
      margin: 0px 15px 0px 15px;
    }
    .dev {
      margin: auto;
      img {
        width: 100px;
        height: 100px;
        padding-bottom: 20px;
      }
    }
  }
`;

const Skills = props => {
  return (
    <Wrapper>
      <div className="skills-card">
        <h1>Skills</h1>
        <div className="dev">
          <h3>Frontend</h3>
          <i className="devicon-react-original colored" />
          <i className="devicon-angularjs-plain colored" />
          <i className="devicon-html5-plain colored" />
          <i className="devicon-sass-plain colored" />
          <i className="devicon-jquery-plain colored" />
        </div>
        <div className="dev ">
          <h3>Backend</h3>
          <i className="devicon-nodejs-plain colored" />
          <i className="devicon-mongodb-plain colored" />
          <i className="devicon-java-plain colored" />
          <i className="devicon-python-plain colored" />
          <i className="devicon-php-plain colored" />
          <i className="devicon-mysql-plain colored" />
        </div>
        <div className="dev ">
          <h3>Tools</h3>
          <img src={vscode} alt="vscode" />
          <img src={sel} alt="selenium" />
          <i className="devicon-github-plain colored" />
          <i className="devicon-docker-plain colored" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
