import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const ContainerHOC = props => (
  <Container>
    <div className="container">{props.children}</div>
  </Container>
);
export default ContainerHOC;
