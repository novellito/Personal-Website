import React from 'react';
// import snapcode from '../assets/snapcode.png';
import styled from 'styled-components';
import { bluePrimary, blueSecondary, white } from '../../colors';
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
  height: 100vh;

  .row-cont {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 20px;
    padding-top: 40px;
    padding-bottom: 60px;
  }

  @media screen and (min-width: 768px) {
    .row-cont {
      display: grid;
      grid-template-columns: 4fr 4fr;
      grid-gap: 20px;
    }
  }
  @media screen and (min-width: 950px) {
    .row-cont {
      display: grid;
      /* grid-template-columns: 6fr 6fr; */
      grid-template-columns: 4fr 4fr 4fr;
      grid-gap: 20px;
    }
  }
`;
const Projects = props => {
  return (
    <Wrapper>
      <div id="projects">
        <h1 className="projectTitle">
          Projects <i className="fa fa-code" aria-hidden="true" />
        </h1>
        <div className="container wow rollIn">
          <div className="row-cont">
            <Project
              description={desc[0]}
              techProp={['MongoDb', 'Express.js', 'Angular', 'Node.js']}
              projectName="CSUN-CS Planner"
              projLink="https://github.com/novellito/CSUN-MEAN-App"
              style={{ backgroundColor: '#D00D2D' }}
              imgSrc={csuncs}
            />
            <Project
              description={desc[1]}
              techProp={['MySQL', 'Express.js', 'React.js', 'Node.js']}
              projectName="Scramble Dash"
              projLink="https://github.com/novellito/scramble-dash"
              imgSrc={scrambleDash}
              style={{ backgroundColor: '#36479e' }}
            />
            <Project
              description={desc[7]}
              techProp={['MongoDb', 'Express.js', 'Angular', 'Node.js']}
              projectName="Real Time Captioning"
              projLink="https://github.com/novellito/Real-Time-Captioning"
              style={{ backgroundColor: '#262626' }}
              imgSrc={rtc}
            />
            {/*<Project
              description={desc[2]}
              techProp={['Laravel 5', 'Node.js', 'Socket.io', 'MySQL']}
              projectName="NoteRoom"
              projLink="https://github.com/novellito/NoteRoom"
              style={{ backgroundColor: '#00a0ff' }}
              imgSrc={noteroom}
            />

            <Project
              description={desc[8]}
              techProp={['MongoDb', 'Express.js', 'React.js', 'Node.js']}
              projectName="Todo App"
              projLink="https://github.com/novellito/Web-Engineering"
              style={{ backgroundColor: 'white' }}
              imgSrc={todo}
            />
            <Project
              description={desc[9]}
              techProp={['MongoDb', 'Express.js', 'Vue.js', 'Node.js']}
              projectName="Vuetiful Chat"
              projLink="https://github.com/novellito/Web-Engineering/tree/master/chat-app"
              style={{ backgroundColor: '#1b1b1b' }}
              imgSrc={chat}
            />
            <Project
              description={desc[3]}
              techProp={['Node.js', 'Twitter API', 'Handlebars']}
              projectName="TriniBot"
              projLink="https://github.com/novellito/TriniBot"
              style={{ backgroundColor: 'rgba(251,168,15,.65)' }}
              imgSrc={twitterBot}
            />
            <Project
              description={desc[5]}
              techProp={['Java', 'Google API']}
              projectName="Voitcha"
              projLink="https://github.com/novellito/CSUN-Accessibility-Competition-Project"
              style={{ backgroundColor: '#b94848' }}
              imgSrc={voitcha}
            />
            <Project
              description={desc[6]}
              techProp={['Electron', 'Selenium', 'Chrome Extension']}
              projectName="Distance Learning Tools"
              projLink="https://github.com/novellito/Tseng-Utilities"
              style={{ backgroundColor: '#607d8b  ' }}
              imgSrc={dl}
            />
            <Project
              description={desc[4]}
              techProp={['HTML', 'CSS', 'JQuery', 'Bootstrap']}
              projectName="Website v1"
              projLink="http://novellito.github.io"
              style={{ backgroundColor: '#76AFFF ' }}
              imgSrc={web}
            /> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
