import './home.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter, Router, Route, Switch} from 'react-router-dom'

import Header from 'components/Header'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'
import history from '../../services/history'
import ReposScreen from '../Repos/ReposScreen'
import EventsScreen from '../Events/EventsScreen'
import LoadingSceleton from '../../components/LoadingSceleton/LoadingSceleton'

const mapStateToProps = state => ({
  repos: state.repos,
  user: state.user,
  events: state.events
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  getEvents,
  getRepos,
  getUser
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  static defaultProps = {
    user: {},
    events: {},
    repos: {}
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    repos: PropTypes.object.isRequired,
    getEvents: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired
    // location: PropTypes.object
  }

  componentDidMount () {
    const {getUser, getRepos, getEvents} = this.props
    getUser()
    getRepos()
    getEvents()
  }
  render () {
    const {user, events, repos} = this.props

    if (user.fetching || events.fetching || repos.fetching) return <LoadingSceleton />

    return (
      <div styleName='home'>
        <Header />
        <Router history={history}>
          <Switch>
            <Route
              exact
              path='/repositories'
              component={() => <ReposScreen />}
            />
            <Route
              exact
              path='/events'
              component={() => <EventsScreen />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
