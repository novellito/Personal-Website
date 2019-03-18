import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  cursor: pointer;
  background-color: ${props => props.btnColor};
  color: ${props => props.borderColor};
  margin-left: auto;
  text-decoration: none;
  font-size: 0.8em;
  font-weight: 600;
  padding: 1em 2em;
  border: 1.3px solid ${props => props.borderColor};
  border-radius: 100px;
  &:hover {
    background: ${props => props.borderColor};
    color: ${props => props.btnColor};
    transition: 0.3s;
  }
`;

const DefaultBtn = props => {
  return (
    <>
      <Button
        btnColor={props.btnColor}
        borderColor={props.borderColor}
        className={props.classname}
        target="_blank"
        href={props.href}
        rel="noopener noreferrer"
      >
        {props.content}
      </Button>
    </>
  );
};

export default DefaultBtn;
