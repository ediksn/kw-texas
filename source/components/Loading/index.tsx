import React, { memo, useRef, useCallback, useEffect } from 'react'
import { View, ViewStyle, Animated } from 'react-native'
import spinner from 'assets/images/spinner.png'
import { styles } from './styles'

interface Props {
  isLoading?: boolean
  styleView?: ViewStyle
  children?: object
}

const Loading = ({ isLoading = false, styleView, children }: Props) => {
  const DURATION = 600
  const VALUE = 1
  const loadingSping = useRef(new Animated.Value(0))

  const animateSpinner = useCallback(() => {
    loadingSping.current.setValue(0)
    Animated.loop(
      Animated.sequence([
        Animated.timing(loadingSping.current, {
          toValue: VALUE,
          duration: DURATION,
          useNativeDriver: false
        })
      ]),
      {
        iterations: 100
      }
    ).start()
  }, [])

  useEffect(() => {
    if (isLoading) {
      animateSpinner()
    }
  }, [isLoading])

  const spin = loadingSping.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <>
      {isLoading ? (
        <View style={[styles.containerView, styleView]}>
          <Animated.Image
            style={[
              styles.spinner,
              {
                transform: [{ rotate: spin }]
              }
            ]}
            resizeMode='contain'
            source={spinner}
          />
        </View>
      ) : (
        children
      )}
    </>
  )
}

export default memo(Loading)
