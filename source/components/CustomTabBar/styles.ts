import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'
import { BACKGROUNDS } from '../../constants/theme'

export const styles = (focused?: boolean) =>
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
      marginTop: verticalScale(2),
      textAlign: 'center'
    },
    initialsView: {
      alignItems: 'center',
      aspectRatio: 1.1,
      backgroundColor: BACKGROUNDS.greyInitials,
      borderRadius: 26 / 2,
      height: 26,
      justifyContent: 'center',
      overflow: 'hidden'
    },
    initialsStyle: {
      fontSize: theme.fonts.SMALL_SIZE
    }
  })
