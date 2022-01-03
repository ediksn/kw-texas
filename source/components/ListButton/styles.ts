/** @format */

import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textContainer: {
    flexDirection: 'row',
    display: 'flex'
  },
  textWithBtn: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    color: theme.darkBackground,
    marginTop: 1,
    marginLeft: 17
  },
  logoutBtn: {
    justifyContent: 'center',
    marginRight: 0,
    tintColor: theme.darkBackground
  },
  arrowBtn: {
    tintColor: theme.darkBackground,
    marginTop: 2,
    height: 24,
    width: 24
  }
})
