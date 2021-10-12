import { StyleSheet } from 'react-native'
import { verticalScale, scale, moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    elevation: 4,
    backgroundColor: '#FFFFFF'
  },
  header: {
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
    height: verticalScale(40),
    width: scale(40)
  },
  info: {
    marginHorizontal: moderateScale(4)
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
  content: {
    padding: moderateScale(12)
  },
  contentText: {
    marginVertical: verticalScale(12)
  },
  showMore: {
    fontWeight: 'bold',
    color: theme.post.green
  },
  infoNumbers: {
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
