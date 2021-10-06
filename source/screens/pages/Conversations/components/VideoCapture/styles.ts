/** @format */

import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  cameraHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
    marginHorizontal: scale(4)
  },
  counterNumbers: {
    backgroundColor: 'rgb(146,139,139)',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 3,
    fontFamily: 'Mulish-Bold',
    fontSize: 15,
    color: 'white'
  },
  backArrowBtn: {
    tintColor: theme.darkBackground,
    marginTop: 2,
    height: 24,
    width: 24
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
    elevation: 4,
    textAlign: 'center',
    flex: 1,
    fontFamily: 'Mulish-Bold',
    fontSize: 15
  }
})
