import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    shadowColor: theme.darkGrey,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 4,
    backgroundColor: theme.backgroundWhite
  },
  imageContainer: {
    backgroundColor: theme.backgrounds.greyBackground,
    alignItems: 'center'
  },
  image: {
    width: moderateScale(72),
    height: moderateScale(72),
    marginTop: verticalScale(49),
    marginBottom: scale(49)
  },
  dateContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(12),
    marginLeft: scale(16),
    marginRight: scale(16)
  },
  date: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: theme.texts.secondary
  },
  separator: {
    backgroundColor: 'rgba(43, 43, 51, 0.1)',
    width: moderateScale(1),
    height: moderateScale(12),
    marginLeft: scale(4),
    marginRight: scale(4)
  },
  titleContainer: {
    marginTop: verticalScale(8),
    marginLeft: scale(16),
    marginRight: scale(16)
  },
  title: {
    fontFamily: 'Mulish-Regular',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    color: '#282B33'
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(8),
    marginLeft: scale(16),
    marginRight: scale(16)
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: verticalScale(5),
    marginTop: verticalScale(5)
  },
  buttons: {
    width: 'auto',
    paddingRight: scale(16),
    paddingLeft: scale(16),
    height: scale(40)
  },
  shareIcon: {
    paddingBottom: scale(20)
  }
})
