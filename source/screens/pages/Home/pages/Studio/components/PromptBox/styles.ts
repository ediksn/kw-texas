import { StyleSheet } from 'react-native'
import { verticalScale, scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  boxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(40)
  },
  avatar: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: 140
  },
  promptDesc: {
    flex: 1,
    marginHorizontal: scale(10)
  },
  promptName: {
    color: theme.texts.primary,
    fontWeight: 'bold',
    fontSize: theme.fonts.LARGE_SIZE
  },
  promptRole: {
    color: theme.texts.secondary
  },
  topicTitle: {
    flex: 1,
    color: theme.texts.green,
    fontWeight: 'bold'
  }
})
