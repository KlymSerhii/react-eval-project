import './reposScreen.scss'

import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import FadingTiles from 'components/FadingTiles'
import RepoTile from 'components/RepoTile'
import {fadeUp} from '../../hocs/animationsHoc'

@fadeUp()
export default class ReposScreen extends PureComponent {
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
        <FadingTiles items={repos} tileComponent={(item) => <RepoTile repo={item} />} />
      </div>
    )
  }
}
