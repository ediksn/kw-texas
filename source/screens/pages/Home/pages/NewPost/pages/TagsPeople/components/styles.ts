import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale, scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(42),
    borderWidth: 1,
    borderColor: '#E3E3E4',
    borderStyle: 'solid',
    paddingLeft: scale(19),
    paddingRight: scale(16)
  },
  avatar: {
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: moderateScale(20),
    marginLeft: scale(11),
    marginRight: scale(8)
  },
  name: {
    fontFamily: 'Mulish-Bold',
    fontSize: theme.fonts.MEDIUM_SIZE,
    lineHeight: 20
  }
})
