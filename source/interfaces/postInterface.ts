// interface Author {
//   name: string
//   picture: string
// }

interface PollOption {
  id: string
  text: string
  votes_count: number
  percent: number
}
export interface PostInterface {
  id: string
  title: string
  type: string
  url: string
  status: string
  content: string
  image_medium: any
  image_large: any
  favorite: boolean
  followed: boolean
  liked: boolean
  pinned: boolean
  edited: boolean
  follower: boolean
  likes_count: number
  replies_count: number
  created_at: string
  updated_at: string
  created_by: {
    user_id: number
    email: string
    kw_uid: number
    first_name: string
    last_name: string
    photo_url: string
    avatar: string
    market_center: string
    location: string
  }
  group: {
    id: number
    name: string
    slug: string
    type: any
    owner: number
    url: string
  }
  channel: {
    id: number
    name: string
    channel_id: any
    group_id: number
    creator_id: number
    created_at: string
    updated_at: string
  }
  tags: any[]
  mentions: any[]
  poll_options: PollOption[]
  voted_options: string[]
  voted: boolean
  poll_votes_count: number
  multiple: boolean
  expired: boolean
  duration: number
  replies: any[]
  permissions: string[]
  topics: any[]
}
// export interface PostInterface {
//   id: number
//   author: Author
//   content: string
//   date: string
//   likes: number
//   comments: number
//   shares: number
// }

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
