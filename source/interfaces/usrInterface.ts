export interface UsrProfileInterface {
  name: string
  roles: any
  kw_uid: number
  profile: string
  phone: number
  mobile_phone: number
  email: string
  bio: string
  facebook: string
  google_plus: string
  instagram: string
  linkedin: string
  twitter: string
  youtube: string
}

export interface UsrProfileProduceProps {
  type: string
  payload?: UsrProfileInterface[]
}

export interface UsrProfileReducerProps {
  draftState: any
  payload?: UsrProfileInterface[]
}
