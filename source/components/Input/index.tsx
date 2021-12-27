import React, { memo, useState, useMemo, forwardRef, ForwardedRef } from 'react'
import { Text, TextInput, Pressable, View, ViewStyle, TextStyle, TextInputProps } from 'react-native'
import { useTranslation } from 'react-i18next'
import { verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'
import { styles } from './styles'
import { useDeviceWidth } from '~/hooks/settings'
import { FORM } from '~/constants/form'
import { Icon } from '~/components'

interface Props extends TextInputProps {
  title: string
  testID?: string
  value?: string
  placeholder?: string
  onChangeText?: (text: string) => void | React.Dispatch<React.SetStateAction<string>>
  disabled?: boolean
  autoFocus?: boolean
  required?: boolean
  empty?: boolean
  type?: string
  error?: boolean
  multiline?: boolean
  allowGrow?: boolean
  maxLength?: number
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
  style?: ViewStyle
  styleTitle?: TextStyle
  styleText?: TextStyle
}

const Input = forwardRef<TextInput, Props>((props: Props, ref: ForwardedRef<TextInput>) => {
  const {
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
    allowGrow = false,
    autoCapitalize = 'sentences',
    maxLength,
    style,
    styleTitle,
    styleText
  } = props
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
    <View
      style={[{ width: DEVICE_WIDTH }, styles.borderContainer, style, error === true && { borderColor: theme.red }]}
    >
      <View style={styles.rowContainer}>
        <View style={isSecureInput ? styles.insideContainer : styles.insideContainerFullWidth}>
          <View style={styles.title}>
            <Text style={[styles.titleText, styleTitle]}>{t(title)}</Text>
            {required && <Text style={[styles.titleText, styleTitle]}>*</Text>}
          </View>
          <TextInput
            ref={ref}
            testID={testID}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={theme.greenColor}
            onChangeText={onChangeText}
            editable={!disabled}
            autoCapitalize={autoCapitalize}
            selectTextOnFocus={!disabled}
            autoFocus={autoFocus}
            multiline={multiline}
            maxLength={maxLength}
            {...props}
            style={[styles.textContainer, multiline && !allowGrow && { height: verticalScale(60) }, styleText]}
            secureTextEntry={isSecureInput && !hasVisibility}
          />
        </View>
        <IconPassword />
      </View>
      {errorComponent}
    </View>
  )
})

export default memo(Input)
