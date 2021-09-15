import React from 'react';
import tw, { styled } from 'twin.macro';
import HeroAvatar from './HeroAvatar/HeroAvatar';
import HeroLinks from './HeroAvatar/HeroLinks';
import resume from '../data/christianTrinidad_Resume.pdf';
import { Fade } from 'react-awesome-reveal';

const HeroSection = styled.section`
  ${tw`md:flex items-center`}
  ${tw`mx-auto`}
  ${tw`mt-8`}
  ${tw`max-w-screen-md md:max-w-screen-lg 2xl:max-w-screen-xl`}
  /* TODO: make height more responsive */
  /* max-height: 700px; */
  /* height: 100vh; */
  .avatar svg {
    max-width: 100%;
    height: auto;
  }
  color: white;
  .resume-btn {
    display: inline-block;
    text-decoration: none;
    color: white;
    padding: 15px 15px;
    margin-top: 25px;
    margin-bottom: 20px;
    border-radius: 4px;
    width: 140px;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
    ${tw`bg-blue-600 h-auto font-bold border-0`}
    &:hover {
      box-shadow: 0 5px 15px #3b82f6;
    }
  }
  p {
    color: hsl(0deg 0% 55%);
  }
`;

const Hero = () => {
  return (
    <Fade duration={1700} triggerOnce>
      <HeroSection>
        <div className="intro" tw="p-5 md:p-10 text-center md:flex-1">
          <h1 tw="m-0 text-4xl md:text-left md:text-6xl">Hello! 👋</h1>
          <p tw="text-xl md:text-left md:text-2xl">
            I'm <span tw="text-blue-500">Christian Trinidad.</span> A Software
            Engineer with a passion for tech 😎. Always learning.
          </p>
          <HeroLinks />
          <div className="btn-container" tw="md:flex">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              aria-label="link to my resume"
            >
              Résumé
            </a>
          </div>
        </div>
        <div className="avatar" tw="md:flex-1">
          <HeroAvatar />
        </div>
      </HeroSection>
    </Fade>
  );
};

export default Hero;
