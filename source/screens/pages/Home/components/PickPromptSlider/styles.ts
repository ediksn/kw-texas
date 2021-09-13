import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    margin: moderateScale(10)
  },
  title: {
    color: theme.texts.primary,
    fontWeight: 'bold',
    fontSize: theme.fonts.LARGE_SIZE
  },
  description: {
    color: theme.texts.primary,
    fontSize: theme.fonts.MEDIUM_SIZE,
    marginVertical: moderateScale(10)
  },
  avatar: {
    width: scale(100),
    height: verticalScale(140),
    marginRight: scale(10),
    borderRadius: 10
  },
  containerScroll: {
    flexDirection: 'row'
  }
})
