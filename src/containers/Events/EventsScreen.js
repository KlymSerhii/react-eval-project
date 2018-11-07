import './eventsScreen.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from 'components/Header'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'
import animations from '../../services/animations'

@animations.fadeUp
export default class EventsScreen extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired
  }

  static defaultProps = {
    events: []
  }

  render () {
    const {events} = this.props;
    if (events.length < 1) return (<div>No events provided.</div>)
    return (
      <div styleName='eventsScreenContainer'>

      </div>
    )
  }
}
