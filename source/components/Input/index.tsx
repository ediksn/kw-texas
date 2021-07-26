import React, { useState } from 'react'

import { Text, TextInput, View } from 'react-native'
import { theme } from '~/constants'

import { styles } from './styles'

interface Props {
  title: string
  value: string
  onChangeText: React.Dispatch<React.SetStateAction<string>>
  error?: boolean
  errorText?: string
  disabled?: boolean
}
const Input = ({ title, value, onChangeText, error, errorText, disabled }: Props) => {
  const [focus, setFocus] = useState(false)
  const ErrorText = <>{error && <Text style={styles.error}>{errorText}</Text>}</>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
