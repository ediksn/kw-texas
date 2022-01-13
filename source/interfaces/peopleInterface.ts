export interface PeopleMarkedInterface {
  [kwUid: number]: boolean
}

interface LocationInterface {
  country: string | null
  state: string
  city: string
  address: string | null
  postalCode: string | null
}
export interface PeopleInterface {
  kwUid: number
  firstName: string
  lastName: string
  location: LocationInterface
  photoUrl: string
}

export interface PeopleProduceProps {
  type: string
  payload?: {
    data: PeopleInterface[]
    limit: number
  }
}

export interface PeopleReducerProps {
  draftState: any
  payload?: any
}
