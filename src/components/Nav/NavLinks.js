import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import resume from '../../assets/christianTrinidad_Resume2018.pdf';
const NavLinks = props => {
  return (
    <>
      <ul>
        <li>
          <Link to="/#aboutSection">About</Link>
        </li>
        <li>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </li>
        <li>
          <Link to="/#skillSection">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
