import { StyleSheet } from 'react-native'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(48),
    marginLeft: scale(16)
  },
  tags: {
    backgroundColor: '#D5F7FF',
    marginRight: scale(4),
    paddingVertical: moderateScale(4),
    paddingLeft: moderateScale(8),
    paddingRight: moderateScale(5),
    borderRadius: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
    fontSize: theme.fonts.SMALL_SIZE,
    lineHeight: 20,
    color: '#006C84',
    marginRight: scale(5)
  },
  closeIcon: {
    height: moderateScale(14),
    width: moderateScale(14)
  }
})
