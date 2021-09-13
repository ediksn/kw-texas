import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  inputsView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMessage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(15),
    marginHorizontal: verticalScale(5)
  }
})
