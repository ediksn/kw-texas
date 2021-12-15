import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: moderateScale(6),
    paddingRight: moderateScale(6)
  },
  image: {
    width: moderateScale(64),
    height: moderateScale(64),
    marginRight: moderateScale(6),
    marginBottom: moderateScale(6),
    borderRadius: 4
  },
  crossContainer: {
    position: 'absolute',
    right: moderateScale(9.75),
    top: verticalScale(3.75)
  },
  cross: {
    width: moderateScale(16.5),
    height: moderateScale(16.5)
  }
})
