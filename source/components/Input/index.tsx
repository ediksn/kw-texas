import React, { useState } from 'react'

import { Text, TextInput, View, ViewStyle } from 'react-native'
import { theme } from '~/constants'

import { styles } from './styles'

interface Props {
  title: string
  value: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  disabled?: boolean
  required?: boolean
  requiredText?: string
  style?: ViewStyle
}
const Input = ({ title, value, onChangeText, requiredText, disabled, required, style }: Props) => {
  const [focus, setFocus] = useState(false)
  const error = <>{required && <Text style={styles.error}>{requiredText}</Text>}</>
  return (
    <View style={style}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        {required && <Text style={styles.titleText}>*</Text>}
      </View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
        style={[
          styles.textContainer,
          required ? { borderColor: theme.red } : focus ? { borderColor: theme.darkGrey } : { borderColor: theme.grey }
        ]}
      />
      {error}
    </View>
  )
}

export default Input
