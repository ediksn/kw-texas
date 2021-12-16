import moment from 'moment'

interface UserProfileInterface {
  photo: string
  kw_uid: number
  username: string
  first_name: string
  last_name: string
  kw_email: string | null
  default_org_id: number
  recovery_email: string
  email: string
  marketing_email: string
  kw_start_dt: moment.Moment
  re_start_dt: moment.Moment | null
  phone: string
  mobile_phone: string | null
  license: any
  address_1: string
  address_2: string
  city: string
  country: string
  state: string
  postal_code: string
}

export interface ProfileInterface {
  id: number
  name: string
  sortName: string
  role: any
  photo: string
  assigneeId: string
  members: number[]
  isPersonal: boolean
  isDefault: boolean
  userProfile: UserProfileInterface
}
interface OrgTypeInterface {
  id: number
  name: string
}

interface RoleInterface {
  id: number
  name: string
}

interface PersonRoleOrgsInterface {
  role: RoleInterface
}

interface MembersInterface {
  kw_uid: number
}
export interface AccountInterface {
  id: number
  name: string
  org_type_id: number
  start_dt: moment.Moment
  end_dt: moment.Moment
  parent_ord_id: number
  org_type: OrgTypeInterface
  person_role_orgs: PersonRoleOrgsInterface[]
  members: MembersInterface[]
}

export interface UsrProfileProduceProps {
  type: string
  payload?: any
}

export interface UsrProfileReducerProps {
  draftState: any
  payload?: any
}
