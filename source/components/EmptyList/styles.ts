import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: scale(13)
  }
})
