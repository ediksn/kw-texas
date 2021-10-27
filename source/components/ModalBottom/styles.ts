/** @format */

import { StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get('window')

export const styles = (active: boolean) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      top: active ? 0 : window.height,
      left: 0,
      bottom: 0,
      right: 0,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end'
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'black'
    },
    modal: {
      width: '100%',
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignItems: 'center',
      paddingVertical: 30,
      paddingHorizontal: 15
    }
  })
