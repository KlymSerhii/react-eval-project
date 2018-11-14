import './loadingSceleton.scss'

import React from 'react'

const LoadingSceleton = () => {
    return (
      <div styleName='sceleton'>
        <div styleName='sceletonElement userPlate'></div>
        <div styleName='sceletonElement reposPlate'></div>
      </div>
    )
}

export default LoadingSceleton
