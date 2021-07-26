/** @format */

import { StyleSheet } from 'react-native'

import { theme } from '~/constants'

export const styles = StyleSheet.create({
  textContainer: {
    borderWidth: 1,
    borderRadius: 5
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
