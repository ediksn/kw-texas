import { Dimensions, StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

const deviceWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topContainer: {
    marginTop: verticalScale(52)
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5)
  },
  inputsView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  input: {
    marginHorizontal: scale(27),
    marginVertical: verticalScale(8),
    width: scale(320)
  },
  textMessage: {
    alignItems: 'center',
    fontFamily: 'Mulish-Italic',
    color: theme.red,
    marginHorizontal: scale(28),
    marginBottom: verticalScale(8)
  },
  noConnectionModal: {
    position: 'absolute',
    margin: 0
  },
  noConnectionContainer: {
    alignItems: 'center',
    width: deviceWidth,
    paddingVertical: verticalScale(20),
    backgroundColor: theme.lighRed
  },
  noConnectionText: {
    fontFamily: 'Mulish-Regular',
    color: theme.backgroundWhite
  },
  button: {
    width: scale(320),
    height: scale(40),
    marginTop: verticalScale(10)
  },
  textBold: {
    fontFamily: 'Mulish-Bold',
    fontWeight: 'bold'
  },
  textRegular: {
    fontFamily: 'Mulish-Regular'
  },
  spinner: {
    marginVertical: verticalScale(5)
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  kw: {
    marginBottom: verticalScale(5),
    width: moderateScale(72),
    height: moderateScale(48)
  },
  connect: {
    marginBottom: verticalScale(24),
    width: moderateScale(118),
    height: moderateScale(32)
  },
  illustrationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  illustration: {
    marginTop: verticalScale(7.32),
    marginRight: scale(48),
    marginLeft: scale(50),
    width: '100%',
    height: '100%'
  }
})
