/** @format */

import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  header: {
    fontSize: 17
  },
  message: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: verticalScale(16)
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: verticalScale(16)
  },
  button: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(40),
    width: '49%',
    backgroundColor: theme.activeColor
  },
  buttonNegative: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: theme.activeColor
  },
  textNegative: {
    color: theme.activeColor,
    fontSize: 18
  },
  textPositive: {
    color: 'white',
    fontSize: 18
  }
})
