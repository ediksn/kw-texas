import { StyleSheet } from 'react-native'
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
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: '10%'
  },
  search: {
    marginRight: '10%'
  },
  chat: {
    marginLeft: '10%'
  }
})
