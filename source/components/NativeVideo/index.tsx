import React, { memo } from 'react'
import Video from 'react-native-video'
import { View, ViewStyle } from 'react-native'
import { styles } from './styles'

interface Props {
  indexKey: number
  uri: string
  hasActive: boolean
  styleView?: ViewStyle
  children?: object
}

const NativeVideo = ({ indexKey, uri, hasActive, styleView, children }: Props) => {
  return (
    <View key={indexKey} style={[styles.containerView, styleView]}>
      <Video source={{ uri }} controls={hasActive} paused style={styles.video} />

      {children}
    </View>
  )
}

export default memo(NativeVideo)
