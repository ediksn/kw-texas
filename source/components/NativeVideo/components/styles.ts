import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  iconView: {
    position: 'absolute',
    alignSelf: 'center',
    top: 160,
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
    color: '#FFFFFF',
    fontSize: moderateScale(50),
    fontWeight: 'bold'
  }
})
