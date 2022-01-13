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
  content: {
    flex: 1
  },
  body: {
    flex: 1,
    paddingVertical: verticalScale(7)
  },
  avatarBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
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
  titleDropTouchTagsView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dropTouchTags: {
    marginTop: -2
  },
  tagsTextCount: {
    color: theme.post.green,
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Bold'
  },
  group: {
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Bold',
    color: theme.post.green,
    marginRight: scale(7)
  },
  inputAddPost: {
    minHeight: 150,
    justifyContent: 'flex-start',
    marginTop: verticalScale(32),
    fontSize: theme.fonts.LARGE_SIZE,
    width: '100%',
    fontFamily: 'Mulish-Regular',
    color: theme.post.inputText
  },
  scrollInputs: {
    paddingHorizontal: scale(16)
  },
  scrollInputsContainer: {
    flexGrow: 1
  },
  footer: {
    borderTopColor: 'rgba(43, 43, 51, 0.1)',
    borderTopWidth: 1,
    paddingHorizontal: scale(20),
    backgroundColor: theme.backgrounds.whiteBackground,
    height: verticalScale(65),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  disabled: {
    opacity: 0.5
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomColor: 'rgba(174, 178, 186, 0.2)'
  },
  dropdownHeader: {
    color: theme.lightColor,
    fontFamily: 'Mulish-Regular',
    fontSize: theme.fonts.SMALL_SIZE,
    lineHeight: 16,
    fontWeight: '700'
  }
})
