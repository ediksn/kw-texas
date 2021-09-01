/** @format */

import React from 'react'
import { SafeAreaView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { styles } from './styles'
import Recording from '../../components/VideoCapture'

export const Studio = () => {
  const isFocused = useIsFocused()

  return <SafeAreaView style={styles.container}>{isFocused && <Recording />}</SafeAreaView>
}
