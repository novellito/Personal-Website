import React from 'react';
// import './Project.scss';
import styled from 'styled-components';
const Wrapper = styled.section`
  height: 100vh;
  .thumbnail {
    background-color: aquamarine;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    align-content: center;
    img {
      max-width: 80%;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .rgba-black-strong {
    background-color: rgba(0, 0, 0, 0.91);
    font-family: 'Space Mono', monospace;
  }

  a.desc-container {
    display: flex;
    padding: 15px;
    align-items: center;
    height: 100%;
    color: #ffffffdb;
  }

  .badge-pill {
    padding: 0.4rem 0.6rem;
    margin: 0.2rem 0.2rem;
    background-color: #455a64;
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
  }

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

  .card {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26),
      0 12px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;
const project = props => {
  return (
    <Wrapper>
      <div className="project">
        <div className="terminal">
          <div className="term-btn" />
          <div className="term-btn minimize" />
          <div className="term-btn zoom" />
        </div>
        <div className="card">
          <div style={props.style} className="thumbnail view overlay">
            <img src={props.imgSrc} alt={props.projectName} />
            <div className="mask rgba-black-strong">
              <a
                href={props.projLink}
                target="_blank"
                alt={'github link to ' + props.projectName}
                rel="noopener noreferrer"
                className="desc-container"
              >
                {props.description}
              </a>
            </div>
          </div>
          <div className="card-body">
            <h4 className="card-title">{props.projectName}</h4>
            {props.techProp.map((tech, id) => {
              return (
                <span key={id} className="badge badge-pill">
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default project;
