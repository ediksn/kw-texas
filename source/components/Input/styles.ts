/** @format */

import { StyleSheet } from 'react-native'

import { theme } from '~/constants'

export const styles = StyleSheet.create({
  textContainer: {
    height: '25%',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16
  },
  title: {
    flexDirection: 'row'
  },
  titleText: {
    color: theme.darkGrey,
    fontWeight: 'bold',
    marginVertical: '1%'
  },
  error: {
    color: theme.red,
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: '1%'
  }
})
