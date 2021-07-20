import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  messageView: {
    marginTop: verticalScale(10),
    alignSelf: 'center',
    color: '#222'
  },
  messageText: {
    fontSize: moderateScale(14)
  },
  containerLoadingView: {
    overflow: 'hidden'
  },
  layer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
