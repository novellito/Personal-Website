import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Root from './Root';
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Root} />
        </Switch>
      </>
    );
  }
}

export default App;
