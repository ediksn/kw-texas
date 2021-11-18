import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import PromtRecording from './components/PromtRecording'
import { Button } from '~/components'
import { NAVIGATION, theme } from '~/constants'

interface Route {
  route: {
    params: {
      activeSlideSelected: number | undefined
    }
  }
}

export const Studio = ({ route }: Route) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const activeSlideSelected = route.params?.activeSlideSelected || 0

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PromtRecording activeSlideSelected={activeSlideSelected} />
        <Button
          message={t('components_Conversations_Conversation_Recording')}
          THEME={theme.buttons.primary}
          viewStyle={styles.button}
          onPress={() => navigation.navigate(NAVIGATION.SCREEN.RECORDING)}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
