import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flex: 1
  },
  button: {
    width: scale(200),
    marginTop: verticalScale(30)
  }
})
