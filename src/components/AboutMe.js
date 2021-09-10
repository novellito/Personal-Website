import React from 'react';
import tw, { styled } from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';

const AboutMeContainer = styled.section`
  background-color: #282a36;
  h1 {
    color: white;
  }
  p {
    color: hsl(0deg 0% 80%);
    line-height: 1.4rem;
  }
  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    /* grid-area: img; */
    /* box-shadow: 0 0 7px rgba(0, 0, 0, 0.4); */
  }
  .about-text {
    /* grid-column: 2; */
    /* grid-area: text; */
  }

  display: grid;
  align-items: center;
  justify-items: center;
  padding: 30px 70px;
  grid-template-columns: 1fr;
  /* grid-template-areas: 'img text '; */

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    /* grid-template-areas: 'text img'; */
  }
`;
const AboutMe = () => {
  return (
    <AboutMeContainer className="main">
      {/* <AboutMeContainer className="main" tw="grid grid-cols-1 "> */}
      <div className="about-text">
        <h1 tw="text-center md:text-left">Who Am I?</h1>
        <p tw="text-center md:text-left">
          I'm a Software Engineer with 4 years of experience developing web
          applications. I received my computer science degree from California
          State University Northridge. Outside the world of programming, I enjoy
          working out, eating, and growing my keyboard collection.
        </p>
      </div>
      <StaticImage
        src="./xtian.jpg"
        alt="picture of me"
        // width={200}
        // height={200}
      />
    </AboutMeContainer>
  );
};

export default AboutMe;
