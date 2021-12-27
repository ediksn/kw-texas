import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundWhite,
    height: scale(60),
    marginBottom: verticalScale(16)
  },
  leftButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(150)
  },
  rightButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  avatar: {
    aspectRatio: 1,
    width: scale(32),
    height: scale(32),
    borderRadius: 30
  },
  text: {
    color: theme.activeColor,
    fontFamily: 'Mulish-Bold',
    fontSize: theme.fonts.SMALL_SIZE,
    lineHeight: 24,
    marginLeft: scale(11),
    width: scale(200),
    paddingLeft: scale(11)
  },
  search: {
    marginRight: scale(9)
  },
  bookmarkIcon: {
    marginLeft: scale(9)
  },
  avatarDefault: {
    width: scale(30),
    height: scale(30),
    opacity: 0.5
  }
})
