import { StyleSheet } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  containerBoxStyle: {
    flex: 1
  },
  container: {
    padding: moderateScale(10),
    flex: 1
  },
  iconStyle: {
    width: scale(60),
    height: scale(60),
    marginBottom: scale(25)
  }
})
