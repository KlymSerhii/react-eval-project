import './userInfo.scss';

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import {faUsers, faArchive} from '@fortawesome/free-solid-svg-icons'
import {fadeUp} from '../../hocs/animationsHoc'

@fadeUp()
export default class UserInfo extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    const {bio, name, avatar_url: avatarUrl, public_repos, followers} = this.props.user

    return (
      <div styleName='userInfoContainer'>
          <img styleName='userInfoAvatar'src={avatarUrl} />
          <div styleName='userInfoName'>{name}</div>
          <div styleName='userInfoBio'>
            <p>{bio}</p>
          </div>
          <div styleName='userInfoAdditional'>
            <div styleName='userInfoRow'>
              <Icon icon={faArchive} />
              <p>{public_repos}</p>
            </div>
            <div styleName='userInfoRow'>
              <Icon icon={faUsers} />
              <p>{followers}</p>
            </div>
          </div>
      </div>
    )
  }
}
