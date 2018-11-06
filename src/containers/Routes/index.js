// Core
import React, { Component, Fragment } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Home from '../Home'

@withRouter
export default class Index extends Component {
  render () {
    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route
            exact
            path='/:screen'
            component={Home}
          />
        </Switch>
      </Fragment>
    )
  }
}
