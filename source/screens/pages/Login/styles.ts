import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10)
  }
})
