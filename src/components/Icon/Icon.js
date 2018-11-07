import './icon.scss';

import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Icon extends Component {
  static propTypes = {
    icon: PropTypes.object.isRequired
  }
  render () {
    const {icon} = this.props;
    return (
      <div styleName='icon'>
        <FontAwesomeIcon icon={icon} />
      </div>
    )
  }
}
