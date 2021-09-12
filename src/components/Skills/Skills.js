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

const defaultDimensions = {
  width: '80px',
  height: '80px',
};

const SkillsContainer = styled.section`
  padding: 20px 70px;
  text-align: center;
  .skills-card {
    background-color: #282a36;
    border-radius: 0.25em;
    box-shadow: 0 3px 0 #6272a4;
    padding: 1em;
    p {
      color: hsl(0deg 0% 80%);
      font-weight: 600;
      margin: 0;
    }
    h1 {
      font-size: 2em;
      color: white;
    }

    .row {
      padding: 15px;
      svg {
        margin: 0.5rem;
      }
    }
  }
`;

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
          <Docker width="90px" height="90px" />
          <Terraform {...defaultDimensions} />
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
