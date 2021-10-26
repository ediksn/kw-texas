/** @format */

import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  spinner: {
    flex: 1
  },
  photo: {
    aspectRatio: 1,
    borderRadius: 30,
    width: 28,
    height: 28
  },
  png: {
    width: 30,
    height: 30
  },
  notifications: {
    width: 23,
    height: 25,
    marginTop: verticalScale(1)
  }
})
