/** @format */

import React, { ReactNode, useCallback, useEffect, useRef } from 'react'
import { Animated, View, Pressable, Keyboard } from 'react-native'

import { styles } from './styles'

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

interface Props {
  visible: boolean
  onClose: () => void
  children: ReactNode
}

export const ModalBottom = ({ visible, onClose, children }: Props) => {
  const animationDuration = 400
  const initOffset = 300
  const initOpacity = 0

  const menuOffset = useRef(new Animated.Value(initOffset)).current
  const backgroundOpacity = useRef(new Animated.Value(initOpacity)).current

  const animate = useCallback(
    (offset, opacity) =>
      Animated.parallel([
        Animated.timing(menuOffset, {
          toValue: offset,
          duration: animationDuration * 0.6,
          useNativeDriver: true
        }),
        Animated.timing(backgroundOpacity, {
          toValue: opacity,
          duration: animationDuration,
          useNativeDriver: true
        })
      ]).start(),
    [backgroundOpacity, menuOffset]
  )
  const popUp = useCallback(() => animate(0, 0.7), [animate])
  const popDown = useCallback(() => animate(initOffset, initOpacity), [animate])
  const onBackgroundPress = useCallback(() => {
    popDown()
    onClose()
  }, [onClose, popDown])

  useEffect(() => {
    if (visible) {
      Keyboard.dismiss()
      popUp()
    } else {
      popDown()
    }
  }, [popDown, popUp, visible])

  return (
    <View style={styles(visible).container}>
      <PressableAnimated
        style={[styles(visible).background, { opacity: backgroundOpacity }]}
        onPress={onBackgroundPress}
      />

      <Animated.View style={[styles(visible).modal, { transform: [{ translateY: menuOffset }] }]}>
        {children}
      </Animated.View>
    </View>
  )
}
