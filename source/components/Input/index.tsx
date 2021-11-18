import React, { memo, useState, useMemo } from 'react'
import { Text, TextInput, Pressable, View, ViewStyle, TextStyle } from 'react-native'
import { useTranslation } from 'react-i18next'
import { verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'
import { styles } from './styles'
import { useDeviceWidth } from '~/hooks/settings'
import { FORM } from '~/constants/form'
import { Icon } from '~/components'

interface Props {
  title: string
  testID?: string
  value?: string
  placeholder?: string
  onChangeText?: React.Dispatch<React.SetStateAction<string>>
  disabled?: boolean
  autoFocus?: boolean
  required?: boolean
  empty?: boolean
  type?: string
  error?: boolean
  multiline?: boolean
  style?: ViewStyle
  styleTitle?: TextStyle
  styleText?: TextStyle
}
const Input = ({
  title,
  testID,
  value,
  placeholder,
  onChangeText,
  disabled,
  autoFocus = false,
  required,
  type = FORM.FIELDS_TYPES.TEXT,
  empty,
  error,
  multiline,
  style,
  styleTitle,
  styleText
}: Props) => {
  const DEVICE_WIDTH = useDeviceWidth() - 20
  const isSecureInput = type === FORM.FIELDS_TYPES.PASSWORD
  const [hasVisibility, setHasVisibility] = useState(!isSecureInput)
  const { t } = useTranslation()

  const errorComponent = (
    <>
      {required && empty && (
        <View style={styles.title}>
          <Text style={styles.error}>{title}</Text>
          <Text style={styles.error}> {t('input_is_requiredd')}</Text>
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
            {hasVisibility ? <Icon name='eyeopen-icon' size={20} /> : <Icon name='eyeclose-icon' size={20} />}
          </Pressable>
        ) : null,
      [type, hasVisibility]
    )

  return (
    <View style={[{ width: DEVICE_WIDTH }, styles.borderContainer, style, error && { borderColor: theme.red }]}>
      <View style={styles.rowContainer}>
        <View style={styles.insideContainer}>
          <View style={styles.title}>
            <Text style={[styles.titleText, styleTitle]}>{t(title)}</Text>
            {required && <Text style={[styles.titleText, styleTitle]}>*</Text>}
          </View>
          <TextInput
            testID={testID}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={theme.greenColor}
            onChangeText={onChangeText}
            editable={!disabled}
            selectTextOnFocus={!disabled}
            autoFocus={autoFocus}
            multiline={multiline}
            style={[styles.textContainer, multiline && { height: verticalScale(60) }, styleText]}
            secureTextEntry={isSecureInput && !hasVisibility}
          />
        </View>
        <IconPassword />
      </View>
      {errorComponent}
    </View>
  )
}

export default memo(Input)
