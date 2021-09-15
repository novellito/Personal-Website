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

const IndexPage = () => (
  <>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Christian Trinidad's portfolio website."
      />
      <title>Christian Trinidad</title>
    </Helmet>
    <div>
      <Navbar />
      <MiniNav />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  </>
);

export default IndexPage;
