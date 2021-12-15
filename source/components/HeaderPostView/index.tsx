import React, { ReactNode } from 'react'
import { TouchableHighlight, View, ViewStyle } from 'react-native'
import { styles } from './styles'

interface Props {
  children: ReactNode
  statusBarHeight?: number
  leftButton?: ReactNode
  onClickLeft?: () => void
  style?: ViewStyle
}

interface LeftButtonProps {
  leftButton?: ReactNode
  onClickLeft?: () => void
}

const LeftButton = ({ leftButton, onClickLeft }: LeftButtonProps) => (
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

const HeaderPostView = ({ children, statusBarHeight, leftButton, onClickLeft, style }: Props) => {
  return (
    <View style={[styles.container, style, { paddingTop: statusBarHeight }]}>
      <LeftButton leftButton={leftButton} onClickLeft={onClickLeft} />
      {children}
    </View>
  )
}

export default HeaderPostView
