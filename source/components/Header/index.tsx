import React, { ReactNode } from 'react'
import { Text, TextStyle, TouchableHighlight, View, ViewStyle } from 'react-native'
import { styles } from './styles'
import { BACKGROUNDS } from '../../constants/theme'

interface Props {
  title?: string
  statusBarHeight?: number
  leftButton?: ReactNode
  rightButton?: ReactNode
  onClickLeft?: () => void
  onClickRight?: any
  style?: ViewStyle
  titleStyle?: TextStyle
}

const Header = ({
  title,
  statusBarHeight,
  leftButton,
  rightButton,
  onClickLeft,
  onClickRight,
  style,
  titleStyle
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
    <>
      {title && (
        <View style={styles.textContainer}>
          <Text style={titleStyle || styles.text}>{title}</Text>
        </View>
      )}
    </>
  )
  const RightButton = () => (
    <>
      {rightButton && (
        <TouchableHighlight
          style={styles.touchableHighlight}
          activeOpacity={0.6}
          underlayColor={onClickRight ? BACKGROUNDS.ligthGreyBackground : 'transparent'}
          onPress={onClickRight}
        >
          {rightButton}
        </TouchableHighlight>
      )}
    </>
  )
  return (
    <View style={[styles.container, style, { paddingTop: statusBarHeight }]}>
      <LeftButton />
      <Title />
      <RightButton />
    </View>
  )
}

export default Header
