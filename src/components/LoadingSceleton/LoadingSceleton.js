import './loadingSceleton.scss'

import React from 'react'

const LoadingSceleton = () => {
  return (
    <div styleName='sceleton'>
      <div styleName='sceletonElement userPlate' />
      <div styleName='sceletonElement reposPlate' />
    </div>
  )
}

export default LoadingSceleton
