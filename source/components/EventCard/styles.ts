import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'
import { useDeviceWidth } from '~/hooks/settings'

const DEVICE_WIDTH = useDeviceWidth()

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 2,
    shadowColor: theme.darkGrey,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 4,
    backgroundColor: theme.backgroundWhite,
    width: DEVICE_WIDTH - scale(32)
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
    fontSize: theme.fonts.SMALL_SIZE,
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
    fontFamily: 'Mulish-Bold',
    fontSize: theme.fonts.MEDIUM_SIZE,
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(16),
    marginTop: verticalScale(13)
  },
  button: {
    width: '44%',
    alignSelf: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    height: scale(40)
  },
  shareIcon: {
    paddingBottom: scale(20)
  }
})
