/** @format */

import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    backgroundColor: theme.darkBackground,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainer: {
    flexDirection: 'row',
    display: 'flex'
  },
  text: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    color: 'white'
  },
  logoutBtn: {
    marginTop: 4,
    marginLeft: 7,
    marginRight: 15,
    tintColor: 'white'
  },
  arrowBtn: {
    tintColor: 'white',
    marginTop: 2,
    height: 24,
    width: 24
  }
})
