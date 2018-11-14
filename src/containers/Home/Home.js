import './home.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter, Router} from 'react-router-dom'

import navLinks from '../../constants/navLinks'

import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'
import history from '../../services/history'
import {fadeUp} from '../../hocs/animationsHoc'
import LoadingSceleton from '../../components/LoadingSceleton'
import Navigation from '../../components/Navigation'
import Sidebar from '../../components/Sidebar'
import UserInfo from '../../components/UserInfo'
import {HomeRoutes} from '../../containers/Routes'

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

@fadeUp()
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
    getUser: PropTypes.func.isRequired,
    match: PropTypes.object
  }

  componentDidMount () {
    const {getUser, getRepos, getEvents} = this.props
    getUser()
    getRepos()
    getEvents()
  }
  render () {
    const {user, events, repos, match} = this.props

    if (user.fetching || events.fetching || repos.fetching) return <LoadingSceleton />

    return (
      <div styleName='home'>
        <Sidebar>
          <UserInfo user={user.data} />
        </Sidebar>
        <div styleName='mainPart'>
          <Navigation links={navLinks} currentScreen={match.url} />
          <Router history={history}>
            <HomeRoutes repos={repos} events={events} />
          </Router>
        </div>
      </div>
    )
  }
}
