import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(16),
    marginTop: verticalScale(24),
    justifyContent: 'space-between'
  },
  leftSubcontainer: {
    flexDirection: 'row'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: moderateScale(5)
  },
  name: {
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20
  },
  role: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  roleText: {
    fontFamily: 'Mulish-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16
  },
  defaultTag: {
    backgroundColor: '#E4E5E7',
    paddingLeft: moderateScale(8),
    paddingRight: moderateScale(8),
    paddingTop: moderateScale(4),
    paddingBottom: moderateScale(4),
    marginRight: moderateScale(16),
    borderRadius: 12
  },
  defaultTagText: {
    fontFamily: 'Mulish-Bold',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 16
  }
})
