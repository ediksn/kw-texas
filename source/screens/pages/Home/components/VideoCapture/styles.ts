/** @format */

import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  counter: {
    position: 'absolute',
    right: 10,
    top: 10,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 3,
    backgroundColor: 'rgb(146,139,139)'
  },
  counterNumbers: {
    fontFamily: 'Mulish-Bold',
    fontSize: 15,
    color: 'white'
  },
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
    fontSize: 20,
    elevation: 4,
    color: theme.backgroundWhite
  },
  shooterContainer: {
    alignItems: 'center'
  },
  shooter: {
    marginTop: 5
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0
  },
  buttonsText: {
    textAlign: 'center',
    flex: 1,
    fontFamily: 'Mulish-Bold',
    fontSize: 15,
    color: theme.backgroundWhite
  }
})
