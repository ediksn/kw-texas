/** @format */

import React, { ReactNode } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

import { styles } from './styles'

interface Props {
  title: string
  backgroundColor: string
  statusBarHeight?: number
  leftButton?: ReactNode
  rightButton?: ReactNode
  onClickLeft?: () => void
  onClickRight?: () => void
}

const Header = ({
  title,
  backgroundColor,
  statusBarHeight,
  leftButton,
  rightButton,
  onClickLeft,
  onClickRight
}: Props) => {
  const LeftButton = () => (
    <>
      {leftButton && (
        <TouchableHighlight
          style={styles.touchableHighlight}
          activeOpacity={0.6}
          underlayColor='#DDDDDD'
          onPress={onClickLeft}
        >
          {leftButton}
        </TouchableHighlight>
      )}
    </>
  )
  const Title = () => (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
  const RightButton = () => (
    <>
      {rightButton && (
        <TouchableHighlight
          style={styles.touchableHighlight}
          activeOpacity={0.6}
          underlayColor='#DDDDDD'
          onPress={onClickRight}
        >
          {rightButton}
        </TouchableHighlight>
      )}
    </>
  )
  return (
    <View style={[styles.container, { marginTop: statusBarHeight, backgroundColor }]}>
      <LeftButton />
      <Title />
      <RightButton />
    </View>
  )
}

export default Header
