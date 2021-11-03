import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundWhite,
    height: verticalScale(56)
  }
})
