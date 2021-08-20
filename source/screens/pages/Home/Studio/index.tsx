import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { styles } from './styles'
import PromtRecording from './components/PromtRecording'

export const Studio = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <PromtRecording />
      </View>
    </SafeAreaView>
  )
}
