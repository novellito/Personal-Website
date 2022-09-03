import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/HeroLinks.module.scss';
import { HeroLink } from '@/constants/types';

const HeroAnchor = (props: HeroLink) => {
  return (
    <a
      className={`text-white text-xl leading-10 w-10 h-10 rounded-full inline-block mx-1 ${
        styles.link
      } ${styles[`${props.cssClass}`]}`}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.aria}
    >
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};

const links: HeroLink[] = [
  {
    url: 'https://github.com/novellito',
    icon: faGithub,
    cssClass: 'github--link',
    aria: 'my github profile',
  },
  {
    url: 'https://www.linkedin.com/in/cntrinidad/',
    icon: faLinkedinIn,
    cssClass: 'linkedin--link',
    aria: 'my linkedin profile',
  },
  {
    url: 'mailto:cntrinidad@gmail.com',
    icon: faEnvelope,
    cssClass: 'email--link',
    aria: 'send an email to me',
  },
];

const HeroLinks = ({ linkGap = 'gap-x-1' }) => {
  return (
    <div className={`md:flex ${linkGap}`}>
      {links.map((link, key) => (
        <HeroAnchor
          key={key}
          url={link.url}
          cssClass={link.cssClass}
          aria={link.aria}
          icon={link.icon}
        ></HeroAnchor>
      ))}
    </div>
  );
};

export default HeroLinks;
