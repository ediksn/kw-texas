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
  profileDetail: ProfileDetailInterface
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

export interface ProfileDetailInterface {
  kw_uid: number
  name: string
  username: string
  first_name: string
  last_name: string
  photo_url: string
  phone: string
  email: string
  location: { city: string; state: string }
  roles: string[]
  following: boolean
  mobile_phone: string
  service_area: string
  bio: string
  banner: string
  closed_volume: string
  closed_units: string
  contracts_written_u: string
  contracts_written_volume: string
  listings_taken_u: string
  listings_taken_dl: string
  listings_sold_u: string
  listings_sold_dl: string
  listings_written_u: string
  listings_written_volume: string
  listings_closed_u: string
  listings_closed_volume: string
  buy_sales_closed_u: string
  buy_sales_closed_volume: string
  lease_written_u: string
  lease_written_volume: string
  lease_closed_u: string
  lease_closed_volume: string
  refer_u: string
  refer_volume: string
  average_sale_price: string
  kw_start_date: string
  languages_spoken: string
  facebook: string
  twitter: string
  youtube: string
  linkedin: string
  google_plus: string
  instagram: string
  preferred_communication_method: string
  time_zone: string
  referral_opt_in: true
  channels: []
  profile_display_options: {
    memberships: boolean
    languages: boolean
    closed_units: boolean
    listings_sold_units: boolean
    buy_sales_closed_units: boolean
    lease_closed_units: boolean
    time_with_kw: boolean
  }
}
export interface MarketingProfile {
  profile: {
    first_name: string
    last_name: string
    email: string
    designation: string
    agent_photo: string
    agent_bio: string
    agent_license: string
    agent_license_list: string
    marketing_title: string
    brokerage_license: string
    brokerage_phone: string
    legal_footer: string
    mobile_phone: string
    office_phone: string
    fax: string
    website: string
    team: string
    branding_enabled: boolean
    luxury_enabled: boolean
    market_center: {
      market_center_name: string
      market_center_address1: string
      market_center_address2: string
    }
  }
  social: {
    facebook: string
    linkedin: string
    instagram: string
    youtube: string
    google: string
    twitter: string
    app_link: string
    agent_app: {
      app_hero_text: string
      app_url: string
      enable_app_page: boolean
    }
  }
  logo: {
    team_logo: string
    dba_logo: string
    hero_image_text: string
    hero_image: []
  }
  analytics: {
    facebook_pixel_id: string
    google_analytics_id: string
  }
  agent_site: {
    footer: []
    footer_image: []
  }
  service_flags: {
    keller_mortgage: boolean
    keller_covered: boolean
    feed_myhome: boolean
    feed_ticker: boolean
    neighborhood_enabled: boolean
  }
  affiliation: {
    created_at: string
    updated_at: string
    groups: []
  }
}
