import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  textContainer: {
    height: verticalScale(35),
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16
  },
  title: {
    flexDirection: 'row'
  },
  titleText: {
    color: theme.darkGrey,
    fontWeight: 'bold',
    marginVertical: verticalScale(1)
  },
  error: {
    color: theme.red,
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: verticalScale(1)
  }
})
