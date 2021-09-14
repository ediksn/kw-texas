/** @format */

import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainer: {
    flexDirection: 'row',
    display: 'flex'
  },
  textWithBtn: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    color: theme.darkBackground,
    marginTop: 1
  },
  textWithNoBtn: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    color: theme.darkBackground,
    marginLeft: 23
  },
  logoutBtn: {
    marginTop: 4,
    marginLeft: 7,
    marginRight: 15,
    tintColor: theme.darkBackground
  },
  arrowBtn: {
    tintColor: theme.darkBackground,
    marginTop: 2,
    height: 24,
    width: 24
  }
})
