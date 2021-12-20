import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.backgrounds.whiteBackground
  },
  header: {
    backgroundColor: theme.backgrounds.whiteBackground,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: verticalScale(4),
    paddingRight: scale(16)
  },
  content: {
    flex: 1,
    backgroundColor: theme.greenLightColor
  },
  postContainer: {
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(16),
    backgroundColor: theme.greenLightColor
  },
  body: {
    flex: 1,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(7)
  },
  date: {
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Regular',
    color: theme.post.date
  },
  avatarBox: {
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    marginLeft: moderateScale(12),
    width: '75%'
  },
  name: {
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Bold',
    textTransform: 'uppercase',
    color: theme.post.name
  },
  containerComments: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  children: {
    flexGrow: 1
  }
})
