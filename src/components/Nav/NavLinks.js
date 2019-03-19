import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';

import resume from '../../assets/christianTrinidad_Resume2018.pdf';
const NavLinks = props => {
  const { pathname } = props.location;
  return (
    <>
      <ul>
        {pathname === '/projects' ? (
          <li>
            <Link to="/">Home</Link>
          </li>
        ) : (
          ''
        )}
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
        {pathname !== '/projects' ? (
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        ) : (
          ''
        )}
      </ul>
    </>
  );
};

export default withRouter(NavLinks);
