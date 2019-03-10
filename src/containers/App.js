import React, { Component } from 'react';
import './App.css';
import Hero from '../components/Hero';
import Navbar from '../components/Nav/Navbar';
import MiniNav from '../components/Nav/MiniNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MiniNav />
        <Navbar />
        <Hero />
      </div>
    );
  }
}

export default App;
