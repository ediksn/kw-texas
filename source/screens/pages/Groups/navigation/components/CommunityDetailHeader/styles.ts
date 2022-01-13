import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.backgrounds.whiteBackground,
    justifyContent: 'flex-start',
    zIndex: 9999,
    alignItems: 'center',
    height: scale(60),
    marginBottom: verticalScale(4),
    paddingRight: scale(16)
  }
})
