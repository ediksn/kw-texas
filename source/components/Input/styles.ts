import { StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  textContainer: {
    height: verticalScale(40),
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: scale(5),
    marginBottom: verticalScale(10),
    textAlignVertical: 'top'
  },
  title: {
    flexDirection: 'row'
  },
  titleText: {
    color: theme.darkGrey,
    fontWeight: 'bold',
    marginVertical: verticalScale(1)
  },
  error: {
    color: theme.red,
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: verticalScale(1)
  },
  touchablePasswordIcon: {
    position: 'absolute',
    marginTop: verticalScale(15),
    marginRight: scale(5),
    padding: moderateScale(10),
    alignSelf: 'flex-end',
    elevation: 1,
    zIndex: 10
  },
  iconPasswordIcon: {
    height: verticalScale(20),
    width: scale(20)
  }
})
