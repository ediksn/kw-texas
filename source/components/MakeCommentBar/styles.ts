import { StyleSheet } from 'react-native'
import { verticalScale, scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.backgroundWhite
  },
  avatar: {
    aspectRatio: 1,
    width: scale(32),
    height: scale(32),
    borderRadius: 30
  },
  avatarDefault: {
    width: scale(30),
    height: scale(30),
    opacity: 0.5
  },
  makeCommentBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.backgroundWhite,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10)
  },
  makeCommentBarAvatar: {
    paddingRight: scale(10)
  },
  input: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(5),
    borderRadius: scale(4),
    width: '100%',
    flex: 1,
    backgroundColor: theme.greenLightColor
  },
  sendIconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: scale(10)
  },
  sendIconButtonFixed: {
    alignItems: 'flex-end',
    paddingTop: verticalScale(4),
    paddingBottom: verticalScale(10),
    paddingHorizontal: scale(10)
  }
})
