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
    /* box-shadow: 0 0 7px rgba(0, 0, 0, 0.4); */
  }
  .about-text {
  }
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 30px 70px;
`;
const AboutMe = () => {
  return (
    <AboutMeContainer className="main">
      <div className="about-text">
        <h1 className="skills-header">Who Am I?</h1>
        <p>
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
