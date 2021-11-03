import { Platform } from 'react-native'

export const IS_IOS = Platform.OS === 'ios'
export const KEYBOARD_AVOIDING_VIEW_BEHAVIOR = IS_IOS ? 'position' : 'height'

export const ORG_TYPE = {
  TEAM: 'Team',
  PERSON: 'Person'
}
