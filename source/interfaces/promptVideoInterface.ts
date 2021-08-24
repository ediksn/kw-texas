interface Hashtag {
  id: number
  tag: string
  description?: string
  createdAt?: string
  updatedAt?: string
  __typename: string
}
interface Topics {
  id: number
  title: string
  hashtags: Hashtag[]
}
interface Rol {
  id: number
  name: string
  description: string
  roleType: number
  createdAt: string
  updatedAt: string
  __typename: string
}
interface Person {
  id: number
  firstName: string
  lastName: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  __typename: string
}
export interface PromptVideoInterface {
  id: number
  shortDescription: string
  description: string
  videoUrl: string
  videoResponseUrl: string
  startDate: string
  recordings: number
  lastRecording: string
  endDate: string
  hashtags: Hashtag[]
  person: Person
  roles: Rol[]
  topics: Topics[]
  __typename: string
}

export interface PromptVideoProduceProps {
  type: string
  payload?: {
    getSoloScripts: PromptVideoInterface[]
    page: number
  }
}

export interface PromptVideoReducerProps {
  draftState: any
  payload?: {
    getSoloScripts: PromptVideoInterface[]
    page: number
  }
}
