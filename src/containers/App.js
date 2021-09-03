import React, { Component } from 'react';
import styled from 'styled-components';
import wip from '../assets/wip.svg';
import resume from '../assets/christianTrinidad_Resume.pdf';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .text {
    padding: 0 40px;
  }
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <div className="text">
          <h1>Hi there! 👋 </h1>
          <p>
            My site is being updated but you can still find my latest résumé{' '}
            <a href={resume} target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        </div>
        <img className="wip" alt="site is being updated" src={wip} />
      </Wrapper>
    );
  }
}

export default App;
