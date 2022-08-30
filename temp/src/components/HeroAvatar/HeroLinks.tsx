import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/herolinks.module.scss';

const HeroAnchor = (props: any) => {
  return (
    <a
      className={`text-white text-xl leading-10 w-10 h-10 rounded-full inline-block mx-1 ${
        styles.link
      } ${styles[`${props.class}`]}`}
      href={props.href}
      style={{ backgroundColor: props.bgColor }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.aria}
    >
      {props.children}
    </a>
  );
};
const links = [
  {
    url: 'https://github.com/novellito',
    icon: faGithub,
    class: 'github--link',
    aria: 'my github profile',
  },
  {
    url: 'https://www.linkedin.com/in/cntrinidad/',
    icon: faLinkedinIn,
    class: 'linkedin--link',
    aria: 'my linkedin profile',
  },
  {
    url: 'mailto:cntrinidad@gmail.com',
    icon: faEnvelope,
    class: 'email--link',
    aria: 'send an email to me',
  },
];

const HeroLinks = () => {
  return (
    <div className="md:flex">
      {links.map((link, key) => (
        <HeroAnchor
          key={key}
          href={link.url}
          class={link.class}
          aria={link.aria}
        >
          <FontAwesomeIcon icon={link.icon} />
        </HeroAnchor>
      ))}
    </div>
  );
};

export default HeroLinks;
