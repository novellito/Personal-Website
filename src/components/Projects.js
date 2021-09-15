import React from 'react';
import tw, { styled } from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal';

const projects = [
  {
    name: 'SnooOrganizer',
    tech: ['Next.js', 'Serverless', 'Node.js'],
    description:
      'Created to keep my React skills sharp since my current job mainly uses Angular. This project gave me exposure to Reddits API as well as the Serverless framework.',
    url: 'https://github.com/novellito/snooOrganizer',
    aria: 'link to my project NnooOrganizer',
  },
  {
    name: 'The Next.js Starter',
    tech: ['Next.js', 'Redux', 'Typescript'],
    description:
      "A boilerplate Next.js project. There weren't any good starter projects at the time so I decided to create my own. The project curently has 15 stars and 5 forks on Github 😁. ",
    url: 'https://github.com/novellito/the-nextjs-starter',
    aria: 'link to my project The Next.js Starter',
  },
  {
    name: 'Clout Companion',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Docker'],
    description:
      "A profit & sales manager for resellers on popular sites such as StockX or Grailed. It's also a platform with tools and guides to help aspiring resellers. This app uses Docker so that it's easy to setup.",
    url: 'https://github.com/novellito/Clout-Companion',
    aria: 'link to my project Clout Companion',
  },
];
const ProjectsContainer = styled.section`
  h1 {
    color: white;
    text-align: center;
  }
  padding: 0 50px 30px;
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    .card {
      background-color: #282a36;
      box-shadow: 0 3px 0 #6272a4;
      margin: 20px;
    }
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const GitLink = styled.a`
  color: white;
  background-color: hsl(0deg 0% 20%);
  text-align: center;
  ${tw`text-xl leading-10 w-10 h-10 rounded-full inline-block mr-2`}
  &:hover {
    box-shadow: 0 5px 15px #333;
    transition: all 0.2s ease-in-out;
  }
`;

const Projects = () => {
  return (
    <Fade duration={1700} triggerOnce>
      <ProjectsContainer id="projects">
        <h1>Projects</h1>
        <div className="cards-container" tw="relative">
          {projects.map((project, key) => (
            <div className="card" tw="rounded overflow-hidden " key={key}>
              <div tw="px-6 pt-8 pb-4">
                <div tw="font-bold text-xl mb-2 text-white">
                  <GitLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.aria}
                  >
                    <FontAwesomeIcon className="themeToggler" icon={faGithub} />
                  </GitLink>
                  {project.name}
                </div>
                <p tw="text-gray-300 text-base">{project.description}</p>
              </div>
              <div tw="px-6 pb-4">
                {project.tech.map((techItem, techKey) => (
                  <span
                    key={techKey}
                    tw="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p tw="text-white text-center">
          More projects can be found on my{' '}
          <a
            href="https://github.com/novellito"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
            tw="text-blue-500 no-underline"
            aria-label="link github profile"
          >
            github
          </a>{' '}
          page.
        </p>
      </ProjectsContainer>
    </Fade>
  );
};

export default Projects;
