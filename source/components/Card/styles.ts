import { StyleSheet } from 'react-native'
import { verticalScale, scale, moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: verticalScale(60),
    width: scale(60)
  },
  info: {
    flex: 4,
    paddingHorizontal: moderateScale(10)
  },
  name: {
    fontWeight: 'bold',
    fontSize: theme.fonts.MEDIUM_SIZE
  },
  date: {
    fontWeight: 'bold',
    fontSize: theme.fonts.MEDIUM_SIZE
  },
  threeDots: {
    height: verticalScale(26),
    width: scale(26)
  }
})
