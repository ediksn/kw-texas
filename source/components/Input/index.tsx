import React, { memo, useState, useMemo } from 'react'
import { Image, Text, TextInput, Pressable, View, ViewStyle } from 'react-native'
import { useTranslation } from 'react-i18next'
import { verticalScale } from 'react-native-size-matters'
import visibility from '../../../assets/images/visibility.png'
import visibility_off from '../../../assets/images/visibility_off.png'
import { theme } from '~/constants'
import { styles } from './styles'
import { useDeviceWidth } from '~/hooks/settings'
import { FORM } from '~/constants/form'

interface Props {
  title: string
  testID?: string
  value?: string
  placeholder?: string
  onChangeText?: React.Dispatch<React.SetStateAction<string>>
  disabled?: boolean
  required?: boolean
  empty?: boolean
  type?: string
  error?: boolean
  multiline?: boolean
  style?: ViewStyle
}
const Input = ({
  title,
  testID,
  value,
  placeholder,
  onChangeText,
  disabled,
  required,
  type = FORM.FIELDS_TYPES.TEXT,
  empty,
  error,
  multiline,
  style
}: Props) => {
  const [focus, setFocus] = useState(false)
  const DEVICE_WIDTH = useDeviceWidth() - 20
  const isSecureInput = type === FORM.FIELDS_TYPES.PASSWORD
  const [hasVisibility, setHasVisibility] = useState(!isSecureInput)
  const { t } = useTranslation()

  const errorComponent = (
    <>
      {required && empty && (
        <View style={styles.title}>
          <Text style={styles.error}>{title}</Text>
          <Text style={styles.error}> {t('is required')}</Text>
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
        <Text style={styles.titleText}>{t(title)}</Text>
        {required && <Text style={styles.titleText}>*</Text>}
      </View>
      <TextInput
        testID={testID}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        multiline={multiline}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
        style={[
          styles.textContainer,
          multiline && { height: verticalScale(60) },
          error
            ? { borderColor: theme.red }
            : focus
            ? { borderColor: theme.buttons.primary.backgroundColor, marginBottom: verticalScale(10) }
            : { borderColor: theme.grey, marginBottom: verticalScale(10) }
        ]}
        secureTextEntry={isSecureInput && !hasVisibility}
      />
      <IconPassword />
      {errorComponent}
    </View>
  )
}

export default memo(Input)
