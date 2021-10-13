import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
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
      paddingLeft: scale(21),
      paddingRight: verticalScale(21),
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      marginBottom: verticalScale(6)
    },
    icon: {
      color: focused ? theme.activeColor : theme.inActiveColor,
      marginTop: verticalScale(3),
      textAlign: 'center'
    },
    photo: {
      aspectRatio: 1,
      width: 30,
      borderRadius: 30,
      height: 30
    }
  })
