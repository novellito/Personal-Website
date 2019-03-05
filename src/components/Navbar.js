import React from 'react';
import styled from 'styled-components';
import { white, primaryTextColor } from '../colors';
const duration = '.2s';
const distance = '8px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

const Nav = styled.nav`
  ul {
    position: absolute;
    color: ${primaryTextColor};
    z-index:1;
    top: 40px;
    left: 0;
    right: 0;
    list-style-type: none;
}
    li {
      display: inline-block;
      margin: 0 20px;
    }
  }
  a {
    font-size: 1.2em;
    font-weight: 600;
    color: ${primaryTextColor};
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    padding-bottom:8px;

    /* Underline effect styles */
     &:before,
      &:after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0; right: 0;
          height: 3px;
          background-color: ${white};
      }
      &:before {
          opacity: 0;
          transform: translateY(- distance);
          transition: transform 0s ${easeOutBack}, opacity 0s;
      }
      &:after {
          opacity: 0;
          transform: translateY(${distance}/2);
          transition: transform ${duration} ${easeOutBack}, opacity ${duration};
      }
      &:hover,
      &:focus {
          &:before,
          &:after {
              opacity: 1;
              transform: translateY(0);
          }
          &:before {
              transition: transform ${duration} ${easeOutBack}, opacity ${duration};
          }
          &:after {
              transition: transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration};
          }
      }
`;

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Résumé</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
