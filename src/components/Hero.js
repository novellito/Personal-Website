import React from 'react';
import tw, { styled } from 'twin.macro';
import HeroAvatar from './HeroAvatar/HeroAvatar';

// max-width: 1370px;
// bg-blue-500 hover:bg-blue-800 text-white p-2
const HeroSection = styled.section`
  ${tw`md:flex items-center`}
  ${tw`mx-auto`}
  ${tw`mt-8`}
  ${tw`xl:max-w-screen-xl`}

  .avatar svg {
    max-width: 100%;
    height: auto;
  }
`;
// const HeroSection = tw.section`
//   flex items-center
//   mx-auto
//   mt-8
//   max-w-screen-xl
// `;
const Hero = () => {
  return (
    <HeroSection>
      <div className="intro" tw="text-center md:flex-1">
        <h1 tw="text-4xl m-0 md:text-6xl">Hello 👋.</h1>
        <p tw="md:text-xl">
          I'm Christian Trinidad. Software Engineer. An avid learner with a
          passion for tech
        </p>
      </div>
      <div className="avatar" tw="md:flex-1">
        <HeroAvatar />
      </div>
    </HeroSection>
  );
};

export default Hero;
