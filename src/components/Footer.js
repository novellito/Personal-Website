import React from 'react';
import snapcode from '../assets/snapcode.png';
import styled from 'styled-components';
import { bluePrimary, blueSecondary, white } from '../utils/colors';

const Wrapper = styled.footer`
  padding: 30px 100px;
  height: 80px;
  background-color: ${blueSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  .ul-container {
    display: flex;
    list-style: none;
    justify-content: center;
    li {
      a {
        margin: 0 25px;
        i {
          color: ${white};
          &:hover {
            color: ${bluePrimary};
            transition: 0.3s;
          }
        }
      }
      &:first-child a {
        margin-left: 0;
      }
    }
  }
  .love {
    color: ${white};
    visibility: hidden;
    i {
      color: #ff78ae;
    }
  }
  @media screen and (min-width: 766px) {
    .ul-container {
      padding-left: 0;
    }
    .love {
      margin-left: auto;
      visibility: visible;
    }
  }
`;
const Footer = props => {
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

export default Footer;
