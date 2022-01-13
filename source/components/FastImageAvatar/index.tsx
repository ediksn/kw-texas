import React, { memo } from 'react'
import FastImage, { ImageStyle } from 'react-native-fast-image'
import { styles } from './styles'

interface FastImageAvatarProps {
  uri: string | undefined
  avatarStyle?: ImageStyle
  source?: any
}

const Index = ({ uri, avatarStyle, source }: FastImageAvatarProps) => {
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
      resizeMode={FastImage.resizeMode.cover}
    />
  )
}

export default memo(Index)
