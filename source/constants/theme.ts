import { moderateScale } from 'react-native-size-matters'

const FONTS = {
  BIG_SIZE: moderateScale(18),
  LARGE_SIZE: moderateScale(16),
  MEDIUM_SIZE: moderateScale(14),
  SMALL_SIZE: moderateScale(12),
  VERY_SMALL_SIZE: moderateScale(10)
}

export const theme = {
  backgroundDark: '#006C84',
  backgroundWhite: 'white',
  activeColor: '#006C84',
  inActiveColor: '#212121',
  placeholderTextColor: 'rgba(61, 66, 77, 1)',
  backgroundColor: '#FFFFFF',
  greenColor: '#6C727E',
  red: '#C5050B',
  darkGrey: '#282B33',
  grey: '#C8C8C8',
  beige: '#fff8dc',
  fonts: FONTS
}
