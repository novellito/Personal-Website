import React from 'react';
import { styled } from 'twin.macro';
import {
  Javascript,
  Html,
  Sass,
  Python,
  Java,
  Angular,
  ReactLogo,
  Jquery,
  NodeJs,
  GraphQL,
  MySQL,
  Mongo,
  Terraform,
  Selenium,
  Docker,
  Aws,
  Github,
  Jira,
} from './Logos';

const primaryTextColor = 'white';

const SkillsContainer = styled.section`
  padding: 30px 70px;
  text-align: center;
  .skills-card {
    background-color: #282a36;
    border-radius: 35px;
    box-shadow: 0 3px 0 #6272a4;
    color: ${primaryTextColor};
    padding: 2.25em;
    padding-bottom: 6em;
    /* margin-top: -9em; */
    p {
      color: #5a5d7adb;
      font-weight: 600;
      &:nth-of-type(3) {
        margin-bottom: 0;
      }
    }
    h1 {
      font-size: 2em;
      color: black;
      /* margin-top: 0; */
    }

    .row {
    }
  }
`;
const defaultDimensions = {
  width: '80px',
  height: '80px',
};
const Skills = () => {
  return (
    <SkillsContainer>
      <div className="skills-card">
        <h1>Skills</h1>
        <p>Languages</p>
        <div className="row">
          <Javascript {...defaultDimensions} />
          <Html {...defaultDimensions} />
          <Sass {...defaultDimensions} />
          <Python {...defaultDimensions} />
          <Java {...defaultDimensions} />

          {/* TODO: terraform & selenium */}
        </div>
        <p>Frontend/Backend</p>
        <div className="row">
          <Angular {...defaultDimensions} />
          <ReactLogo {...defaultDimensions} />
          <Jquery {...defaultDimensions} />
          <NodeJs {...defaultDimensions} />
          <GraphQL {...defaultDimensions} />
          <MySQL {...defaultDimensions} />
          <Mongo {...defaultDimensions} />
        </div>

        <p>DevOps</p>
        <div className="row">
          <Aws {...defaultDimensions} />
          <Terraform {...defaultDimensions} />
          <Docker {...defaultDimensions} />
        </div>

        <p>Tools</p>
        <div className="row">
          <Github {...defaultDimensions} />
          <Jira {...defaultDimensions} />
          <Selenium {...defaultDimensions} />
        </div>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
