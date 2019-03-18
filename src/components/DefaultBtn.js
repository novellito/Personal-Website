import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
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
    &:hover {
      background: ${props => props.borderColor};
      color: ${props => props.btnColor};
    }
  }
`;

const DefaultBtn = props => {
  return (
    <>
      {props.link ? (
        <Container
          btnColor={props.btnColor}
          borderColor={props.borderColor}
          className={props.classname}
        >
          <Link to={props.link} rel="noopener noreferrer">
            {props.content}
          </Link>
        </Container>
      ) : (
        <Container
          btnColor={props.btnColor}
          borderColor={props.borderColor}
          className={props.classname}
          // href={props.href}
        >
          <a href={props.href} target="_blank" rel="noopener noreferrer">
            {props.content}
          </a>
        </Container>
      )}
    </>
  );
};

export default DefaultBtn;
