import { StyleSheet } from 'react-native'
import { verticalScale, scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  commentWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(4)
  },
  commentAvatar: {
    paddingRight: scale(10)
  },
  commentContent: {
    flex: 1
  },
  commentBody: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    borderRadius: scale(4),
    backgroundColor: theme.backgrounds.greyBackground
  },
  commentAuthor: {
    paddingBottom: scale(10),
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Bold',
    textTransform: 'uppercase',
    color: theme.post.name
  },
  commentText: {
    color: theme.post.content
  },
  commentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: verticalScale(5)
  },
  commentDate: {
    color: theme.greenColor,
    fontSize: theme.fonts.SMALL_SIZE
  },
  commentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  commentLike: {
    color: theme.greenColor,
    fontSize: theme.fonts.SMALL_SIZE,
    paddingHorizontal: scale(4)
  },
  commentComment: {
    color: theme.greenColor,
    fontSize: theme.fonts.SMALL_SIZE,
    paddingHorizontal: scale(4)
  },
  showMore: {
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Bold',
    color: theme.post.green
  }
})
