import React, { Component } from 'react';
import './App.css';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import MiniNav from '../components/MiniNav';

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
