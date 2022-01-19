import { UploadImageInterface } from './uploadImageInterface'

export interface Link {
  url: string
}

export type PostType = 'LINK' | 'STANDARD' | 'FILE'

export const POST_TYPES: Record<string, PostType> = {
  LINK: 'LINK',
  FILE: 'FILE',
  STANDARD: 'STANDARD'
}
export interface FormPostInterface {
  group?: string
  text: string
  hasImages?: boolean
  images?: any[]
  links?: string[]
  hasLinks?: boolean
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
  updatedAt: string
  deleted: boolean
  detail: {
    attachments?: UploadImageInterface[]
    links?: Link[]
  }
  pinned: boolean
  userHasAlreadyLiked: boolean
  userHasAlreadyBookmarked: boolean
  userHasAlreadyFlagged: boolean
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
