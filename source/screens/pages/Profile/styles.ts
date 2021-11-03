/** @format */

import { StyleSheet } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F8',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  separator: {
    backgroundColor: 'rgba(174, 178, 186, 0.2);',
    height: 1,
    marginTop: verticalScale(24)
  },
  field: {
    marginVertical: 10
  },
  title: {
    fontSize: 12,
    color: theme.darkGrey,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginTop: verticalScale(16),
    marginLeft: moderateScale(16)
  },
  subtitle: {
    fontSize: 14,
    color: '#282B33',
    lineHeight: 26,
    fontFamily: 'Mulish-Bold'
  }
})
