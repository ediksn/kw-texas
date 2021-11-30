import { StyleSheet } from 'react-native'
import { verticalScale, scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  mediaContainer: {
    marginVertical: verticalScale(10),
    flex: 1
  },
  smallMediaRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bigMedia: {
    width: '100%',
    height: 250,
    marginBottom: verticalScale(4)
  },
  smallMedia: {
    flex: 1,
    width: '100%',
    height: 180
  },
  leftMedia: {
    marginRight: scale(4)
  },
  rightMedia: {
    marginLeft: scale(4)
  },
  opacityImage: {
    flex: 1,
    height: '100%',
    backgroundColor: 'rgba(1,1,2,0.9)'
  },
  coverTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  coverText: {
    color: theme.texts.white,
    fontWeight: 'bold',
    fontSize: theme.fonts.BIG_SIZE
  }
})
