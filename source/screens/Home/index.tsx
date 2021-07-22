/** @format */

import React from 'react'
import { Text, View, NativeModules, SafeAreaView, Platform } from 'react-native'
import { useTranslation } from 'react-i18next'
import Header from '~/components/Header'
import { styles } from './styles'
import { primaryColors } from '~/constants/theme'

export const Home = () => {
  const { StatusBarManager } = NativeModules
  const { t } = useTranslation()
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={t('Home')}
        backgroundColor={primaryColors.backgroundColor}
        statusBarHeight={Platform.OS === 'ios' ? StatusBarManager.HEIGHT : 20}
      />
      <View style={styles.text}>
        <Text>{t('Home')}</Text>
      </View>
    </SafeAreaView>
  )
}
