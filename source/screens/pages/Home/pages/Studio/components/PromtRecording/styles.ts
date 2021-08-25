import { StyleSheet } from 'react-native'
import { verticalScale, scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  promptRecordingView: {
    alignItems: 'center'
  },
  title: {
    fontSize: theme.fonts.BIG_SIZE,
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
    alignSelf: 'flex-start',
    marginLeft: scale(20)
  }
})
