import React from 'react'
import ZestIcons from 'zest-social'

const ZestIcon = ({uid, size=24, color='', valign, className}) => {
  let paths
  let style = {}
  if (uid in ZestIcons) {
    paths = ZestIcons[uid].paths
  } else {
    throw new Error('Invalid UID for icon: ' + uid)
  }
  if (valign) {
    style['verticalAlign'] = valign
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style}>
      <g fill={color} dangerouslySetInnerHTML={{ __html: paths }} />
    </svg>
  )
}

export default ZestIcon