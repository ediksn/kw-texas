import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    paddingVertical: '2%',
    display: 'flex',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 8,
    backgroundColor: theme.backgrounds.whiteBackground
  },
  textContainer: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  rowTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 'auto',
    flex: 1
  },
  avatarStyle: {
    marginRight: moderateScale(5),
    borderRadius: moderateScale(6),
    height: moderateScale(30),
    width: moderateScale(30)
  },
  touchableHighlight: {
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    marginHorizontal: '3%',
    borderRadius: 50
  },
  text: {
    fontFamily: 'Mulish-Bold',
    fontSize: theme.fonts.LARGE_SIZE,
    lineHeight: 24,
    fontWeight: '700',
    flex: 1
  },
  secondRightButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.3
  },
  disabled: {
    opacity: 0.5
  }
})
