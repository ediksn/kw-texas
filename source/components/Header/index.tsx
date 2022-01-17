import React, { ReactNode } from 'react'
import { Text, TextStyle, TouchableHighlight, View, ViewStyle } from 'react-native'
import FastImage from 'react-native-fast-image'
import emptyImageWhite from '../../../assets/images/emptyImageWhite.png'
import { styles } from './styles'
import FastImageAvatar from '~/components/FastImageAvatar'

interface Props {
  title?: string
  statusBarHeight?: number
  leftButton?: ReactNode
  rightButton?: ReactNode
  secondRightButton?: ReactNode
  rigthStyle?: ViewStyle
  onClickLeft?: () => void
  onClickRight?: any
  style?: ViewStyle
  titleStyle?: TextStyle
  avatarUrl?: string
  hiddenTitle?: boolean
  renderAvatar?: boolean
}

const Header = ({
  title,
  statusBarHeight,
  leftButton,
  secondRightButton,
  rightButton,
  rigthStyle,
  onClickLeft,
  onClickRight,
  style,
  titleStyle,
  avatarUrl,
  hiddenTitle = false,
  renderAvatar = false
}: Props) => {
  const LeftButton = () => (
    <>
      {leftButton && (
        <TouchableHighlight
          style={styles.touchableHighlight}
          activeOpacity={0.6}
          underlayColor='transparent'
          onPress={onClickLeft}
        >
          {leftButton}
        </TouchableHighlight>
      )}
    </>
  )

  const Title = () => (
    <>
      {title && renderAvatar ? (
        <View style={[styles.rowTitleContainer, hiddenTitle && { opacity: 0 }]}>
          <FastImageAvatar
            uri={avatarUrl}
            source={emptyImageWhite}
            resizeMode={FastImage.resizeMode.stretch}
            avatarStyle={styles.avatarStyle}
          />
          <Text style={titleStyle || styles.textFixed} numberOfLines={1} ellipsizeMode='tail'>
            {title}
          </Text>
        </View>
      ) : title ? (
        <View style={styles.textContainer}>
          <Text style={titleStyle || styles.text}>{title}</Text>
        </View>
      ) : null}
    </>
  )
  const RightButton = () => (
    <>
      {rightButton && (
        <TouchableHighlight
          style={[styles.touchableHighlight, rigthStyle]}
          activeOpacity={0.6}
          underlayColor='transparent'
          onPress={onClickRight}
        >
          {rightButton}
        </TouchableHighlight>
      )}
    </>
  )
  const SecondRightButton = () => (
    <>
      {secondRightButton && (
        <TouchableHighlight
          style={[styles.touchableHighlight, rigthStyle]}
          activeOpacity={0.6}
          underlayColor='transparent'
          onPress={onClickRight}
        >
          {secondRightButton}
        </TouchableHighlight>
      )}
    </>
  )

  return (
    <View style={[styles.container, style, { paddingTop: statusBarHeight }]}>
      <LeftButton />
      <Title />
      {secondRightButton ? (
        <View style={styles.secondRightButtonStyle}>
          <RightButton />
          <SecondRightButton />
        </View>
      ) : (
        <RightButton />
      )}
    </View>
  )
}

export default Header
