import { StyleSheet } from 'react-native'
import { verticalScale, scale, moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  header: {
    minHeight: verticalScale(55),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(7)
  },
  container: {
    marginBottom: verticalScale(4)
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
    marginVertical: verticalScale(4)
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
    alignItems: 'center',
    height: moderateScale(16)
  },
  commentsSharesBox: {
    flexDirection: 'row'
  },
  infoNumber: {
    color: theme.post.contentBottom,
    fontFamily: 'Mulish-Regular',
    lineHeight: moderateScale(16),
    fontSize: theme.fonts.SMALL_SIZE
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
  mediaContainer: {
    marginVertical: verticalScale(10),
    flex: 1
  },
  smallMediaRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bigMedia: {
    width: '100%',
    height: 250,
    marginBottom: verticalScale(4)
  },
  smallMedia: {
    flex: 1,
    width: '100%',
    height: 180
  },
  leftMedia: {
    marginRight: scale(4)
  },
  rightMedia: {
    marginLeft: scale(4)
  },
  opacityImage: {
    flex: 1,
    height: '100%',
    backgroundColor: 'rgba(43, 43, 51, 0.9)'
  },
  coverTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  coverText: {
    color: theme.texts.white,
    fontWeight: 'bold',
    fontSize: theme.fonts.BIG_SIZE
  },
  touchableArea: {
    marginRight: moderateScale(-5),
    padding: moderateScale(5)
  }
})
