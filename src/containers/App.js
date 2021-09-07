import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Root from './Root';
import Landing from './Landing';
import Projects from '../components/Projects/Projects';
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route exact path="/original" component={Landing} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </>
    );
  }
}

export default App;
