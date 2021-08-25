import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  iconView: {
    position: 'absolute',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    borderColor: '#FFFFFF',
    backgroundColor: '#444444',
    opacity: 0.7,
    elevation: 6
  },
  icon: {
    opacity: 0.7,
    width: scale(90),
    height: verticalScale(70)
  }
})
