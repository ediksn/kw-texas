import { StyleSheet } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.backgroundColor
  },
  detailContainer: {
    width: '100%',
    paddingHorizontal: scale(10),
    alignItems: 'flex-start',
    bottom: scale(30)
  },
  avatarContainer: {
    height: scale(135),
    width: scale(135),
    borderRadius: scale(69),
    bottom: scale(60),
    backgroundColor: theme.backgroundWhite,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    backgroundColor: theme.backgroundWhite,
    height: scale(216),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  avatarStyle: {
    height: scale(128),
    width: scale(128),
    borderRadius: scale(64)
  },
  nameStyle: {
    fontFamily: 'Mulish-Bold',
    fontWeight: '800',
    fontSize: theme.fonts.BIG_SIZE,
    color: theme.darkGrey,
    bottom: scale(50)
  },
  subTextTitle: {
    fontFamily: 'Mulish-Bold',
    fontWeight: '700',
    fontSize: theme.fonts.SMALL_SIZE,
    color: theme.darkGrey,
    lineHeight: theme.fonts.MEDIUM_SIZE
  },
  subText: {
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: theme.fonts.SMALL_SIZE,
    color: theme.darkGrey,
    marginBottom: scale(10),
    textAlign: 'left',
    lineHeight: theme.fonts.MEDIUM_SIZE
  },
  rolesContainer: {
    flexDirection: 'row',
    bottom: scale(40),
    flexWrap: 'wrap'
  },
  role: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: scale(10)
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: moderateScale(5),
    alignSelf: 'flex-end'
  },
  subtitle: {
    marginTop: verticalScale(4),
    fontFamily: 'Mulish-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16
  },
  subTitleRol: {
    marginTop: verticalScale(4),
    fontFamily: 'Mulish-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    marginRight: scale(0)
  },
  areasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: scale(2)
  },
  area: {
    flexDirection: 'row',
    marginRight: scale(5)
  },
  logosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  banner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  }
})
