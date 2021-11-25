import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { BACKGROUNDS } from '../../constants/theme'

export const styles = StyleSheet.create({
  avatar: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20)
  },
  avatarDefault: {
    width: moderateScale(40),
    height: moderateScale(40),
    opacity: 0.5
  },
  initialsView: {
    backgroundColor: BACKGROUNDS.greyInitials,
    justifyContent: 'center',
    borderRadius: moderateScale(60),
    height: moderateScale(60),
    width: moderateScale(60)
  },
  initials: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: BACKGROUNDS.whiteBackground,
    fontFamily: 'Mulish-Regular',
    fontSize: moderateScale(14)
  }
})
