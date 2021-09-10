import { theme } from '~/constants'
import { TextType } from '~/constants/theme'

export interface TextColorsInterface {
  text: string
  background: {
    light: string
    dark: string
  }
}

export const textColors = (type: TextType): TextColorsInterface => {
  switch (type) {
    case 'error': {
      return {
        text: theme.texts.error,
        background: {
          light: theme.backgrounds.errorLight,
          dark: theme.backgrounds.errorDark
        }
      }
    }
    case 'success': {
      return {
        text: theme.texts.success,
        background: {
          light: theme.backgrounds.successLight,
          dark: theme.backgrounds.successDark
        }
      }
    }
    default: {
      return {
        text: theme.texts.primary,
        background: {
          light: theme.backgrounds.whiteBackground,
          dark: theme.backgrounds.darkWhiteBackground
        }
      }
    }
  }
}
