import React from 'react';
import styled from 'styled-components';
import { white } from '../../colors';
import NavLinks from './NavLinks';

const mobileBGColor = 'rgb(31, 31, 31)';
const Nav = styled.nav`
  .mobile-menu {
    background-color: ${mobileBGColor};
    display: none;
    position: fixed;
    bottom: 15px;
    right: 15px;
    border-radius: 50%;
    z-index: 2;
    button {
      background-color: ${mobileBGColor};
      height: 57px;
      width: 57px;
      position: fixed;
      bottom: 14px;
      right: 14px;
      z-index: 1;
      border-color: ${mobileBGColor};
      border-radius: 50%;
      padding: 0px;
      &:focus {
        outline: none;
        border: none;
      }
    }
    ul {
      list-style-type: none;
      margin: 0.2em 0px;
      visibility: hidden;
      position: fixed;
      right: 20px;
      bottom: 55px;
      z-index: 1;
      transform: translateY(10px);
      transition: transform 0.5s ease-in-out 0s;
      li {
        text-align: right;
        margin: 15px 0px;
        a {
          color: ${white};
          text-transform: uppercase;
          text-decoration: none;
          opacity: 0;
          transition: opacity 0.7s ease-in-out 0s;
        }
      }
    }
    .circle {
      background-color: ${mobileBGColor};
      z-index: 1;
      height: 50px;
      width: 45px;
      border-radius: 50%;
      transition: all 0.3s ease-in-out 0s;
      box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    }
    &.open {
      ul {
        visibility: visible;
        transform: translateY(0px);
        li a {
          opacity: 1;
        }
      }
      .circle {
        transform: translateX(50px) scale(9);
      }
    }
  }

  /* hamburger & x styles */
  .line {
    color: ${white};
    width: 23px;
    height: 45px;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    span {
      position: absolute;
      height: 5px;
      width: 100%;
      display: block;
      background: ${white};
      border-radius: 9px;
      opacity: 1;
      left: 16px;
      transition: 0.25s ease-in-out;
      &:nth-child(1) {
        top: 9px;
      }
      &:nth-child(2),
      &:nth-child(3) {
        top: 20px;
      }
      &:nth-child(4) {
        top: 31px;
      }
    }

    /* x state when opened */
    &.open span {
      background: red;
      &:nth-child(1) {
        top: 20px;
        left: 27px;
        width: 0%;
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 20px;
        left: 27px;
        width: 0%;
      }
    }
  }
  @media only screen and (max-width: 768px),
    screen and (max-height: 420px) and (orientation: landscape) {
    .mobile-menu {
      display: block;
    }
  }
`;

const MiniNav = () => {
  const handleClick = () => {
    const [elem] = document.getElementsByClassName('mobile-menu');
    const [elem2] = document.getElementsByClassName('line');
    elem.classList.toggle('open');
    elem2.classList.toggle('open');
  };

  return (
    <Nav>
      <div className="mobile-menu">
        <NavLinks />
        <button onClick={() => handleClick()}>
          <div className="line">
            <span />
            <span />
            <span />
            <span />
          </div>
        </button>
        <div className="circle" />
      </div>
    </Nav>
  );
};

export default MiniNav;
