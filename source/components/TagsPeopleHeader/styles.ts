import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundWhite,
    height: scale(60)
  },
  leftButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(-7)
  },
  title: {
    color: '#282B33',
    fontFamily: 'Mulish-Regular',
    fontWeight: 'bold',
    fontSize: theme.fonts.LARGE_SIZE
  },
  rightText: {
    color: theme.texts.green,
    fontFamily: 'Mulish-Bold',
    fontSize: theme.fonts.MEDIUM_SIZE
  },
  disabled: {
    opacity: 0.5
  }
})
