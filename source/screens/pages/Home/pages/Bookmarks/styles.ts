import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { theme } from '../../../../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  noPostWrapper: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1
  },
  noPostMessage: {
    marginTop: verticalScale(36),
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.fonts.LARGE_SIZE,
    fontFamily: 'Mulish-Bold'
  },
  noPostMessage2: {
    marginTop: verticalScale(16),
    textAlign: 'center',
    fontSize: theme.fonts.SMALL_SIZE,
    fontFamily: 'Mulish-Bold'
  },
  list: {
    flex: 1
  },
  contentListStyle: {
    flexGrow: 1
  }
})
