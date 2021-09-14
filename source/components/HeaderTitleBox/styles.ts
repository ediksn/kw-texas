import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  title: {
    color: theme.texts.primary,
    fontWeight: 'bold',
    fontSize: theme.fonts.LARGE_SIZE
  },
  description: {
    color: theme.texts.primary,
    fontSize: theme.fonts.MEDIUM_SIZE,
    marginVertical: moderateScale(10)
  }
})
