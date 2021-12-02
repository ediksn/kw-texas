import { StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { useDeviceWidth } from '../../../hooks/settings'

const DEVICE_WIDTH = useDeviceWidth()
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
    flex: 1
  },
  list: {
    flex: 1
  },
  contentListStyle: {
    flexGrow: 1
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
    marginBottom: verticalScale(24),
    position: 'absolute',
    bottom: 0,
    height: verticalScale(48),
    width: DEVICE_WIDTH - scale(17)
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Mulish-Bold'
  }
})
