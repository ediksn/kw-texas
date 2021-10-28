import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundWhite
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
  photo: {
    aspectRatio: 1,
    width: scale(27),
    height: scale(27),
    borderRadius: 30
  },
  text: {
    color: theme.activeColor,
    fontFamily: 'Mulish-Bold',
    fontSize: 12,
    lineHeight: 24,
    marginLeft: scale(11),
    width: scale(200),
    paddingLeft: scale(11)
  },
  search: {
    marginRight: scale(9)
  },
  chat: {
    marginLeft: scale(9)
  }
})
