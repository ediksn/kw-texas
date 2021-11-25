import { StyleSheet } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'
import { theme } from '~/constants'

export const styles = StyleSheet.create({
  containerEmpty: {
    padding: moderateScale(10),
    flex: 1
  },
  container: {
    padding: moderateScale(10),
    flexGrow: 1
  },
  iconStyle: {
    width: scale(60),
    height: scale(60),
    marginBottom: scale(25)
  },
  titleStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: scale(10),
    alignItems: 'center'
  },
  text: {
    fontSize: theme.fonts.SMALL_SIZE,
    lineHeight: scale(16),
    color: theme.texts.secondary,
    marginLeft: scale(5)
  },
  icon: {
    height: scale(14),
    width: scale(14)
  },
  cardStyle: {
    flex: 1,
    marginRight: scale(8)
  }
})
