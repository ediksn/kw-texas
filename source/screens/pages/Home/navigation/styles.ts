import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  photo: {
    aspectRatio: 1,
    width: 30,
    borderRadius: 30,
    height: 30
  },
  leftButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: theme.activeColor,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: '10%'
  }
})
