import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundWhite,
    borderRadius: 10,
    marginLeft: moderateScale(5),
    marginRight: moderateScale(5),
    paddingTop: moderateScale(16)
  },
  titleText: {
    fontFamily: 'Mulish-Bold',
    fontSize: theme.fonts.LARGE_SIZE,
    lineHeight: 20,
    paddingLeft: moderateScale(16),
    paddingRight: moderateScale(16),
    paddingBottom: moderateScale(8)
  },
  bodyText: {
    fontFamily: 'Mulish-Regular',
    fontSize: theme.fonts.MEDIUM_SIZE,
    lineHeight: 20,
    paddingLeft: moderateScale(16),
    paddingRight: moderateScale(16),
    paddingBottom: moderateScale(20)
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: moderateScale(16),
    paddingBottom: moderateScale(20)
  },
  button: {
    width: 'auto',
    height: 'auto',
    padding: moderateScale(8),
    marginLeft: moderateScale(16)
  }
})
