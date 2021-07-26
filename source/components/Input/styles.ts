/** @format */

import { StyleSheet } from 'react-native'

import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    marginLeft: '1.5%'
  },
  textContainer: {
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: '2%'
  },
  title: {
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
