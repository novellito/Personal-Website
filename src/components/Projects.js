import React from 'react';
import snapcode from '../assets/snapcode.png';
import styled from 'styled-components';
import { bluePrimary, blueSecondary, white } from '../colors';
const Wrapper = styled.section``;
const Projects = props => {
  return (
    <Wrapper>
      <ul className="ul-container">
        <li>
          <a
            href="https://twitter.com/novellit0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/christian.n.trinidad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cnovellito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-instagram" />
          </a>
        </li>
        <li>
          <a href={snapcode} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-2x fa-snapchat" />
          </a>
        </li>
      </ul>
      <span className="love">
        Made with <i className="fa fa-heart" />
      </span>
    </Wrapper>
  );
};

export default Projects;
