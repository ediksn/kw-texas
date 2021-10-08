import { StyleSheet } from 'react-native'
import { theme } from '~/constants'

export const styles = (focused: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    selectedBar: {
      backgroundColor: focused ? theme.activeColor : theme.backgroundWhite,
      paddingTop: '5%',
      paddingLeft: '30%',
      paddingRight: '30%',
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      marginBottom: '10%'
    },
    icon: {
      color: focused ? theme.activeColor : theme.inActiveColor,
      marginTop: '5%',
      height: 23,
      width: 23
    },
    photo: {
      aspectRatio: 1,
      borderRadius: 30,
      marginTop: '3.5%',
      height: 23,
      width: 23
    }
  })
