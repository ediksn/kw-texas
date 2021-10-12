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
    alignItems: 'center'
  },
  rightButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  photo: {
    aspectRatio: 1,
    width: 30,
    borderRadius: 30,
    height: 30
  },
  text: {
    color: theme.activeColor,
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: scale(11)
  },
  search: {
    marginRight: scale(9)
  },
  chat: {
    marginLeft: scale(9)
  }
})
