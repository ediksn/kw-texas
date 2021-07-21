/** @format */

import React from 'react'
import { Text, View } from 'react-native'

import Header from '~/components/Header'
import { styles } from './styles'
import { primaryColors } from '~/constants/theme'

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title='Home' backgroundColor={primaryColors.backgroundColor} />
      </View>
      <View style={styles.text}>
        <Text>Home Screen</Text>
      </View>
    </View>
  )
}
