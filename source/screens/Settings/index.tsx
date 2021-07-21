/** @format */

import React from 'react'
import { NativeModules, SafeAreaView } from 'react-native'

import Header from '~/components/Header'
import { styles } from './styles'
import Storybook from './storybook'
import { primaryColors } from '~/constants/theme'

export const Settings = () => {
  const { StatusBarManager } = NativeModules
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title='Settings'
        backgroundColor={primaryColors.backgroundColor}
        StatusBarHeight={StatusBarManager.HEIGHT}
      />
      <Storybook />
    </SafeAreaView>
  )
}
