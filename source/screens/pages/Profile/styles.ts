/** @format */

import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.greenLightColor,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  separator: {
    backgroundColor: 'rgba(174, 178, 186, 0.2);',
    height: 1,
    marginTop: verticalScale(24)
  },
  field: {
    marginVertical: 10
  },
  title: {
    fontSize: 12,
    color: theme.darkGrey,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginTop: verticalScale(16),
    marginLeft: moderateScale(16)
  },
  subtitle: {
    fontSize: 14,
    color: '#282B33',
    lineHeight: 26,
    fontFamily: 'Mulish-Bold'
  },
  avatarPhoto: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: theme.backgrounds.whiteBackground,
    borderRadius: 30,
    height: moderateScale(40),
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: moderateScale(8)
  },
  containerAvatarDefault: {
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: theme.backgrounds.whiteBackground,
    borderRadius: 30,
    height: moderateScale(40),
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: moderateScale(8)
  },
  avatarDefault: {
    width: moderateScale(32),
    height: moderateScale(32),
    opacity: 0.5
  }
})
