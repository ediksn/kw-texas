import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { styles, stylesOfType } from './styles'
import { theme } from '~/constants'
import { Icon, Spinner } from '~/components'

interface Props {
  testID?: string
  message?: string
  THEME?: any
  fontSize?: number
  type?: string
  viewStyle?: ViewStyle
  textStyle?: TextStyle
  disabled?: boolean
  loading?: boolean
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
  loading,
  onPress,
  icon
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
        <Text style={[textTypeStyle, styles.messageText, textStyle, { fontSize }]}>{t(message)}</Text>
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
      <Spinner isLoading={loading} styleView={styles.spinner} size='small' color={theme.backgroundWhite}>
        <Message />
      </Spinner>
    </TouchableOpacity>
  )
}

export default memo(Button)
