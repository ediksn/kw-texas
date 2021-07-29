/** @format */

import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoContainer: {
    width: '100%',
    height: 300
  },
  video: {
    width: '100%',
    height: 300
  },
  descContainer: {
    marginTop: 8,
    backgroundColor: theme.backgroundWhite
  },
  text: {
    textAlign: 'justify',
    padding: 16,
    fontFamily: 'Mulish-Bold',
    lineHeight: 20
  },
  btnView: {
    padding: 17.5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftGroup: {
    flexDirection: 'row'
  },
  likeBtn: {
    marginRight: 9.5
  },
  counter: {
    fontFamily: 'Mulish-Bold',
    color: theme.darkGreenColor
  },
  rightGroup: {
    flexDirection: 'row'
  },
  saveBtn: {
    marginRight: 22
  }
})
