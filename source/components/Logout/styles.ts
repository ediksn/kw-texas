/** @format */

import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.darkBackground,
    padding: 15
  },
  text: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    color: 'white'
  }
})
