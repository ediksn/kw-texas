/** @format */

import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: moderateScale(25)
  },
  avatar: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: theme.backgrounds.whiteBackground,
    borderRadius: 30,
    height: moderateScale(60),
    justifyContent: 'center',
    overflow: 'hidden'
  },
  defaultAvatar: {
    width: moderateScale(42),
    height: moderateScale(42),
    opacity: 0.5
  },
  photo: {
    aspectRatio: 1,
    width: moderateScale(60)
  },
  initials: {
    color: '#ffffff',
    fontFamily: 'Mulish-Bold',
    fontSize: 14,
    position: 'absolute'
  },
  name: {
    color: '#282B33',
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 20,
    marginTop: verticalScale(8),
    textAlign: 'center'
  },
  role: {
    color: '#282B33',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    textTransform: 'capitalize'
  },
  icon: {
    marginRight: 4
  },
  info: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 16,
    marginTop: verticalScale(4)
  },
  subtitle: {
    marginTop: verticalScale(4),
    fontFamily: 'Mulish-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16
  }
})
