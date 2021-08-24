import React, { memo, useState } from 'react'
import Video from 'react-native-video'
import { View, ViewStyle } from 'react-native'
import { styles } from './styles'
import Controls from './components/Controls'

interface Props {
  indexKey: number
  hasActive?: boolean
  uri: string
  uriPreview?: string
  styleView?: ViewStyle
  children?: object
}

const NativeVideo = ({ indexKey, hasActive = true, uri, uriPreview, styleView, children }: Props) => {
  const [paused, setPaused] = useState(true)

  return (
    <View key={indexKey} style={[styles.containerView, styleView]}>
      <Video source={{ uri }} controls={hasActive} paused={paused} style={styles.video} poster={uriPreview} />

      <Controls paused={paused} onPress={() => setPaused(!paused)} />
      {children}
    </View>
  )
}

export default memo(NativeVideo)
