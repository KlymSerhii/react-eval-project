import './navigation.scss'

import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'


export default class Navigation extends PureComponent {
  static propTypes = {
    currentScreen: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string
    })).isRequired
  }

  renderNavLinks () {
    const {links, currentScreen} = this.props

    return links.map((link, i) => {
      return (
        <li styleName={currentScreen === link.url ? 'listItem active' : 'listItem'} key={i}>
          <Link to={link.url}>{link.text}</Link>
        </li>
      )
    })
  }
  render () {
    return (
      <ul styleName='list'>
        {this.renderNavLinks()}
      </ul>
    )
  }
}
