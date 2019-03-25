import React from 'react';
// import snapcode from '../assets/snapcode.png';
import styled from 'styled-components';
import {
  bluePrimary,
  blueSecondary,
  white,
  primaryTextColor
} from '../../colors';
import csuncs from '../../assets/csuncs.png';
import scrambleDash from '../../assets/scramDash.png';
import noteroom from '../../assets/nr.png';
import twitterBot from '../../assets/bot.png';
import voitcha from '../../assets/voitcha.png';
import rtc from '../../assets/rtc.png';
import dl from '../../assets/dlTools.png';
import web from '../../assets/website.png';
import todo from '../../assets/todo.jpg';
import chat from '../../assets/vueChat.png';
import Project from './Project';
import desc from './Descriptions';
const Wrapper = styled.section`
  margin-top: 100px;
  h1 {
    color: ${primaryTextColor};
    font-size: 1.75em;
  }
  .row-cont {
    display: grid;
    grid-gap: 20px;
    padding: 40px 15px 60px 15px;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: 768px) {
    .row-cont {
      grid-template-columns: 6fr 6fr;
      max-width: 1000px;
    }
  }
  @media screen and (min-width: 1400px) {
    .row-cont {
      max-width: 1400px;
      grid-gap: 30px;
    }
  }
`;
const Projects = props => {
  return (
    <Wrapper>
      <div id="projects">
        <h1 className="projectTitle">Projects</h1>
        <div className="row-cont">
          <Project
            description={desc.csunCSPlanner}
            techProp={['MongoDb', 'Express.js', 'Angular', 'Node.js']}
            projectName="CSUN-CS Planner"
            projLink="https://github.com/novellito/CSUN-MEAN-App"
            style={{ backgroundColor: '#D00D2D' }}
            imgSrc={csuncs}
          />
          <Project
            description={desc.scrambleDash}
            techProp={['MySQL', 'Express.js', 'React.js', 'Node.js']}
            projectName="Scramble Dash"
            projLink="https://github.com/novellito/scramble-dash"
            imgSrc={scrambleDash}
            style={{ backgroundColor: '#36479e' }}
          />
          <Project
            description={desc.rtc}
            techProp={['MongoDb', 'Express.js', 'Angular', 'Node.js']}
            projectName="Real Time Captioning"
            projLink="https://github.com/novellito/Real-Time-Captioning"
            style={{ backgroundColor: '#262626' }}
            imgSrc={rtc}
          />
          <Project
            description={desc.noteroom}
            techProp={['Laravel', 'Node.js', 'Socket.io', 'MySQL']}
            projectName="NoteRoom"
            projLink="https://github.com/novellito/NoteRoom"
            style={{ backgroundColor: '#00a0ff' }}
            imgSrc={noteroom}
          />

          <Project
            description={desc.todoApp}
            techProp={['MongoDb', 'Express.js', 'React.js', 'Node.js']}
            projectName="Todo App"
            projLink="https://github.com/novellito/Web-Engineering"
            style={{ backgroundColor: 'white' }}
            imgSrc={todo}
          />
          <Project
            description={desc.vueChat}
            techProp={['MongoDb', 'Express.js', 'Vue.js', 'Node.js']}
            projectName="Vuetiful Chat"
            projLink="https://github.com/novellito/Web-Engineering/tree/master/chat-app"
            style={{ backgroundColor: '#1b1b1b' }}
            imgSrc={chat}
          />
          <Project
            description={desc.triniBot}
            techProp={['Node.js', 'Twitter API', 'Handlebars']}
            projectName="TriniBot"
            projLink="https://github.com/novellito/TriniBot"
            style={{ backgroundColor: 'rgba(251,168,15,.65)' }}
            imgSrc={twitterBot}
          />
          <Project
            description={desc.voitcha}
            techProp={['Java', 'Google API']}
            projectName="Voitcha"
            projLink="https://github.com/novellito/CSUN-Accessibility-Competition-Project"
            style={{ backgroundColor: '#b94848' }}
            imgSrc={voitcha}
          />
          <Project
            description={desc.dlTech}
            techProp={['Electron', 'Selenium', 'Chrome Extension']}
            projectName="Distance Learning Tools"
            projLink="https://github.com/novellito/Tseng-Utilities"
            style={{ backgroundColor: '#607d8b  ' }}
            imgSrc={dl}
          />
          <Project
            description={desc.webV1}
            techProp={['HTML', 'CSS', 'JQuery', 'Bootstrap']}
            projectName="Website v1"
            projLink="http://novellito.github.io"
            style={{ backgroundColor: '#76AFFF ' }}
            imgSrc={web}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
