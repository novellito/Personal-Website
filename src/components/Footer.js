import React from 'react';
import { styled } from 'twin.macro';
import HeroLinks from './HeroAvatar/HeroLinks';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.footer`
  text-align: center;
  padding: 30px 0 10px;
  background-color: #282a36;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 1.5rem;
  }
  p {
    color: white;
  }
`;
export const Footer = () => {
  return (
    <Wrapper>
      <HeroLinks />
      <p>
        Made with{' '}
        <FontAwesomeIcon
          tw="text-red-400"
          className="themeToggler"
          icon={faHeart}
        />{' '}
        by Christian Trinidad
      </p>
    </Wrapper>
  );
};
export default Footer;
