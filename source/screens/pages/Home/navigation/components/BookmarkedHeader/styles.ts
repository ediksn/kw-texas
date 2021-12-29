import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundWhite,
    height: scale(60)
  },
  bookmarkedLeftButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(-7)
  },
  title: {
    color: '#282B33',
    fontFamily: 'Mulish-Regular',
    fontWeight: 'normal',
    fontSize: theme.fonts.LARGE_SIZE
  },
  bookmarkedRightButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: scale(-4)
  }
})
