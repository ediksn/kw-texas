import { Platform } from 'react-native'

export const IS_IOS = Platform.OS === 'ios'
export const KEYBOARD_AVOIDING_VIEW_BEHAVIOR = IS_IOS ? 'padding' : 'height'
