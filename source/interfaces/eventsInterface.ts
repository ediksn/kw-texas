import moment from 'moment'

interface InstructorsInterface {
  firstName: string
  lastName: string
}

export interface EventInterface {
  id: string
  name: string
  location: string
  starts: moment.Moment
  ends: moment.Moment
  slug: any
  price: string
  instructors: InstructorsInterface[]
  bookmarked: boolean
  published: boolean
}

export interface EventsProduceProps {
  type: string
  payload?: {
    data: EventInterface[]
    limit: number
  }
}

export interface EventsReducerProps {
  draftState: any
  payload?: any
}
