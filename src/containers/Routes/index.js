// Core
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from '../Home';

@withRouter
export default class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path = "/"
            component = { Home }
          />
        </Switch>
      </>
    );
  }
}
