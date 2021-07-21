/** @format */

import { StyleSheet } from 'react-native'

export const styles = (backgroundColor?: string) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      maxWidth: '100%',
      alignItems: 'center',
      paddingVertical: '2%',
      backgroundColor,
      borderBottomColor: 'rgb(150,150,150)',
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
