interface Topic {
  id: number
  title: string
  __typename: string
}

interface Hashtag {
  id: number
  description: string
  tag: string
}

interface Script {
  hashtags: Hashtag[]
  shortDescription: string
  topics: Topic[]
  videoResponseUrl: string
  videoUrl: string
  __tupename: string
}

interface LikesDetail {
  likes: number
  __typename: string
}

interface Format {
  format: string
  videoUrl: string
  __typename: string
}

interface Agent {
  id: number
  firstName: string
  lastName: string
  kwUid: string
  __typename: string
}

export interface VideoInterface {
  id: number
  agents: Agent[]
  bookmarked: boolean
  createdAt: string
  creatorHashtags: object[]
  description: string
  formats: Format[]
  imageUrl: string
  liked: boolean
  likesDetail: LikesDetail
  privacy: string
  publishedBy: string
  scripts: Script[]
  status: string
  timeRecorded: number
  title: string
  videoUrl: string
  views: number
  __typename: string
}

export interface VideoProduceProps {
  type: string
  payload?: {
    searchScriptMeeting: VideoInterface[]
    page: number
  }
}

export interface VideoReducerProps {
  draftState: any
  payload?: {
    searchScriptMeeting: VideoInterface[]
    page: number
  }
}

export interface VideoProduceBmProps {
  type: string
  payload?: {
    searchScriptMeetingBm: VideoInterface[]
    page: number
  }
}

export interface VideoReducerBmProps {
  draftState: any
  payload?: {
    searchScriptMeetingBm: VideoInterface[]
    page: number
  }
}
