import React from 'react';
import { styled } from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';

const imageDimensions = '170px';
const AboutMeContainer = styled.section`
  background-color: #282a36;
  padding: 30px 70px;
  h1 {
    color: white;
    margin: 0 0 20px;
  }
`;
const AboutMeConent = styled.div`
  p {
    color: hsl(0deg 0% 80%);
    line-height: 1.4rem;
  }
  img {
    width: ${imageDimensions};
    height: ${imageDimensions};
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 2fr;
  }
`;
const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeConent className="main">
        <div tw="text-center">
          <h1 tw="text-center md:hidden">Who Am I?</h1>
          <StaticImage
            src="../images/xtian.jpg"
            alt="picture of me"
            placeholder="blurred"
          />
        </div>
        <div className="about-text">
          <h1 tw="hidden md:block text-left">Who Am I?</h1>
          <p tw="text-center md:text-left">
            I'm a Software Engineer with 4 years of experience developing web
            applications. I received my computer science degree from California
            State University Northridge. Outside the world of programming, I
            enjoy working out, eating, and growing my keyboard collection.
          </p>
        </div>
      </AboutMeConent>
    </AboutMeContainer>
  );
};

export default AboutMe;
