import { StyleSheet } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  containerEmpty: {
    padding: moderateScale(10),
    flex: 1
  },
  container: {
    flexGrow: 1
  },
  cardStyle: {
    flex: 1,
    marginRight: scale(8)
  }
})
