/** @format */

import React from 'react'
import { SafeAreaView } from 'react-native'

import { styles } from './styles'
import Storybook from './storybook'

export const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Storybook />
    </SafeAreaView>
  )
}
