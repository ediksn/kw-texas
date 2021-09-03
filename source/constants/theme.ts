import { moderateScale } from 'react-native-size-matters'

const FONTS: any = {
  BIG_SIZE: moderateScale(18),
  LARGE_SIZE: moderateScale(16),
  MEDIUM_SIZE: moderateScale(14),
  SMALL_SIZE: moderateScale(12),
  VERY_SMALL_SIZE: moderateScale(10)
}

const TEXTS = {
  primary: '#212529',
  secondary: '#6C727E',
  green: '#4797A5',
  white: '#FFFFFF'
}

const BUTTONS_THEME = {
  primary: {
    backgroundColor: '#4797A5',
    color: '#FFFFFF'
  },
  secondary: {
    backgroundColor: '#FFFFFF',
    color: '#4797A5'
  },
  types: {
    CONTAINED: 'CONTAINED',
    OUTLINED: 'OUTLINED',
    TEXT: 'TEXT'
  }
}

export const theme = {
  backgroundDark: '#006C84',
  backgroundWhite: 'white',
  activeColor: '#006C84',
  inActiveColor: '#212121',
  placeholderTextColor: 'rgba(61, 66, 77, 1)',
  backgroundColor: '#FFFFFF',
  greenColor: '#6C727E',
  darkGreenColor: '#006C84',
  red: '#C5050B',
  darkGrey: '#282B33',
  grey: 'rgb(200,200,200)',
  darkBackground: '#383e51',
  lightColor: '#3D424D',
  beige: '#fff8dc',
  fonts: FONTS,
  buttons: BUTTONS_THEME,
  texts: TEXTS
}
