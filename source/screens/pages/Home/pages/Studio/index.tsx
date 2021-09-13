import React from 'react'
import { SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import PromtRecording from './components/PromtRecording'
import { Button } from '~/components'
import { NAVIGATION, theme } from '~/constants'

export const Studio = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <PromtRecording />
      <Button
        message={t('Conversation Recording')}
        THEME={theme.buttons.primary}
        viewStyle={styles.button}
        onPress={() => navigation.navigate(NAVIGATION.SCREEN.RECORDING)}
      />
    </SafeAreaView>
  )
}
