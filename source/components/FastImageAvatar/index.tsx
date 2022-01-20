import React, { memo } from 'react'
import FastImage, { ImageStyle, ResizeMode } from 'react-native-fast-image'
import { styles } from './styles'

interface FastImageAvatarProps {
  uri: string | undefined
  avatarStyle?: ImageStyle
  source?: any
  resizeMode?: ResizeMode
}

const Index = ({ uri, avatarStyle, source, resizeMode = FastImage.resizeMode.cover }: FastImageAvatarProps) => {
  if (!uri && source) {
    return <FastImage style={[styles.avatar, avatarStyle]} source={source} resizeMode={FastImage.resizeMode.cover} />
  }

  return (
    <FastImage
      style={[styles.avatar, avatarStyle]}
      source={{
        uri,
        priority: FastImage.priority.normal
      }}
      resizeMode={resizeMode}
    />
  )
}

export default memo(Index)
