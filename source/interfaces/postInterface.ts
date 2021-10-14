export interface PostInterface {
  id: string
  content: string
  type: string
  likedBy: []
  likesCount: 0
  repliesCount: 0
  bookmarksCount: 0
  creatorfirstName: string
  creatorLastName: string
  creatorPhoto: string
  createdAt: string
  deleted: boolean
  pinned: boolean
  userHasAlreadyLiked: boolean
  userHasAlreadyBookmarked: boolean
  groupId: string
  detail: any
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
  payload?: {
    data: PostInterface[]
    limit: number
  }
}
