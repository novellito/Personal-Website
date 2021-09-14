import React from 'react';
import { styled } from 'twin.macro';
import { StaticImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const imageDimensions = '150px';

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

  @media (min-width: 768px) {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 250px 2fr;
  }

  .carousel-root {
    display: flex;
    justify-content: center;
    .carousel .slide {
      img {
        width: ${imageDimensions};
        height: ${imageDimensions};
        border-radius: 50%;
      }
    }
  }
`;
const AboutMe = () => {
  return (
    <AboutMeContainer id="about">
      <AboutMeConent className="main">
        <div tw="text-center">
          <h1 tw="text-center md:hidden">Who Am I?</h1>
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            swipeable={false}
            width={imageDimensions}
          >
            <StaticImage
              src="../images/me1.jpg"
              alt="a picture of me"
              placeholder="blurred"
            />
            <StaticImage
              src="../images/me2.jpg"
              alt="a picture of me"
              placeholder="blurred"
            />
            <StaticImage
              src="../images/me3.jpg"
              alt="a picture of me"
              placeholder="blurred"
            />
          </Carousel>
        </div>
        <div className="about-text">
          <h1 tw="hidden md:block text-left">Who Am I?</h1>
          <p tw="text-center md:text-left">
            I'm a Software Engineer with 3.5 years of experience developing web
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
