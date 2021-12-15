export interface CommentDetailInterface {
  content: string
  edited: boolean
  likesCount: number
  userHasAlreadyLiked: boolean
  attachment: any
}

export interface CommentInterface {
  id: string
  creatorId: string
  createdAt: string
  type: string
  creatorPhoto: string
  creatorFirstName: string
  creatorLastName: string
  deleted: boolean
  postId: string
  updatedAt: string
  detail: CommentDetailInterface
}
