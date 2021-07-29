import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles, stylesOfType } from './styles'
import { theme } from '~/constants'

interface Props {
  message?: string
  THEME?: any
  fontSize?: number
  type?: string
  viewStyle?: ViewStyle
  textStyle?: TextStyle
  onPress?: () => {}
}

const Button = ({
  message = 'Ok',
  THEME = theme.buttons.primary,
  fontSize = theme.fonts.MEDIUM_SIZE,
  type = theme.buttons.types.CONTAINED,
  viewStyle,
  textStyle,
  onPress
}: Props) => {
  const { backgroundTypeStyle, textTypeStyle } = stylesOfType[type](THEME)

  const Message = () => {
    const { t } = useTranslation()

    return (
      <View style={styles.messageView}>
        <Text style={[styles.messageText, { color: textStyle?.color }, textTypeStyle, { fontSize }]}>{t(message)}</Text>
      </View>
    )
  }

  return (
    <TouchableOpacity
      style={[styles.containerView, { backgroundColor: viewStyle?.backgroundColor }, backgroundTypeStyle]}
      onPress={onPress}
    >
      <Message />
    </TouchableOpacity>
  )
}

export default memo(Button)
