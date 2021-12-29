import { moderateScale } from 'react-native-size-matters'

export type TextType = 'error' | 'success' | 'normal'

const FONTS = {
  BIG_SIZE: moderateScale(18),
  LARGE_SIZE: moderateScale(16),
  MEDIUM_SIZE: moderateScale(14),
  SMALL_SIZE: moderateScale(12),
  VERY_SMALL_SIZE: moderateScale(10)
}

const TEXTS = {
  primary: '#212529',
  secondary: '#6C727E',
  green: '#006C84',
  success: '#478943',
  error: '#C5050B',
  white: '#FFFFFF'
}

const BUTTONS_THEME = {
  primary: {
    backgroundColor: '#006C84',
    color: '#FFFFFF'
  },
  secondary: {
    backgroundColor: '#FFFFFF',
    color: '#006C84'
  },
  types: {
    CONTAINED: 'CONTAINED',
    OUTLINED: 'OUTLINED',
    TEXT: 'TEXT'
  }
}

export const BACKGROUNDS = {
  successDark: '#98DE94',
  successLight: '#D2E4D1',
  errorDark: '#E9BFC1',
  errorLight: '#E9D1D2',
  darkBackground: '#383e51',
  whiteBackground: 'white',
  darkWhiteBackground: '#D8D8D8',
  greyBackground: '#E4E5E7',
  darkGreyBackground: '#F6F6F7',
  greyInitials: '#3D424D',
  backgroundLogin: '#F7F7F7',
  ligthGreyBackground: '#DDDDDD'
}

const POST_CARD = {
  name: '#282B33',
  options: '#282B33',
  date: '#6C727E',
  inputTitle: '#6C727E',
  inputText: '#282B33',
  content: '#3D424D',
  contentBottom: '#6C727E',
  green: '#006C84',
  horizontalLine: '#2b2b33',
  dotsColor: '#3D424D',
  shadowColor: '#000000'
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
  greenLightColor: '#F7F7F8',
  red: '#C5050B',
  lighRed: '#DE2121',
  darkGrey: '#282B33',
  grey: 'rgba(61, 66, 77, 0.2)',
  darkBackground: '#383e51',
  lightColor: '#3D424D',
  backgrounds: BACKGROUNDS,
  fonts: FONTS,
  buttons: BUTTONS_THEME,
  texts: TEXTS,
  post: POST_CARD,
  spinner: '#3D424D'
}
