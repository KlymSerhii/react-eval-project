import './sidebar.scss';

import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = ({children}) => {
  return (
    <div styleName='sidebarContainer'>{children}</div>
  )
}

Sidebar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
}

export default Sidebar
