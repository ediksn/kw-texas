import React, { memo } from 'react'
import { Image } from 'react-native'

import { styles } from './styles'
import { imageSource } from './imageEnum'

interface IconType {
  route: string
  color: string
}

const Icon = ({ route, color }: IconType) => {
  return <Image source={imageSource[route]} style={[styles.icon, { tintColor: color }]} />
}

export default memo(Icon)
