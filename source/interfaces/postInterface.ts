import { UploadImageInterface } from './uploadImageInterface'

export interface FormPostInterface {
  group?: string
  text: string
  hasImages?: boolean
  images?: any[]
}

export interface PostInterface {
  id: string
  content: string
  type: string
  likedBy: string[]
  likesCount: number
  repliesCount: number
  bookmarksCount: number
  creatorfirstName: string
  creatorLastName: string
  isUserCreatorOfThePost: boolean
  creatorId: string
  creatorPhoto: string
  createdAt: string
  deleted: boolean
  detail: {
    attachments: UploadImageInterface[]
  }
  pinned: boolean
  userHasAlreadyLiked: boolean
  userHasAlreadyBookmarked: boolean
  groupInfo: {
    id: string
    name: string
  }
}

export interface PostProduceProps {
  type: string
  payload?: {
    data: PostInterface[]
    limit: number
  }
}

export interface PostReducerProps {
  draftState: any
  payload?: any
}
