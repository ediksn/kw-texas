import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './styles'
import PromtRecording from './components/PromtRecording'
import Recording from '../../components/VideoCapture'
import { useIsFocused } from '@react-navigation/native'

export const Studio = () => {
  const isFocused = useIsFocused()

  return (
    <SafeAreaView style={styles.container}>
      <PromtRecording />
      {isFocused && <Recording />}
    </SafeAreaView>
  )
}
