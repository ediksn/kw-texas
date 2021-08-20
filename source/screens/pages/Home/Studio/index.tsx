import React from 'react'
import { SafeAreaView } from 'react-native'
import { styles } from './styles'
import PromtRecording from './components/PromtRecording'

export const Studio = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PromtRecording />
    </SafeAreaView>
  )
}
