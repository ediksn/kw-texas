import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'

interface FadeProps {
  visible: boolean
  children: any
}
const Fade = ({ visible, children }: FadeProps) => {
  const [visibility] = useState(new Animated.Value(visible ? 1 : 0))
  useEffect(() => {
    Animated.timing(visibility, {
      toValue: visible ? 1 : 0,
      duration: 500,
      useNativeDriver: true
    })
  }, [visible])

  const containerStyle = {
    opacity: visibility.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    }),
    transform: [
      {
        scale: visibility.interpolate({
          inputRange: [0, 1],
          outputRange: [1.1, 1]
        })
      }
    ]
  }

  const combinedStyle = [containerStyle, {}]
  const style = visible ? combinedStyle : containerStyle
  return <Animated.View style={style}>{visible ? children : null}</Animated.View>
}

export default Fade
