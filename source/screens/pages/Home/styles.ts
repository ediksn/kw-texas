import { StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

export const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    flex: 1
  },
  noPostWrapper: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: verticalScale(50),
    flex: 1
  },
  noPostMessage: {
    marginTop: verticalScale(36),
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Mulish-Bold'
  },
  noPostMessage2: {
    marginTop: verticalScale(16),
    textAlign: 'center',
    paddingLeft: scale(40),
    paddingRight: scale(40),
    fontSize: 12,
    fontFamily: 'Mulish-Bold'
  },
  button: {
    marginTop: verticalScale(100),
    position: 'absolute',
    bottom: 0,
    height: 48,
    width: '100%'
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Mulish-Bold'
  }
})
