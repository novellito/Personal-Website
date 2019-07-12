import React from 'react';
import styled from 'styled-components';
import { primaryTextColor } from '../../utils/colors';
import csuncs from '../../assets/csuncs.png';
import scrambleDash from '../../assets/scramDash.png';
import noteroom from '../../assets/nr.png';
import twitterBot from '../../assets/bot.png';
import voitcha from '../../assets/voitcha.png';
import rtc from '../../assets/rtc.png';
import dl from '../../assets/dlTools.png';
import web1 from '../../assets/websitev1.png';
import web2 from '../../assets/websitev2.png';
import web3 from '../../assets/websitev3.png';
import todo from '../../assets/todo.jpg';
import chat from '../../assets/vueChat.png';
import boba from '../../assets/bobalish.png';
import cc from '../../assets/ccLogo.png';
import yasp from '../../assets/yasp.png';
import poker from '../../assets/PokerLogo.png';
import Project from './Project';
import desc from './Descriptions';
import { useWow } from '../../utils/wowHook';

const Wrapper = styled.section`
  margin-top: 40px;
  h1 {
    color: ${primaryTextColor};
    font-size: 1.75em;
    margin-bottom: 0;
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
    margin-top: 130px;
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
  /* For Ipads, iPhoneX & Pixel 2XL :) */
  @media only screen and (max-width: 768px),
    screen and (max-height: 1024px) and (orientation: portrait),
    screen and (min-width: 800px) and (max-height: 415px) and (orientation: landscape) {
    margin-top: 40px;
  }
`;
const Projects = props => {
  useWow();
  return (
    <Wrapper>
      <div id="projects">
        <h1>Projects</h1>
        <div className="row-cont">
          <Project
            description={desc.cloutCompanion}
            techProp={['React.js', 'Redux', 'MongoDb', 'Node.js', 'Docker']}
            projectName="Clout Companion"
            projLink="https://github.com/novellito/Clout-Companion"
            style={{ backgroundColor: 'rgb(48, 48, 48)' }}
            imgSrc={cc}
            wow="wow fadeInLeft"
          />
          <Project
            description={desc.bobalish}
            techProp={['Angular', 'GraphQL', 'PostgreSQL', 'Node.js', 'Docker']}
            projectName="Bobalish"
            projLink="https://github.com/novellito/Bobalish"
            imgSrc={boba}
            style={{ backgroundColor: '#b3e5fc' }}
            wow="wow fadeInRight"
          />
          <Project
            description={desc.yasp}
            techProp={['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Docker']}
            projectName="Yet Another Starter Pack"
            projLink="https://github.com/novellito/YASP"
            style={{ backgroundColor: '#00b5ad' }}
            imgSrc={yasp}
            wow="wow fadeInLeft"
          />
          <Project
            description={desc.poker}
            techProp={['React.js', 'Styled Components']}
            projectName="Poker Tracker"
            projLink="https://github.com/novellito/Poker-payouts"
            style={{ backgroundColor: '#51279b' }}
            imgSrc={poker}
            wow="wow fadeInRight"
          />
          <Project
            description={desc.csunCSPlanner}
            techProp={['MongoDb', 'Express.js', 'Angular', 'Node.js']}
            projectName="CSUN-CS Planner"
            projLink="https://github.com/novellito/CSUN-MEAN-App"
            live="https://mean-csun.herokuapp.com/"
            style={{ backgroundColor: '#D00D2D' }}
            imgSrc={csuncs}
            wow="wow fadeInLeft"
          />
          <Project
            description={desc.scrambleDash}
            techProp={['MySQL', 'Express.js', 'React.js', 'Node.js']}
            projectName="Scramble Dash"
            projLink="https://github.com/novellito/scramble-dash"
            live="https://scramble-dash.herokuapp.com/"
            imgSrc={scrambleDash}
            style={{ backgroundColor: '#36479e' }}
            wow="wow fadeInRight"
          />
          <Project
            description={desc.rtc}
            techProp={['MongoDb', 'Express.js', 'Angular', 'Node.js']}
            projectName="Real Time Captioning"
            projLink="https://github.com/novellito/Real-Time-Captioning"
            style={{ backgroundColor: '#262626' }}
            imgSrc={rtc}
            wow="wow fadeInLeft"
          />
          <Project
            description={desc.noteroom}
            techProp={['Laravel', 'Node.js', 'Socket.io', 'MySQL']}
            projectName="NoteRoom"
            projLink="https://github.com/novellito/NoteRoom"
            style={{ backgroundColor: '#00a0ff' }}
            imgSrc={noteroom}
            wow="wow fadeInRight"
          />

          <Project
            description={desc.todoApp}
            techProp={['MongoDb', 'Express.js', 'React.js', 'Node.js']}
            projectName="Todo App"
            projLink="https://github.com/novellito/Web-Engineering"
            style={{ backgroundColor: 'white' }}
            imgSrc={todo}
            wow="wow fadeInLeft"
          />
          <Project
            description={desc.vueChat}
            techProp={['MongoDb', 'Express.js', 'Vue.js', 'Node.js']}
            projectName="Vuetiful Chat"
            projLink="https://github.com/novellito/Web-Engineering/tree/master/chat-app"
            style={{ backgroundColor: '#1b1b1b' }}
            imgSrc={chat}
            wow="wow fadeInRight"
          />
          <Project
            description={desc.triniBot}
            techProp={['Node.js', 'Twitter API', 'Handlebars']}
            projectName="TriniBot"
            projLink="https://github.com/novellito/TriniBot"
            style={{ backgroundColor: 'rgba(251,168,15,.65)' }}
            imgSrc={twitterBot}
            wow="wow fadeInLeft"
          />
          <Project
            description={desc.voitcha}
            techProp={['Java', 'Google API']}
            projectName="Voitcha"
            projLink="https://github.com/novellito/CSUN-Accessibility-Competition-Project"
            style={{ backgroundColor: '#b94848' }}
            imgSrc={voitcha}
            wow="wow fadeInRight"
          />
          <Project
            description={desc.dlTech}
            techProp={['Electron', 'Selenium', 'Chrome Extension']}
            projectName="Distance Learning Tools"
            projLink="https://github.com/novellito/Tseng-Utilities"
            style={{ backgroundColor: '#607d8b  ' }}
            imgSrc={dl}
            wow="wow fadeInLeft"
          />
          <Project
            description={desc.webV1}
            techProp={['HTML', 'CSS', 'JQuery', 'Bootstrap']}
            projectName="Website v1"
            live="https://webv1.cntrinidad.me/"
            projLink="https://github.com/novellito/novellito.github.io"
            style={{ backgroundColor: 'grey ' }}
            imgSrc={web1}
            wow="wow fadeInRight"
          />
          <Project
            description={desc.webV2}
            techProp={['React.js']}
            projectName="Website v2"
            projLink="https://github.com/novellito/Personal-Website"
            style={{ backgroundColor: '#3b5f92 ' }}
            imgSrc={web2}
            wow="wow fadeInLeft"
          />
          <Project
            description={desc.webV3}
            techProp={['React.js', 'Styled Components']}
            projectName="Website v3"
            projLink="https://github.com/novellito/Personal-Website"
            live="https://www.cntrinidad.me/"
            style={{ backgroundColor: '#76AFFF ' }}
            imgSrc={web3}
            wow="wow fadeInRight"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
