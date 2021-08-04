/** @format */

import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    paddingVertical: '2%',
    borderBottomColor: theme.grey,
    borderBottomWidth: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  textContainer: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  touchableHighlight: {
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    marginHorizontal: '3%',
    borderRadius: 50
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold'
  }
})
