/** @format */

import React from 'react'
import { Text, View, NativeModules, SafeAreaView, Platform } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Header } from '~/components'
import { styles } from './styles'
import { theme } from '~/constants'

export const Home = () => {
  const { StatusBarManager } = NativeModules
  const { t } = useTranslation()
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={t('Conversations')}
        backgroundColor={theme.backgroundColor}
        statusBarHeight={Platform.OS === 'ios' ? StatusBarManager.HEIGHT : 20}
      />
      <View style={styles.text}>
        <Text>{t('Conversations')}</Text>
      </View>
    </SafeAreaView>
  )
}
