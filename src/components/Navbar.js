import React from 'react';
import styled from 'styled-components';
const $red = '#F37272';
const $brown = '#584E4A';

const $duration = '.2s';
const $distance = '8px';
const $easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    text-align: center;
    margin-top: 10%;

    li {
      display: inline-block;
      margin: 0 20px;
    }
  }
  a {
    font-size: 20px;
    color: ${$brown};
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    padding-bottom: 8px;
  
     &:before,
      &:after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0; right: 0;
          height: 2px;
          background-color: ${$red};
      }
      &:before {
          opacity: 0;
          transform: translateY(- $distance);
          transition: transform 0s ${$easeOutBack}, opacity 0s;
      }
      &:after {
          opacity: 0;
          transform: translateY(${$distance}/2);
          transition: transform ${$duration} ${$easeOutBack}, opacity ${$duration};
      }
      &:hover,
      &:focus {
          &:before,
          &:after {
              opacity: 1;
              transform: translateY(0);
          }
          &:before {
              transition: transform ${$duration} ${$easeOutBack}, opacity ${$duration};
          }
          &:after {
              transition: transform 0s ${$duration} ${$easeOutBack}, opacity 0s ${$duration};
          }
      }
`;
const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="#">Lorem</a>
        </li>
        <li>
          <a href="#">Ipsum</a>
        </li>
        <li>
          <a href="#">Dolor sit</a>
        </li>
        <li>
          <a href="#">Amet</a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
