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

interface LocationInterface {
  city: string
  state: string
  postalCode: string
  country: string
}

interface MemberInterface {
  id: string
  kwUid: number
  username: string
  firstName: string
  lastName: string
  email: string
  memberType: string
  state: string
  phone: string
  photoUrl: string
  location: LocationInterface
}
export interface GroupInterface {
  id: string
  name: string
  description: string
  postCount: number
  membersCount: number
  status: number
  icon: Icon
  members: MemberInterface[]
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
