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
    minHeight: verticalScale(55),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(7)
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
  avatarDefault: {
    width: moderateScale(40),
    height: moderateScale(40),
    opacity: 0.5
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
    paddingHorizontal: moderateScale(12)
  },
  content: {
    marginVertical: verticalScale(12)
  },
  contentText: {
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Regular',
    color: theme.post.content,
    flexWrap: 'wrap'
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
    height: scale(56),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    width: 'auto',
    marginHorizontal: scale(4)
  },
  touchableArea: {
    marginRight: moderateScale(-5),
    padding: moderateScale(5)
  }
})
