import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightText: {
    color: theme.texts.green,
    fontFamily: 'Mulish-Bold',
    fontSize: theme.fonts.MEDIUM_SIZE
  },
  rightTextDisabled: {
    opacity: 0.6
  },
  content: {
    flex: 1
  },
  body: {
    flex: 1,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(7)
  },
  avatarBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  avatar: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20)
  },
  avatarDefault: {
    width: scale(30),
    height: scale(30),
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
  dropTouch: {
    width: scale(141),
    marginTop: verticalScale(4),
    flexDirection: 'row',
    alignItems: 'center'
  },
  group: {
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Bold',
    color: theme.post.green,
    marginRight: scale(7)
  },
  inputText: {
    flex: 1,
    marginTop: verticalScale(32),
    paddingTop: 0,
    marginBottom: verticalScale(10),
    fontSize: theme.fonts.LARGE_SIZE,
    fontFamily: 'Mulish-Regular',
    color: theme.post.inputText
  },
  footer: {
    borderTopColor: 'rgba(43, 43, 51, 0.1)',
    borderTopWidth: 1,
    paddingHorizontal: scale(20),
    height: verticalScale(65),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconDisabled: {
    opacity: 0.5
  }
})
