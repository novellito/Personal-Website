import React from 'react';
import styled from 'styled-components';
import { white, primaryTextColor } from '../../colors';
import NavLinks from './NavLinks';

const duration = '.2s';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
const Nav = styled.nav`
  ul {
    position: absolute;
    color: ${primaryTextColor};
    z-index: 1;
    top: 40px;
    left: 0;
    right: 0;
  }
  li {
    display: inline-block;
    margin: 0 20px;
  }
  a {
    font-size: 1.2em;
    font-weight: 600;
    color: ${primaryTextColor};
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
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
      background-color: ${white};
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
    <Nav>
      <NavLinks />
    </Nav>
  );
};

export default Navbar;
