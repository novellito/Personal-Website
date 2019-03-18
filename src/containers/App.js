import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Nav/Navbar';
import MiniNav from '../components/Nav/MiniNav';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer';
import Root from './Root';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MiniNav />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Root} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
