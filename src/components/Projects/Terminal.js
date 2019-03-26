import React from 'react';
import styled from 'styled-components';

const circleMixin = (left, bgColor, borderColor) =>
  `left: ${left}px; background-color: #${bgColor}; border-color: #${borderColor}`;

const Wrapper = styled.div`
  display: flex;
  height: 25px;
  background-color: #bbb;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  .term-btn {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    top: 9px;
    ${circleMixin('6', 'ff3b47', '9d252b')}
    &.zoom {
      ${circleMixin('10', '00d742', '049931')}
    }
    &.minimize {
      ${circleMixin('8', 'ffc100', '9d802c')}
    }
  }
`;
const Terminal = props => {
  return (
    <Wrapper>
      <div className="term-btn" />
      <div className="term-btn minimize" />
      <div className="term-btn zoom" />
    </Wrapper>
  );
};

export default Terminal;
