import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'
import { useDeviceWidth } from '~/hooks'

const DEVICE_WIDTH = useDeviceWidth()
export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.backgrounds.whiteBackground
  },
  header: {
    backgroundColor: theme.backgrounds.whiteBackground,
    justifyContent: 'flex-start',
    zIndex: 9999,
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
  leaveGroupButton: {
    margin: 0
  },
  info: {
    marginLeft: moderateScale(12),
    width: '80%'
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
  },
  communityCoverImage: {
    width: '100%',
    height: 220
  },
  animatedViewContainer: {
    zIndex: 10,
    marginBottom: verticalScale(10)
  },
  communityTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginVertical: verticalScale(8),
    fontFamily: 'Mulish'
  },
  emptyListContainer: {
    marginTop: verticalScale(20)
  },
  emptyListScrollContainer: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  emptyListScrollContentContainer: {
    flexGrow: 1
  },
  postCardContainer: {
    marginHorizontal: moderateScale(20)
  },
  avatarFixed: {
    marginLeft: -15,
    borderWidth: 2,
    borderColor: theme.backgroundColor
  },
  avatarMembersCount: {
    marginLeft: -15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.backgroundColor,
    height: moderateScale(40),
    width: moderateScale(40),
    backgroundColor: theme.lightBlueColor
  },
  membersCountText: {
    fontWeight: '700',
    textAlign: 'center',
    color: theme.activeColor,
    fontFamily: 'Mulish'
  },
  animatedFlatListStyle: {
    backgroundColor: theme.greenLightColor
  },
  title: {
    backgroundColor: 'transparent',
    color: theme.backgroundWhite,
    fontSize: 18
  },
  titleHeaderContainer: {
    paddingHorizontal: moderateScale(18)
  },
  locationText: {
    marginLeft: moderateScale(5),
    color: theme.greenColor,
    fontFamily: 'Mulish'
  },
  hiddenLocation: {
    opacity: 0
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.greenLightColor
  },
  rowMembersJoinLeaveGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rowMembers: {
    flexDirection: 'row'
  },
  rowLocation: {
    flexDirection: 'row',
    marginVertical: verticalScale(8),
    marginLeft: moderateScale(5)
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
    borderBottomColor: 'rgba(174, 178, 186, 0.2)'
  },
  dropdownHeader: {
    color: theme.lightColor,
    fontFamily: 'Mulish-Regular',
    fontSize: theme.fonts.SMALL_SIZE,
    lineHeight: 16,
    fontWeight: '700'
  },
  button: {
    height: scale(48),
    width: DEVICE_WIDTH - scale(17),
    marginVertical: verticalScale(20)
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Mulish-Bold'
  }
})
