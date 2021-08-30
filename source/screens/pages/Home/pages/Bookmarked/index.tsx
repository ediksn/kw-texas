/** @format */

import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export const Bookmarked = () => {
  const { t } = useTranslation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text>{t('Bookmarked Videos')}</Text>
      </View>
    </SafeAreaView>
  )
}
