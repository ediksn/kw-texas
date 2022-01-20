import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: '700',
    fontFamily: 'Mulish',
    color: theme.darkGrey,
    fontSize: theme.fonts.LARGE_SIZE,
    lineHeight: scale(24)
  }
})
