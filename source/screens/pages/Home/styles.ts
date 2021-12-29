import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'
import { useDeviceWidth } from '../../../hooks/settings'

const DEVICE_WIDTH = useDeviceWidth()
export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1,
    paddingTop: verticalScale(16)
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
    height: scale(48),
    width: DEVICE_WIDTH - scale(17)
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Mulish-Bold'
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
