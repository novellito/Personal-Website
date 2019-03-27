import React from 'react';
import { blueSecondary, white, primaryTextColor } from '../../colors';
import styled from 'styled-components';
import Terminal from './Terminal';

const Wrapper = styled.div`
  min-width: 100%;
  .thumbnail {
    background-color: aquamarine;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffffdb;
    height: 250px;
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
    p {
      margin: 10px 0;
      font-weight: bold;
      font-size: 1.2em;
      color: ${primaryTextColor};
      &.project-description {
        font-size: 0.9em;
        text-align: left;
        color: #5a5d7ade;
      }
    }
    .project-info {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
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
  .card {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26),
      0 12px 10px 0 rgba(0, 0, 0, 0.2);
    overflow: auto;
  }
  @media screen and (min-width: 768px) {
    .card-body {
      height: 200px;
    }
    .card-body p.project-description {
      font-size: 0.8em;
    }
  }
  @media screen and (min-width: 960px) {
    .card-body p.project-description {
      font-size: 1em;
    }
  }
`;
const Project = props => {
  return (
    <Wrapper>
      <Terminal />
      <div className="card">
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
    </Wrapper>
  );
};

export default Project;
