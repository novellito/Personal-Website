import React, { Component } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Navbar from '../components/Nav/Navbar';
import MiniNav from '../components/Nav/MiniNav';
import Footer from '../components/Footer';
class Landing extends Component {
  render() {
    return (
      <>
        <MiniNav />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Footer />
      </>
    );
  }
}
export default Landing;
