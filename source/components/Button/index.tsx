import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from './styles'
import { theme } from '~/constants'

interface Props {
  message?: string
  backgroundView?: string
  colorText?: string
  fontSize?: number
  outline?: boolean
  styleView?: ViewStyle
  onPress?: () => {}
}

const Button = ({
  message = 'Ok',
  backgroundView = '#4797A5',
  colorText = '#ffffff',
  fontSize = theme.fonts.MEDIUM_SIZE,
  outline = false,
  styleView,
  onPress
}: Props) => {
  const backgroundColor = outline ? colorText : backgroundView

  const Message = () => {
    const { t } = useTranslation()
    const color = outline ? backgroundView : colorText

    return (
      <View style={styles.messageView}>
        <Text style={[styles.messageText, { color, fontSize }]}>{t(message)}</Text>
      </View>
    )
  }

  return (
    <TouchableOpacity style={[styles.containerView, { backgroundColor }, styleView]} onPress={onPress}>
      <Message />
    </TouchableOpacity>
  )
}

export default memo(Button)
