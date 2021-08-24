/** @format */

import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './styles'
import Recording from '../../components/VideoCapture'

export const Studio = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Recording />
    </SafeAreaView>
  )
}
