/** @format */

import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  controlContainer: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0
  },
  textContainer: {
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: 'Mulish-Bold',
    fontSize: 20
  },
  shooterContainer: {
    alignItems: 'center'
  },
  shooter: {
    marginTop: 5
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 50
  },
  buttonsText: {
    textAlign: 'center',
    flex: 1,
    fontFamily: 'Mulish-Bold',
    fontSize: 15,
    color: theme.darkGreenColor
  },
  usrContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15
  },
  usrName: {
    fontFamily: 'Mulish-Bold',
    fontSize: 15,
    marginBottom: 10
  },
  usrType: {
    fontFamily: 'Mulish-Bold',
    fontSize: 13
  },
  usrStat: {
    fontFamily: 'Mulish-Bold',
    fontSize: 15,
    color: theme.darkGreenColor,
    marginLeft: 20,
    marginTop: -2
  },
  usrInfo: {
    marginTop: 10
  },
  usrStatus: {
    flex: 1,
    flexDirection: 'row'
  },
  usrAvatar: {
    backgroundColor: 'lightblue',
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 5,
    marginTop: 10,
    marginRight: 20
  }
})
