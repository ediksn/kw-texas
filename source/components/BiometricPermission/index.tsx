/** @format */

import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity, View } from 'react-native'
import ReactNativeBiometrics from 'react-native-biometrics'

import { ModalBottom } from '~/components/ModalBottom'

import { styles } from './styles'

interface Props {
  onYes: () => void
  onNo: () => void
  onRequestClose: () => void
  biometryType: string
  isVisible: boolean
}

const BiometricPermission = memo(({ onYes, onNo, onRequestClose, biometryType, isVisible }: Props) => {
  const { t } = useTranslation()

  const headers: { [index: string]: string } = {
    [ReactNativeBiometrics.FaceID]: t('Face ID'),
    [ReactNativeBiometrics.TouchID]: t('Fingerprint'),
    [ReactNativeBiometrics.Biometrics]: t('Fingerprint')
  }
  const bodies: { [index: string]: string } = {
    [ReactNativeBiometrics.FaceID]: t('Do you want to allow app to use Face ID to authenticate?'),
    [ReactNativeBiometrics.TouchID]: t('Do you want to allow app to use Fingerprint to authenticate?'),
    [ReactNativeBiometrics.Biometrics]: t('Do you want to allow app to use Fingerprint to authenticate?')
  }

  return (
    <ModalBottom visible={isVisible} onClose={onRequestClose}>
      <Text style={styles.header}>{headers[biometryType]}</Text>

      <Text style={styles.message}>{bodies[biometryType]}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={onNo} style={[styles.button, styles.buttonNegative]}>
          <Text style={styles.textNegative}>{t('No')}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onYes} style={styles.button}>
          <Text style={styles.textPositive}>{t('Yes')}</Text>
        </TouchableOpacity>
      </View>
    </ModalBottom>
  )
})

export default BiometricPermission
