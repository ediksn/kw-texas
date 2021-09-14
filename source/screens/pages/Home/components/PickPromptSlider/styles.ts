import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  container: {
    margin: moderateScale(10)
  },
  avatar: {
    width: scale(100),
    height: verticalScale(140),
    marginRight: scale(10),
    borderRadius: 10
  },
  containerScroll: {
    flexDirection: 'row'
  }
})
