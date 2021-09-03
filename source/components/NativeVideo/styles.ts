import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%'
  },
  video: {
    height: verticalScale(300)
  }
})
