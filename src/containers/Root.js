import React, { Component } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

class Root extends Component {
  render() {
    return (
      <>
        <Hero />
        <About />
        <Experience />
        <Skills />
      </>
    );
  }
}

export default Root;
