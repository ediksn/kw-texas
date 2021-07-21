/** @format */

import React from 'react'
import { Text, View, NativeModules, SafeAreaView } from 'react-native'
import Header from '~/components/Header'
import { styles } from './styles'
import { primaryColors } from '~/constants/theme'

export const Home = () => {
  const { StatusBarManager } = NativeModules
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Home' backgroundColor={primaryColors.backgroundColor} StatusBarHeight={StatusBarManager.HEIGHT} />
      <View style={styles.text}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  )
}
