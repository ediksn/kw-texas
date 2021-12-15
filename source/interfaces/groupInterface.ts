import { TextStyle, ViewStyle } from 'react-native'

export interface OptionInterface {
  key?: string
  isTitle?: boolean
  handleOption?: () => void
  title?: string
  color?: string
}

export interface GroupOptionInterface {
  visible: boolean
  buttonRef: any
  options: OptionInterface[]
  styleContainer?: ViewStyle
  styleOption?: TextStyle
  toRight?: boolean
  onRequestClose: () => void
}

interface Icon {
  url: string
  id: string
  filename: string
}

export interface GroupInterface {
  id: string
  name: string
  description: string
  postCount: number
  membersCount: number
  status: number
  icon: Icon
}

export interface GroupProduceProps {
  type: string
  payload?: {
    data: GroupInterface[]
    limit: number
  }
}

export interface GroupReducerProps {
  draftState: any
  payload?: {
    data: GroupInterface[]
    limit: number
  }
}
