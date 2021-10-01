import { StyleSheet } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  containerView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5)
  },
  inputsView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMessage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
    marginHorizontal: verticalScale(5)
  },
  notch: {
    backgroundColor: theme.backgroundWhite
  },
  noConnectionContainer: {
    alignItems: 'center',
    paddingVertical: '5%',
    backgroundColor: theme.red
  },
  noConnectionText: {
    color: theme.backgroundWhite
  }
})
