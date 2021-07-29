import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale, scale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  containerView: {
    height: verticalScale(30),
    width: scale(150),
    elevation: 4,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: moderateScale(10)
  },
  messageView: {
    alignSelf: 'center'
  },
  messageText: {
    fontWeight: 'bold'
  }
})
