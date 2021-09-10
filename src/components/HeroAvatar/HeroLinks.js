import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import tw, { styled } from 'twin.macro';

const HeroLinksContainer = styled.div``;
const HeroAnchor = styled.a`
  color: white;
  background-color: ${(props) => props.color};
  ${tw`text-xl leading-10 w-10 h-10 rounded-full inline-block mx-1`}
  &:hover {
    box-shadow: ${(props) => props.shadow};
    transition: all 0.2s ease-in-out;
  }
`;

const links = [
  {
    color: 'hsl(0deg 0% 20%);',
    url: 'https://github.com/novellito',
    icon: faGithub,
    shadow: '0 5px 15px #333;',
  },
  {
    color: 'hsl(199deg 85% 36%);',
    url: 'https://www.linkedin.com/in/cntrinidad/',
    icon: faLinkedinIn,
    shadow: '0 5px 15px #0e76a8;',
  },
  {
    color: 'hsl(349deg 75% 57%);',
    url: 'mailto:cntrinidad@gmail.com',
    icon: faEnvelope,
    shadow: '0 5px 15px #e4405f;',
  },
];

const HeroLinks = () => {
  return (
    <HeroLinksContainer tw="md:flex">
      {links.map((link, key) => (
        <HeroAnchor
          key={key}
          href={link.url}
          color={link.color}
          shadow={link.shadow}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="themeToggler" icon={link.icon} />
        </HeroAnchor>
      ))}
    </HeroLinksContainer>
  );
};

export default HeroLinks;
