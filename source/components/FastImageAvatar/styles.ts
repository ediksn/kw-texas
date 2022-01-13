import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  avatar: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20)
  }
})
