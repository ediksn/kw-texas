import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundWhite,
    height: scale(60)
  }
})
