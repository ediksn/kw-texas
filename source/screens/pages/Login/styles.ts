import { Dimensions, StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

const deviceWidth = Dimensions.get('window').width
export const illustrationHeight = moderateScale(290)

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.backgrounds.backgroundLogin
  },
  topContainer: {
    marginTop: verticalScale(10)
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
    backgroundColor: '#FFFFFF',
    marginHorizontal: scale(27),
    marginBottom: verticalScale(16),
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
    height: scale(40)
  },
  textBold: {
    fontFamily: 'Mulish-Bold',
    fontWeight: 'bold'
  },
  textRegular: {
    fontFamily: 'Mulish-Regular'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  kw: {
    width: moderateScale(243),
    height: moderateScale(160)
  },
  illustrationContainer: {
    alignItems: 'center',
    backgroundColor: theme.darkBackground,
    zIndex: -1,
    elevation: -1
  },
  illustration: {
    position: 'absolute',
    bottom: 0,
    marginTop: verticalScale(7.32),
    marginRight: scale(48),
    marginLeft: scale(50),
    width: moderateScale(250),
    height: illustrationHeight,
    zIndex: -1
  },
  textInput: {
    width: scale(320)
  },
  textPasswordInput: {
    width: scale(270)
  },
  bottomLogoView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  bottomLogo: {
    width: moderateScale(375),
    height: moderateScale(103)
  }
})
