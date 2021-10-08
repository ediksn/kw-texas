import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { styles, stylesOfType } from './styles'
import { theme } from '~/constants'
import { Icon } from '~/components'

interface Props {
  testID?: string
  message?: string
  THEME?: any
  fontSize?: number
  type?: string
  viewStyle?: ViewStyle
  textStyle?: TextStyle
  disabled?: boolean
  onPress?: () => void
  icon?: any
}

const Button = ({
  testID,
  message = 'Ok',
  THEME = theme.buttons.primary,
  fontSize = moderateScale(theme.fonts.MEDIUM_SIZE),
  type = theme.buttons.types.CONTAINED,
  viewStyle,
  textStyle,
  disabled,
  onPress,
  icon = { name: '', size: 20, color: '#000000' }
}: Props) => {
  const { backgroundTypeStyle, textTypeStyle } = stylesOfType[type](THEME)

  const Message = () => {
    const { t } = useTranslation()

    return (
      <View style={[styles.messageView, icon && styles.messageWithIconView]}>
        {icon && (
          <View style={styles.icon}>
            <Icon name={icon.name} size={icon.size} color={icon.color} />
          </View>
        )}
        <Text style={[styles.messageText, { color: textStyle?.color }, textTypeStyle, { fontSize }]}>{t(message)}</Text>
      </View>
    )
  }

  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.6}
      disabled={disabled}
      style={[styles.containerView, viewStyle, backgroundTypeStyle]}
      onPress={onPress}
    >
      <Message />
    </TouchableOpacity>
  )
}

export default memo(Button)
