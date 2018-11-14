import {Route, Switch} from 'react-router-dom'
import ReposScreen from '../Repos/ReposScreen'
import EventsScreen from '../Events/EventsScreen'
import React from 'react'

export const HomeRoutes = (props) => (
  <Switch>
    <Route
      exact
      path='/repositories'
      render={(routerProps) => <ReposScreen {...routerProps} repos={props.repos.data} />}
    />
    <Route
      exact
      path='/events'
      render={(routerProps) => <EventsScreen {...routerProps} events={props.events.data} />}
    />
  </Switch>
)
