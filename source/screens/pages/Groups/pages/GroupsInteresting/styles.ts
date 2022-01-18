import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingHorizontal: scale(5),
    paddingVertical: scale(5)
  },
  separator: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: theme.grey
  }
})
