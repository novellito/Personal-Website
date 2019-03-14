import React from 'react';
import styled from 'styled-components';
import nbc from '../assets/nbc.png';
import csun from '../assets/csun-seal.png';
import lees from '../assets/lees.png';

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  bluePrimary,
  blueSecondary,
  white,
  blueTertiary,
  primaryTextColor
} from '../colors';

const Wrapper = styled.section`
  background: ${blueTertiary};

  .vertical-timeline::before {
    top: unset;
  }

  h1 {
    color: ${primaryTextColor};
    margin-top:0;
    padding-top: 2em;
  }

  /* .vertical-timeline-element-content {
    width: 45% !important; /* resolves issue with aligning date */
  } */
`;
const Experience = props => {
  return (
    <Wrapper>
      <h1>Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2018 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img src={nbc} alt="" />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2017 - May 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<i className="fa fa-download" />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2017 - July 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<i className="fa fa-download" />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2014 - April 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<i className="fa fa-download" />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<i className="fa fa-download" />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Wrapper>
  );
};

export default Experience;
