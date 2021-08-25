import React, { memo, useState } from 'react'
import Video from 'react-native-video'
import { View, ViewStyle } from 'react-native'
import { styles } from './styles'
import Controls from './components/Controls'

interface Props {
  indexKey: number
  uri: string
  uriPreview?: string
  styleView?: ViewStyle
  children?: object
}

const NativeVideo = ({ indexKey, uri, uriPreview, styleView, children }: Props) => {
  const [paused, setPaused] = useState(true)
  const [hasCcotrols, setHasControls] = useState(true)

  return (
    <View key={indexKey} style={[styles.containerView, styleView]}>
      <Video
        source={{ uri }}
        controls={false}
        paused={paused}
        style={styles.video}
        poster={uriPreview}
        resizeMode='cover'
        onEnd={() => setHasControls(false)}
      />

      {hasCcotrols && <Controls paused={paused} onPress={() => setPaused(!paused)} />}
      {children}
    </View>
  )
}

export default memo(NativeVideo)
