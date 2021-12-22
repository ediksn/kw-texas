import React from 'react'
import { useTranslation } from 'react-i18next'
import { Linking, Platform, Text, View } from 'react-native'
import Modal from 'react-native-modal'
import Button from '../Button'
import { styles } from './styles'

interface Props {
  isVisible: boolean
  biometryType: string
  handleCloseModal: () => void
}
const AfterPermissionModal = ({ isVisible, biometryType, handleCloseModal }: Props) => {
  const { t } = useTranslation()

  const handleGoToSettings = () => {
    handleCloseModal()
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings://permissions/myapp')
    } else {
      Linking.openSettings()
    }
  }
  return (
    <Modal isVisible={isVisible} onBackdropPress={() => null}>
      <View style={styles.container}>
        <Text style={styles.titleText}>{t(`components_AfterPermissionModal_TurnOn${biometryType}`)}</Text>
        <Text style={styles.bodyText}>{t(`components_AfterPermissionModal_Opportunity${biometryType}`)}</Text>
        <View style={styles.buttonsContainer}>
          <Button
            viewStyle={styles.button}
            message={t('components_AfterPermissionModal_GoToSettings')}
            type='TEXT'
            onPress={handleGoToSettings}
          />
          <Button viewStyle={styles.button} message={t('general_text_Ok')} onPress={handleCloseModal} />
        </View>
      </View>
    </Modal>
  )
}

export default AfterPermissionModal
