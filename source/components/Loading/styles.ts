import { Dimensions, StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '~/constants'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    width: width - scale(25),
    marginVertical: scale(13),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: theme.backgroundWhite,
    elevation: 1,
    shadowColor: theme.darkGrey,
    shadowOpacity: 0.23,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2
    },
    borderRadius: 4
  },
  spinner: {
    width: 32,
    height: 32
  }
})
