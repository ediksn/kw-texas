import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundWhite,
    height: verticalScale(56)
  },
  textStyle: {
    color: theme.darkGreenColor,
    fontSize: theme.fonts.LARGE_SIZE,
    fontFamily: 'Mulish-Bold'
  }
})
