import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {
  Typescript,
  Html,
  Sass,
  Python,
  Java,
  Angular,
  ReactLogo,
  Jquery,
  NodeJs,
  GraphQL,
  MySQL,
  Mongo,
  Terraform,
  Selenium,
  Docker,
  Aws,
  Github,
  Jira,
  Figma,
} from '@/components/ui/Logos';

const Skills = () => {
  return (
    <Fade duration={1700} triggerOnce>
      <section id="skills" className="py-6 px-8 md:px-16 text-center">
        <div
          className="card bg-white dark:bg-[#282a36] shadow-[0_3px_0_#6272a4] p-6 
                        rounded bg-[url('/blob_sm.svg')] md:bg-[url('/blob_md.svg')] lg:bg-[url('/blob_lg.svg')] 
                        bg-cover	bg-no-repeat"
        >
          <h1 className="m-7">Skills</h1>
          <p className="text-lg">Languages</p>
          <div className="p-4 flex justify-center gap-4">
            <Typescript />
            <Html />
            <Sass />
            <Python />
            <Java />
          </div>
          <p className="text-lg mt-4">Frontend/Backend</p>
          <div className="p-4 flex justify-center gap-4 flex-wrap">
            <Angular />
            <ReactLogo />
            <Jquery />
            <NodeJs />
            <GraphQL />
            <MySQL />
            <Mongo />
          </div>
          <p className="text-lg mt-4">DevOps</p>
          <div className="p-4 flex justify-center gap-4">
            <Aws />
            <Docker width="90px" height="90px" />
            <Terraform />
          </div>
          <p className="text-lg mt-4">Tools</p>
          <div className="p-4 flex justify-center gap-4">
            <Github />
            <Figma />
            <Jira />
            <Selenium />
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Skills;
