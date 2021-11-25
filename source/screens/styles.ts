/** @format */

import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  spinner: {
    flex: 1
  },
  photo: {
    aspectRatio: 1,
    borderRadius: 30,
    width: moderateScale(28),
    height: moderateScale(26)
  },
  png: {
    width: moderateScale(28),
    height: moderateScale(28)
  },
  notifications: {
    width: moderateScale(22),
    height: moderateScale(24),
    marginTop: verticalScale(1)
  },
  defaultAvatar: {
    width: moderateScale(26),
    height: moderateScale(26),
    opacity: 0.5
  },
  initials: {
    color: theme.texts.primary,
    fontFamily: 'Mulish-Bold',
    fontSize: moderateScale(24),
    position: 'absolute'
  }
})
