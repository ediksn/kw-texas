import React, { useState } from 'react'

import { Text, TextInput, View, ViewStyle } from 'react-native'
import { theme } from '~/constants'

import { styles } from './styles'

interface Props {
  title: string
  value: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  error?: boolean
  errorText?: string
  disabled?: boolean
  isRequired?: boolean
  style?: ViewStyle
}
const Input = ({ title, value, onChangeText, error, errorText, disabled, isRequired, style }: Props) => {
  const [focus, setFocus] = useState(false)
  const ErrorText = <>{error && <Text style={styles.error}>{errorText}</Text>}</>
  return (
    <View style={style}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
        {isRequired && <Text style={styles.titleText}>*</Text>}
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
          error ? { borderColor: theme.red } : focus ? { borderColor: theme.darkGrey } : { borderColor: theme.grey }
        ]}
      />
      {ErrorText}
    </View>
  )
}

export default Input
