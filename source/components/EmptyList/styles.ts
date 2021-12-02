import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'
import { useDeviceWidth } from '~/hooks'

const DEVICE_WIDTH = useDeviceWidth()

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  containerTitles: {
    width: DEVICE_WIDTH - 96,
    alignItems: 'center'
  },
  icon: {
    width: moderateScale(60),
    height: moderateScale(60),
    marginBottom: verticalScale(40)
  },
  title: {
    fontSize: theme.fonts.LARGE_SIZE,
    fontFamily: 'Mulish-Bold',
    color: theme.lightColor
  },
  subTitle: {
    marginTop: verticalScale(16),
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Regular',
    color: theme.lightColor,
    textAlign: 'center'
  }
})
