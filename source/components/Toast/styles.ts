import { StyleSheet } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'
import { TOAST_HEIGHT } from './constants'
import { theme } from '../../constants/theme'
import { useCalculateShadow } from '~/hooks'

const shadow = useCalculateShadow()

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: TOAST_HEIGHT,
    margin: moderateScale(8),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    backgroundColor: '#282B33',
    borderRadius: moderateScale(4),
    bottom: -20,
    elevation: 4,
    zIndex: 100,
    ...shadow
  },
  icon: {
    width: moderateScale(21),
    height: moderateScale(21)
  },
  title: {
    flex: 1,
    marginLeft: scale(10),
    fontSize: theme.fonts.MEDIUM_SIZE,
    fontFamily: 'Mulish-Regular',
    color: theme.texts.white
  }
})

export default styles
