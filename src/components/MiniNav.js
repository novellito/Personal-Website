import React from 'react';
import styled from 'styled-components';
import { white, primaryTextColor } from '../colors';
const duration = '.2s';
const distance = '8px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

const Nav = styled.div`
  .mobile-menu-container {
    background-color: rgb(31, 31, 31);
    display: none;
    position: fixed;
    bottom: 15px;
    right: 15px;
    border-radius: 50%;
    z-index: 2;

    .mobile-menu ul li {
      text-align: right;
      margin: 15px 0px;

      a {
        color: rgb(255, 255, 255);
        text-transform: uppercase;
        opacity: 0;
        transition: opacity 0.7s ease-in-out 0s;
        /* &.open {
            
        } */
      }
    }
    .mobile-menu button {
      background-color: rgb(31, 31, 31);
      height: 52px;
      width: 52px;
      text-align: center;
      position: fixed;
      bottom: 14px;
      right: 14px;
      z-index: 100;
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      border-radius: 50%;
      padding: 0px;
    }
    .line {
      background-color: rgb(255, 255, 255);
      display: block;
      height: 2px;
      width: 20px;
      margin: 4px auto;
      transition: transform 0.3s ease-in-out 0s,
        -webkit-transform 0.3s ease-in-out 0s;
    }
  }

  .mobile-menu-container.open nav.mobile-menu ul li a {
    opacity: 1;
  }

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0.2em 0px;
  }
  nav.mobile-menu ul {
    visibility: hidden;
    position: fixed;
    right: 15px;
    bottom: 65px;
    z-index: 100;
    transform: translateY(10px);
    transition: transform 0.5s ease-in-out 0s,
      -webkit-transform 0.5s ease-in-out 0s;
  }
  @media only screen and (max-width: 1023px) {
    .mobile-menu-container {
      display: block;
    }
  }

  .mobile-menu-container .circle {
    background-color: rgb(31, 31, 31);
    z-index: 99;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out 0s;
  }
  .mobile-menu-container.open .circle {
    transform: translateX(50px) scale(9);
  }
  .mobile-menu-container.open .mobile-menu ul {
    visibility: visible;
    transform: translateY(0px);
  }
`;

const MiniNav = () => {
  const handleClick = () => {
    const elem = document.getElementsByClassName('mobile-menu-container');
    elem[0].classList.toggle('open');
  };

  return (
    <Nav>
      {/* // <Nav onClick={() => handleClick()} className="mobile-menu-container"> */}
      <div onClick={() => handleClick()} className="mobile-menu-container">
        <nav className="mobile-menu">
          <ul>
            <li>
              <a aria-current="page" className="" href="/">
                About
              </a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <button>
            <span className="line line-top" />
            <span className="line line-bottom" />
          </button>
        </nav>
        <div className="circle" />
      </div>
    </Nav>
  );
};

export default MiniNav;
