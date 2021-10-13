import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { theme } from '~/constants/theme'

export const styles = StyleSheet.create({
  tagView: {
    elevation: 2,
    backgroundColor: '#e4e5e7',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20
  },
  title: {
    fontSize: moderateScale(theme.fonts.SMALL_SIZE),
    color: '#3d424d',
    fontWeight: 'bold'
  }
})
