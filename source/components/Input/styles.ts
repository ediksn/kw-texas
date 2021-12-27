import { StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  borderContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.grey
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  insideContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  insideContainerFullWidth: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  textContainer: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: theme.greenColor,
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(20),
    textAlignVertical: 'bottom',
    minWidth: verticalScale(230),
    minHeight: verticalScale(40)
  },
  title: {
    flexDirection: 'row',
    marginLeft: scale(10),
    position: 'absolute',
    zIndex: 1
  },
  titleText: {
    color: theme.darkGrey,
    fontFamily: 'Mulish-Bold',
    marginTop: verticalScale(7),
    marginBottom: verticalScale(4),
    fontSize: 12
  },
  error: {
    color: theme.red,
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: verticalScale(1),
    marginBottom: verticalScale(10)
  },
  touchablePasswordIcon: {
    marginRight: scale(5),
    padding: moderateScale(10),
    alignSelf: 'center',
    elevation: 1,
    zIndex: 10
  },
  iconPasswordIcon: {
    height: verticalScale(20),
    width: scale(20)
  }
})
