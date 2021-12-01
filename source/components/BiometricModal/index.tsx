/** @format */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity, View } from 'react-native'
import ReactNativeBiometrics from 'react-native-biometrics'

import { Icon } from '~/components'
import { theme } from '~/constants'

import { styles } from './styles'

interface Props {
  onAuth: any
  biometryType: string
}

const BiometricModal = ({ onAuth, biometryType }: Props) => {
  const { t } = useTranslation()

  const texts: { [index: string]: string } = {
    [ReactNativeBiometrics.FaceID]: t('components_BiometricModal_FaceID'),
    [ReactNativeBiometrics.Biometrics]: t('components_BiometricModal_Fingerprint'),
    [ReactNativeBiometrics.TouchID]: t('components_BiometricModal_Fingerprint')
  }
  const icons: { [index: string]: string } = {
    [ReactNativeBiometrics.FaceID]: 'faceid-icon',
    [ReactNativeBiometrics.TouchID]: 'fingerprint-icon',
    [ReactNativeBiometrics.Biometrics]: 'fingerprint-icon'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{texts[biometryType]}</Text>
      <TouchableOpacity onPress={onAuth}>
        <Icon size={40} name={icons[biometryType]} color={theme.activeColor} />
      </TouchableOpacity>
    </View>
  )
}

export default BiometricModal
