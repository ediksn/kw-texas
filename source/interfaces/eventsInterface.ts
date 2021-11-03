import moment from 'moment'

interface InstructorsInterface {
  firstName: string
  lastName: string
}

export interface EventsInterface {
  id: number
  name: string
  price: string
  location: string
  ends: moment.Moment
  starts: moment.Moment
  published: boolean
  instructors: InstructorsInterface[]
  bookmarked: boolean
  slug: any
}
