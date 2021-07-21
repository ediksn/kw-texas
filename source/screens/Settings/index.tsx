/** @format */

import React from 'react'
import { View } from 'react-native'

import Header from '~/components/Header'
import { styles } from './styles'
import Storybook from './storybook'
import { primaryColors } from '~/constants/theme'

export const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title='Settings' backgroundColor={primaryColors.backgroundColor} />
      </View>
      <Storybook />
    </View>
  )
}
