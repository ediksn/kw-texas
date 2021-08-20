import React, { memo } from 'react'
import Video from 'react-native-video'
import { View, ViewStyle } from 'react-native'
import { styles } from './styles'

interface Props {
  indexKey: number
  uri: string
  styleView?: ViewStyle
  children?: object
}

const NativeVideo = ({ indexKey, uri, styleView, children }: Props) => (
  <View key={indexKey} style={[styles.containerView, styleView]}>
    <Video source={{ uri }} fullscreen={false} controls repeat resizeMode='cover' style={styles.video} />
    {children}
  </View>
)

export default memo(NativeVideo)
