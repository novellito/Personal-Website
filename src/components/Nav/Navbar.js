import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import { Fade } from 'react-awesome-reveal';
const duration = '.2s';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
const Nav = styled.nav`
  ul {
    margin: 60px 0;
    text-align: center;
  }
  li {
    display: inline-block;
    margin: 0 20px;
  }
  a {
    font-size: 1.2em;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    padding-bottom: 8px;
    /* Underline effect */
    &:before,
    &:after {
      content: '';
      position: absolute;
      opacity: 0;
      left: 0;
      right: 0;
      bottom: 2px;
      height: 3px;
      background-color: #2563eb;
    }
    &:hover,
    &:focus {
      &:before,
      &:after {
        opacity: 1;
      }
      &:before {
        transition: transform ${duration} ${easeOutBack}, opacity ${duration};
      }
      &:after {
        transition: transform 0s ${duration} ${easeOutBack},
          opacity 0s ${duration};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }

  /* for devices in landscape mode */
  @media only screen and (max-height: 420px) and (orientation: landscape) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Fade direction="up" duration={1200} triggerOnce>
      <Nav>
        <NavLinks />
      </Nav>
    </Fade>
  );
};

export default Navbar;
