/** @format */

import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(15),
    alignItems: 'center',
    fontFamily: 'Mulish-Regular'
  },
  text: {
    fontSize: 15,
    marginBottom: verticalScale(15)
  }
})
