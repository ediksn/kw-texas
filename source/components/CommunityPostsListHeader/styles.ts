import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  typeSomething: {
    fontSize: theme.fonts.MEDIUM_SIZE,
    color: theme.darkGreenColor,
    marginLeft: moderateScale(10),
    fontFamily: 'Mulish-Bold'
  },
  headerListContainer: {
    backgroundColor: theme.greenLightColor,
    marginBottom: verticalScale(5),
    paddingHorizontal: moderateScale(18)
  },
  headerCard: {
    elevation: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginBottom: moderateScale(5),
    paddingVertical: verticalScale(5),
    marginTop: moderateScale(5),
    marginHorizontal: moderateScale(2),
    shadowColor: theme.post.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.23,
    shadowRadius: 3
  },
  typeSomethingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
    flex: 1
  }
})
