import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import '../components/reset.css';
import Experience from '../components/Experience';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Navbar from '../components/Nav/Navbar';
import MiniNav from '../components/Nav/MiniNav';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.png';
import { useDarkMode } from '../hooks/useDarkMode';
import { GlobalStyles } from '../components/GlobalStyles';
import ThemeToggler from '../components/ThemeToggler';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../constants/Theme';
/*
keeping this for future reference on how to use styled components or tailwind
shorthand
const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`;

or use the shorthand version
const Button = tw.button`
   bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`;
*/

const IndexPage = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      >
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Christian Trinidad's portfolio website."
        />
        <title>Christian Trinidad</title>
      </Helmet>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ThemeToggler toggleTheme={themeToggler} theme={theme} />
        <Navbar />
        <MiniNav />
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
