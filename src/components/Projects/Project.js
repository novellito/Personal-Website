import React from 'react';
import {
  bluePrimary,
  blueSecondary,
  blueTertiary,
  white,
  primaryTextColor
} from '../../colors';
import styled from 'styled-components';
import Container from '../../containers/ContainerHOC';
const Wrapper = styled.section`
  height: 100vh;
  .thumbnail {
    background-color: aquamarine;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 15px; */
    color: #ffffffdb;

    /* on desktop height */
    height: 250px;
    /* align-content: center; */
    img {
      max-width: 80%;
      transition: all 0.3s;
    }
    &:hover img {
      transform: scale(1.1);
    }
  }
  .card-body {
    text-align: center;
    padding: 20px;
    background: ${white};
    height: 200px;
    p {
      margin: 10px 0;
      font-weight: bold;
      font-size: 1.2em;
      color: ${primaryTextColor};
      &.project-description {
        font-size: 1em;
        text-align: left;
        color: #5a5d7ade;
      }
    }
    .project-info {
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        color: #5998ff;
        &:hover {
          color: ${blueSecondary};
          transition: 0.3s;
        }
        margin-right: 0.2rem;
      }
      .badge-pill {
        padding: 0.3rem 0.7rem;
        margin: 0.2rem 0.2rem;
        background-color: #455a64;
        background-color: ${blueSecondary};
        text-decoration: none;
        font-size: 0.7em;
        font-weight: 600;
        border-radius: 100px;
        color: ${white};
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.16),
          0 2px 10px 0 rgba(0, 0, 0, 0.12);
      }
    }
  }

  .terminal {
    display: flex;
    box-sizing: border-box;
    height: 25px;
    position: relative;
    z-index: 1;
    background-color: #bbb;
    margin: 0 auto;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    -webkit-box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    .term-btn {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      border: 1px solid #000;
      position: relative;
      top: 9px;
      left: 6px;
      background-color: #ff3b47;
      border-color: #9d252b;
      display: inline-block;
      &.zoom {
        left: 10px;
        background-color: #00d742;
        border-color: #049931;
      }
      &.minimize {
        left: 8px;
        background-color: #ffc100;
        border-color: #9d802c;
      }
    }
  }

  .card {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26),
      0 12px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Project = props => {
  return (
    <Wrapper>
      <Container>
        <div className="terminal">
          <div className="term-btn" />
          <div className="term-btn minimize" />
          <div className="term-btn zoom" />
        </div>
        <div className="card">
          {/* <div style={props.style} className="thumbnail view overlay"> */}
          <a
            href={props.projLink}
            target="_blank"
            alt={'github link to ' + props.projectName}
            rel="noopener noreferrer"
            className="thumbnail"
            style={props.style}
          >
            <img src={props.imgSrc} alt={props.projectName} />
          </a>
          <div className="card-body">
            <p>{props.projectName}</p>
            <div className="project-info">
              <a
                href={props.projLink}
                target="_blank"
                alt={'github link to ' + props.projectName}
                rel="noopener noreferrer"
              >
                <i className="fa fa-github fa-2x" />
              </a>
              {props.techProp.map((tech, id) => {
                return (
                  <span key={id} className="badge-pill">
                    {tech}
                  </span>
                );
              })}
            </div>
            <p className="project-description">{props.description}</p>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Project;
