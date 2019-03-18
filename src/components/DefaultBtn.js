import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyLink = props => (
  <>
    {props.link ? (
      <Link
        className={props.className}
        to={props.link}
        rel="noopener noreferrer"
      >
        {props.content}
      </Link>
    ) : (
      <a
        href={props.href}
        className={props.className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.content}
      </a>
    )}
  </>
);

const StyledLink = styled(MyLink)`
  display: inline;
  cursor: pointer;
  background-color: ${props => props.btnColor};
  margin-left: auto;
  text-decoration: none;
  font-size: 0.8em;
  font-weight: 600;
  padding: 1em 2em;
  border: 1.3px solid ${props => props.borderColor};
  border-radius: 100px;
  color: ${props => props.borderColor};
  &:hover {
    background: ${props => props.borderColor};
    color: ${props => props.btnColor};
    transition: 0.3s;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const DefaultBtn = props => {
  return (
    <>
      <StyledLink
        btnColor={props.btnColor}
        borderColor={props.borderColor}
        className={props.classname}
        content={props.content}
        href={props.href}
        link={props.link}
      />
    </>
  );
};

export default DefaultBtn;
