import './sidebar.scss';

import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Sidebar extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
  }

  render () {
    return (
      <div styleName='sidebarContainer'>{this.props.children}</div>
    )
  }
}
