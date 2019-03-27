import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Nav/Navbar';
import MiniNav from '../components/Nav/MiniNav';
import Footer from '../components/Footer';
import Root from './Root';
const Projects = lazy(() => import('../components/Projects/Projects'));

class App extends Component {
  render() {
    return (
      <>
        <MiniNav />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Root} />
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/projects" component={Projects} />
          </Suspense>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
