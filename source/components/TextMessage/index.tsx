import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

import { styles } from './styles'
import { TextType } from '~/constants/theme'
import { textColors, TextColorsInterface } from '~/functions'

interface Props {
  message: string
  type: TextType
  style?: ViewStyle
}

const TextMessage = ({ message, type, style }: Props) => {
  const color: TextColorsInterface = textColors(type)
  return (
    <View style={[styles(color).container, style]}>
      <Text style={styles(color).text}>{message}</Text>
    </View>
  )
}

export default TextMessage
