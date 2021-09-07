import React, { Component } from 'react';
import styled from 'styled-components';
import wip from '../assets/wip.svg';
import resume from '../assets/christianTrinidad_Resume.pdf';
import { Link } from 'react-router-dom';
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 100vh;
  .text {
    padding: 0 40px;
  }
`;

class Root extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <div className="text">
            <h1>Hi there! 👋 </h1>
            <p>
              My site is being updated but you can still view the original
              version{' '}
              <Link to={'/original'} rel="noopener noreferrer">
                here
              </Link>
            </p>
            <p>
              My latest résumé can be found{' '}
              <a href={resume} target="_blank" rel="noopener noreferrer">
                here
              </a>
            </p>
          </div>
          <img className="wip" alt="site is being updated" src={wip} />
        </Wrapper>
      </>
    );
  }
}

export default Root;
