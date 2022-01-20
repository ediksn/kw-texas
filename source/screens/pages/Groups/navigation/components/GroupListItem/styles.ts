import { StyleSheet } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: theme.backgrounds.darkGreyBackground
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(10)
  },
  labelContainer: {
    flex: 4,
    marginHorizontal: scale(10),
    justifyContent: 'space-around',
    display: 'flex'
  },
  imageContainer: {
    height: scale(48),
    width: scale(48),
    borderRadius: scale(4),
    flex: 1
  },
  joinButton: {
    backgroundColor: theme.darkGreenColor,
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.backgroundWhite,
    width: scale(100),
    height: scale(30),
    flex: 2
  },
  leaveButton: {
    borderColor: theme.darkGreenColor,
    borderWidth: 1,
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.backgroundWhite,
    width: scale(100),
    height: scale(30)
  },
  joinText: {
    fontFamily: 'Mulish',
    fontSize: theme.fonts.MEDIUM_SIZE,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 0,
    color: theme.backgroundWhite
  },
  leaveText: {
    fontFamily: 'Mulish',
    fontSize: theme.fonts.MEDIUM_SIZE,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 0,
    color: theme.darkGreenColor
  },
  nameText: {
    fontFamily: 'Mulish',
    fontSize: theme.fonts.MEDIUM_SIZE,
    fontWeight: '700',
    lineHeight: scale(20),
    textAlign: 'left',
    color: theme.darkBackground
  },
  counterText: {
    fontFamily: 'Mulish',
    fontSize: theme.fonts.VERY_SMALL_SIZE,
    fontWeight: '400',
    lineHeight: theme.fonts.SMALL_SIZE,
    textAlign: 'left',
    color: theme.greenColor,
    marginLeft: scale(5)
  }
})
moderateScale(10)
