import React from 'react';
import { styled } from 'twin.macro';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { StaticImage } from 'gatsby-plugin-image';

const primaryTextColor = 'white';
const white = 'white';

const Wrapper = styled.section`
  padding: 30px 20px;
  h1 {
    color: ${primaryTextColor};
    font-size: 1.75em;
  }
  /* Timeline vertical line */
  .vertical-timeline {
    &::before {
      top: unset;
      height: 70%;
    }
  }
  /* TODO: update on light theme */
  .vertical-timeline-element-icon {
    background: ${white};
    box-shadow: 0 0 0 4px #fff, inset 0 0px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  .nbc {
    position: relative;
    top: 7px;
  }

  .dl-apps {
    &:hover {
      color: #82b1ff96;
      transition: 0.3s;
    }
  }

  .vertical-timeline-element-content {
    background-color: #282a36;
    color: white;
    box-shadow: 0 3px 0 #6272a4;
  }
  .vertical-timeline-element-content-arrow {
    border-right: 7px solid #6272a4;
  }
  .vertical-timeline-element-subtitle {
    color: hsl(0deg 0% 80%);
  }
  /* Override timeline styles to fix date position issues */
  @media only screen and (min-width: 1170px) {
    .vertical-timeline--two-columns
      .vertical-timeline-element-content
      .vertical-timeline-element-date {
      color: white;
    }
  }
`;

const Experience = () => {
  return (
    <Wrapper>
      <h1 tw="text-center">Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="July 2018 - present"
          icon={
            <StaticImage
              src="../images/nbc.png"
              alt="NBCUniversal"
              className="nbc"
              placeholder="blurred"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">NBCUniversal</h4>
          <p>
            Currently the frontend lead for an app used to manage contracts for
            the Peacock streaming service. I've also been responsible for
            handling deployments and managing our resources in AWS.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="April 2017 - May 2018"
          icon={
            <StaticImage
              src="../images/csun.png"
              alt="csun job1"
              placeholder="blurred"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer & Tech Support Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CSUN Distance Learning Center
          </h4>
          <p>
            I created
            <a
              tw="text-blue-500 no-underline"
              href="https://github.com/novellito/Tseng-Utilities"
              rel="noopener noreferrer"
              target="_blank"
              className="dl-apps"
            >
              {' '}
              two apps{' '}
            </a>
            that simplified faculty workflows. I also facilitated one on one
            trainings with professors regarding school software and conducted qa
            checks on our sites for accessibility.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="April 2017 - July 2017"
          icon={
            <StaticImage
              src="../images/csun.png"
              alt="csun job2"
              placeholder="blurred"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            CSUN Career Center
          </h4>
          <p>
            I created content for my university's career center using various
            web technologies and also assisted our graphic designers in planning
            layouts for our sites.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Wrapper>
  );
};

export default Experience;
