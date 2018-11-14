import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ReposScreen from '../Repos/ReposScreen'
import EventsScreen from '../Events/EventsScreen'
import propsGetter from '../../services/propsGetter'

const routes = [
  {
    path: '/repositories',
    component: ReposScreen,
    propsGetter: propsGetter('repos')
  },
  {
    path: '/events',
    component: EventsScreen,
    propsGetter: propsGetter('events')
  }
]

export const HomeRoutes = (props) => (
  <Switch>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        render={(routerProps) => <route.component {...routerProps} {...route.propsGetter(props)} />}
      />
    ))}
  </Switch>
)
