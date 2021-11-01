export interface FormPostInterface {
  group?: string
  text: string
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
  creatorId: string
  creatorPhoto: string
  createdAt: string
  deleted: boolean
  pinned: boolean
  userHasAlreadyLiked: boolean
  userHasAlreadyBookmarked: boolean
  groupId: string
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
