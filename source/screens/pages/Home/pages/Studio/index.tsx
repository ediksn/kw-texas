/** @format */

import React from 'react'
import { SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import { styles } from './styles'
import Recording from '../../components/VideoCapture'
import { RootState } from '~/store'

export const Studio = () => {
  const isFocused = useIsFocused()
  const usr: any = useSelector((state: RootState) => state.login)

  return <SafeAreaView style={styles.container}>{isFocused && <Recording />}</SafeAreaView>
}
