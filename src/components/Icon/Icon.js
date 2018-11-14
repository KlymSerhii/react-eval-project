import './icon.scss'

import React from 'react'
import PropTypes from 'prop-types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Icon = (props) => {
  return (
    <div styleName='icon'>
      <FontAwesomeIcon icon={props.icon} />
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired
}

export default Icon
