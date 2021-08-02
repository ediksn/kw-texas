import React, { memo, useState, useMemo } from 'react'
import { Image, Text, TextInput, Pressable, View, ViewStyle } from 'react-native'
import visibility from '~/assets/images/visibility.png'
import visibility_off from '~/assets/images/visibility_off.png'
import { theme } from '~/constants'
import { styles } from './styles'
import { useDeviceWidth } from '~/hooks/settings'
import { FORM } from '~/constants/form'

interface Props {
  title: string
  value?: string
  onChangeText?: React.Dispatch<React.SetStateAction<string>>
  disabled?: boolean
  required?: boolean
  type?: string
  error?: boolean
  style?: ViewStyle
}
const Input = ({
  title,
  value,
  onChangeText,
  disabled,
  required,
  type = FORM.FIELDS_TYPES.TEXT,
  error,
  style
}: Props) => {
  const [focus, setFocus] = useState(false)
  const DEVICE_WIDTH = useDeviceWidth() - 20
  const isSecureInput = type === FORM.FIELDS_TYPES.PASSWORD
  const [hasVisibility, setHasVisibility] = useState(!isSecureInput)

  const errorComponent = (
    <>
      {required && error && (
        <View style={styles.title}>
          <Text style={styles.error}>{title}</Text>
          <Text style={styles.error}> is required</Text>
        </View>
      )}
    </>
  )

  const handlePasswordVisibility = () => setHasVisibility(!hasVisibility)

  const IconPassword = () =>
    useMemo(
      () =>
        isSecureInput ? (
          <Pressable style={styles.touchablePasswordIcon} onPress={handlePasswordVisibility}>
            <Image
              style={styles.iconPasswordIcon}
              resizeMode='center'
              source={hasVisibility ? visibility : visibility_off}
            />
          </Pressable>
        ) : null,
      [type, hasVisibility]
    )

  return (
    <View style={[{ width: DEVICE_WIDTH }, style]}>
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
          error ? { borderColor: theme.red } : focus ? { borderColor: theme.darkGrey } : { borderColor: theme.grey }
        ]}
        secureTextEntry={isSecureInput && !hasVisibility}
      />
      <IconPassword />
      {errorComponent}
    </View>
  )
}

export default memo(Input)
