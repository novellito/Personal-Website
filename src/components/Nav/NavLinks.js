import React from 'react';
import { Link } from 'gatsby';
import resume from '../../data/christianTrinidad_Resume.pdf';

const NavLinks = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="#about">About</Link>
        </li>

        <li>
          <Link to="#skills">Skills</Link>
        </li>
        <li>
          <Link to="#experience">Experience</Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to my resume"
          >
            Résumé
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
