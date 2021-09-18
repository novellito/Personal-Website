import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: 'Lato', sans-serif;
}

body,
html,
#___gatsby,
#gatsby-focus-wrapper {
  height: 100%;
  margin: 0px;
  padding: 0px;
  transition: all 0.5s linear;
  background-color: ${({ theme }) => theme.body};
}

h1 {
    color:${({ theme }) => theme.h1};
    transition: all 0.5s linear;
}
#navlinks {
  a {
    color:${({ theme }) => theme.navlinks};
    transition: all 0.5s linear;
  }
}

#about {
    background:${({ theme }) => theme.aboutBg};
    transition: all 0.5s linear;
  p {
    color:${({ theme }) => theme.aboutMeParagraph};
    transition: all 0.5s linear;
  }
}

#experience {
    background: ${({ theme }) => theme.experienceBG};
    transition: all 0.5s linear;
    p,
    .vertical-timeline-element-title,
    .vertical-timeline-element-subtitle,
    .vertical-timeline-element-date {
        color: ${({ theme }) => theme.paragraph};
        transition: all 0.5s linear;
    }

  .vertical-timeline-element-content {
        background-color: ${({ theme }) =>
          theme.experienceCardBackground}!important;
  }
}

#skills {
  .skills-card {
        background: ${({ theme }) => theme.skillsCardBG};
    p {
        color: ${({ theme }) => theme.paragraph};
        transition: all 0.5s linear;
    }
  }
}

#aws-logo {
    fill: ${({ theme }) => theme.paragraph};
}

#projects {
  .card {
    background: ${({ theme }) => theme.skillsCardBG};
  }
  .project-name,
  p {
    color: ${({ theme }) => theme.paragraph};
    transition: all 0.5s linear;
  }
}

footer {
    background: ${({ theme }) => theme.footerBG};
    transition: all 0.5s linear;
}

#mobile-nav {
  .mobile-menu {
        background: ${({ theme }) => theme.mobileBGColor};

    button,
    .circle {
        background: ${({ theme }) => theme.mobileBGColor};
    }

    ul li a {
        color: ${({ theme }) => theme.mobileHamburger};
    }

    .line {
      span {
        background: ${({ theme }) => theme.mobileHamburger};
      }
    }

    &.open span {
      background: #dc2626;
    }
  }
}

.avatar-shoes {
    fill: ${({ theme }) => theme.avatarShoes};
}

.theme-toggler {
    background: ${({ theme }) => theme.mobileBGColor};
}

`;
