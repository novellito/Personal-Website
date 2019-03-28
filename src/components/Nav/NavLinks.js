import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import resume from '../../assets/christianTrinidad_Resume2018.pdf';

const NavLinks = props => {
  const { pathname } = props.location;
  useEffect(() => {
    // We do not call the setColor function for the mobile nav since it is
    // unnecessary. We set the navbar hover color white if in '/' else set to blue
    if (!props.miniNav) props.setColor(pathname);
  });
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
