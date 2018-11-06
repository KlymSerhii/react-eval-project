import './loadingSceleton.scss'

import React, {Component} from 'react'

export default class LoadingSceleton extends Component {
  static propTypes = {}

  state = {}

  render () {
    return (
      <div styleName='sceleton'>
        <div styleName='sceletonElement userPlate'></div>
        <div styleName='sceletonElement reposPlate'></div>
      </div>
    )
  }
}
