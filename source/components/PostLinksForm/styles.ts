import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  inputAddLink: {
    marginTop: verticalScale(16),
    paddingTop: 0,
    width: '100%',
    fontSize: theme.fonts.LARGE_SIZE,
    fontFamily: 'Mulish-Regular',
    color: theme.post.inputText
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: verticalScale(4)
  },
  actionText: {
    color: theme.darkGreenColor,
    fontFamily: 'Mulish-Bold',
    fontWeight: 'bold',
    marginHorizontal: scale(4)
  },
  disabled: {
    opacity: 0.5
  }
})
