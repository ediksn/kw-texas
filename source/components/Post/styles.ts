import { StyleSheet } from 'react-native'
import { verticalScale, scale, moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    elevation: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginBottom: verticalScale(10)
  },
  header: {
    height: verticalScale(55),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(7),
    paddingHorizontal: scale(16)
  },
  avatarBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20)
  },
  info: {
    marginLeft: moderateScale(12)
  },
  name: {
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Bold',
    color: theme.post.name
  },
  date: {
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Regular',
    color: theme.post.date
  },
  threeDots: {
    height: verticalScale(26),
    width: scale(26)
  },
  body: {
    padding: moderateScale(12)
  },
  content: {
    marginVertical: verticalScale(12)
  },
  contentText: {
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Regular',
    color: theme.post.content
  },
  showMore: {
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Bold',
    color: theme.post.green
  },
  infoNumbers: {
    marginVertical: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  commentsSharesBox: {
    flexDirection: 'row'
  },
  infoNumber: {
    color: theme.post.contentBottom
  },
  comments: {
    marginRight: scale(10)
  },
  horizontalLine: {
    height: verticalScale(1),
    backgroundColor: theme.post.horizontalLine,
    opacity: 0.1
  },
  buttons: {
    height: verticalScale(56),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(33)
  },
  button: {
    width: 'auto',
    marginHorizontal: scale(4)
  }
})
