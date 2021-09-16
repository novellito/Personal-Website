import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
body, html, #___gatsby,
#gatsby-focus-wrapper {
    transition: all 0.50s linear;
    background-color: ${({ theme }) => theme.body};
}

h1 {
    color:${({ theme }) => theme.h1};
    transition: all 0.50s linear;
}
#navlinks {
    a {
        color:${({ theme }) => theme.navlinks};
        transition: all 0.50s linear;

    }
}

#about {
    background:${({ theme }) => theme.aboutBg};
    transition: all 0.50s linear;
    p {
        color:${({ theme }) => theme.aboutMeParagraph};
        transition: all 0.50s linear;
    }

}

#experience {
    background: ${({ theme }) => theme.experienceBG};
    transition: all 0.50s linear;
    p,
    .vertical-timeline-element-title,
    .vertical-timeline-element-subtitle,
    .vertical-timeline-element-date {
        color: ${({ theme }) => theme.paragraph};
        transition: all 0.50s linear;
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
        transition: all 0.50s linear;
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
    .project-name, p {
        color: ${({ theme }) => theme.paragraph}; 
        transition: all 0.50s linear;
    }
}

footer {
    background: ${({ theme }) => theme.footerBG};
    transition: all 0.50s linear;
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
            background: #DC2626;
        }
    }
}

.avatar-shoes {
    fill: ${({ theme }) => theme.avatarShoes};
}
`;
