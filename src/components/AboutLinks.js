import React from 'react';

const AboutLinks = () => (
  <>
    <a
      href="https://github.com/novellito"
      target="_blank"
      alt="my github"
      rel="noopener noreferrer"
    >
      <i
        className="fa fa-github "
        data-toggle="tooltip"
        data-placement="top"
        title="View my GitHub"
      />
    </a>
    <a
      href="mailto:cntrinidad@gmail.com"
      alt="email me"
      rel="noopener noreferrer"
    >
      <i
        className="fa fa-envelope"
        data-toggle="tooltip"
        data-placement="top"
        title="Email Me"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/christian-trinidad07/"
      alt="my linked in"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        className="fa fa-linkedin-square social-ink"
        data-toggle="tooltip"
        data-placement="top"
        title="View my LinkedIn"
        rel="noopener noreferrer"
      />
    </a>
  </>
);

export default AboutLinks;
