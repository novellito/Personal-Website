import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Fade } from 'react-awesome-reveal';

const projects = [
  {
    name: 'Keisan Barbell',
    tech: ['Next.js', 'Zustand', 'Framer Motion'],
    description:
      'A calculator to help you load the proper weights on a barbell. Created to gain more exposure with new technologies.',
    url: 'https://keisanbarbell.vercel.app/',
    aria: 'link to my project Keisan Barbell',
    icon: faEye,
  },
  {
    name: 'SnooOrganizer',
    tech: ['Next.js', 'Serverless', 'Node.js'],
    description:
      'Created to keep my React skills sharp since my job at NBC mainly used Angular. This project gave me exposure to Reddits API as well as the Serverless framework.',
    url: 'https://github.com/novellito/snooOrganizer',
    aria: 'link to my project NnooOrganizer',
    icon: faGithub,
  },
  {
    name: 'The Next.js Starter',
    tech: ['Next.js', 'TailwindCSS', 'Typescript'],
    description:
      "A boilerplate Next.js project. There weren't any good starter projects at the time so I decided to create my own. The project curently has 20 stars and 7 forks on Github 😁. ",
    url: 'https://github.com/novellito/the-nextjs-starter',
    aria: 'link to my project The Next.js Starter',
    icon: faGithub,
  },
  {
    name: 'Clout Companion',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Docker'],
    description:
      "A profit & sales manager for resellers on popular sites such as StockX or Grailed. It's also a platform with tools and guides to help aspiring resellers. This app uses Docker so that it's easy to setup.",
    url: 'https://github.com/novellito/Clout-Companion',
    aria: 'link to my project Clout Companion',
    icon: faGithub,
  },
];

const Projects = () => {
  return (
    <Fade duration={1700} triggerOnce>
      <section id="projects" className="pb-4 px-8">
        <h1 className="text-center m-4">Projects</h1>
        <div className="grid md:grid-cols-2">
          {projects.map((project, key) => (
            <div
              className="bg-[white] dark:bg-[#282a36] shadow-[0_3px_0_#6272a4] m-5 rounded overflow-hidden "
              key={key}
            >
              <div className="px-6 pt-8 pb-4">
                <div className="font-bold text-xl mb-2 text-white">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.aria}
                    className="bg-[#333] text-center text-xl leading-10 w-10 h-10 rounded-full inline-block mr-2 hover:shadow-[0_5px_15px_#333] duration-200"
                  >
                    <FontAwesomeIcon
                      className="themeToggler"
                      icon={project.icon}
                    />
                  </a>
                  <p className="inline-block text-[#1f2933] dark:text-white">
                    {project.name}
                  </p>
                </div>
                <p className="dark:text-gray-300 text-[#1f2933] text-base my-5">
                  {project.description}
                </p>
              </div>
              <div className="px-6 pb-4">
                {project.tech.map((techItem, techKey) => (
                  <p
                    key={techKey}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2"
                  >
                    {techItem}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-lg my-8">
          More projects can be found on my{' '}
          <a
            href="https://github.com/novellito"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 duration-200 text-blue-800 dark:text-blue-400 font-bold no-underline"
            aria-label="link to my github profile"
          >
            github
          </a>{' '}
          page.
        </p>
      </section>
    </Fade>
  );
};

export default Projects;
