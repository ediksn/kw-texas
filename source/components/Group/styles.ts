import { StyleSheet } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 4
  },
  containerImage: {
    flex: 1,
    width: 96,
    flexDirection: 'column',
    backgroundColor: theme.darkGrey,
    borderRadius: 4,
    marginRight: 8
  },
  background: {
    flex: 1,
    backgroundColor: 'rgba(43, 43, 51, 0.6)',
    borderRadius: 4
  },
  containerCount: {
    flex: 1,
    marginRight: scale(9),
    borderRadius: 4
  },
  backgroundCount: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(43, 43, 51, 0.6)',
    borderRadius: 4
  },
  textCount: {
    fontStyle: 'normal',
    lineHeight: moderateScale(24),
    letterSpacing: 0,
    fontFamily: 'Mulish-Bold',
    fontSize: theme.fonts.MEDIUM_SIZE,
    color: theme.backgroundWhite
  },
  text: {
    fontStyle: 'normal',
    lineHeight: moderateScale(16),
    letterSpacing: 0,
    textAlign: 'left',
    fontFamily: 'Mulish-Bold',
    color: theme.backgroundWhite,
    marginHorizontal: scale(8),
    marginVertical: scale(8)
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 4
  }
})
