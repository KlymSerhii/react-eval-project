import './reposScreen.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import FadingTiles from 'components/FadingTiles'
import RepoTile from 'components/RepoTile'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {getEvents} from 'actions/eventsActions'
import animations from '../../services/animations'

@animations.fadeUp
export default class ReposScreen extends Component {
  static propTypes = {
    repos: PropTypes.array.isRequired
  }
  static defaultProps = {
    repos: []
  }
  render () {
    const {repos} = this.props
    if (repos.length < 1) return (<div>No repos provided.</div>)
    return (
      <div styleName='reposScreenContainer'>
        <FadingTiles items={repos} tileComponent={(item) => <RepoTile repo={item}/>}/>
      </div>
    )
  }
}
