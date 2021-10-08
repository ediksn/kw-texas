interface Author {
  name: string
  picture: string
}

export interface PostInterface {
  id: number
  author: Author
  content: string
  date: string
  likes: number
  comments: number
  shares: number
}

export interface PostProduceProps {
  type: string
  payload?: {
    data: PostInterface[]
    page: number
  }
}

export interface PostReducerProps {
  draftState: any
  payload?: {
    data: PostInterface[]
    page: number
  }
}
