import { PostInterface } from '~/interfaces/postInterface'
import { ProfileDetail } from '~/interfaces/usrInterface'
import { CommentInterface } from '~/interfaces/commentInterface'
import { GroupInterface } from '~/interfaces/groupInterface'

export const postMockObject: PostInterface = {
  bookmarksCount: 0,
  content:
    '{"blocks":[{"key":"b4fr9","text":"Post with images","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
  createdAt: '2021-11-26T14:44:17.187Z',
  creatorId: '60ca46ca877e063418825130',
  creatorLastName: 'Murphy',
  creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
  creatorfirstName: 'Irene',
  deleted: false,
  detail: {
    images: [
      {
        url: 'some url',
        id: 'saddsas'
      }
    ]
  },
  groupInfo: { id: '60f5c7224ad3ae0019a91973', name: 'Trending Group' },
  id: '61a0f2c1f48c2600181c8add',
  isUserCreatorOfThePost: true,
  likedBy: [],
  likesCount: 0,
  pinned: false,
  repliesCount: 0,
  type: 'FILE',
  userHasAlreadyBookmarked: false,
  userHasAlreadyLiked: false
}

export const profileDetailMock: ProfileDetail = {
  kw_uid: 0,
  name: 'Test',
  username: 'Test',
  first_name: 'Test',
  last_name: 'Test',
  photo_url: '',
  phone: '00000000',
  email: 'test',
  location: { city: 'test', state: 'test' },
  roles: ['Test', 'test'],
  following: false,
  mobile_phone: '0000000',
  service_area: 'test;test',
  bio: 'bio test',
  banner: 'test',
  closed_volume: '',
  closed_units: '',
  contracts_written_u: '',
  contracts_written_volume: '',
  listings_taken_u: '',
  listings_taken_dl: '',
  listings_sold_u: '',
  listings_sold_dl: '',
  listings_written_u: '',
  listings_written_volume: '',
  listings_closed_u: '',
  listings_closed_volume: '',
  buy_sales_closed_u: '',
  buy_sales_closed_volume: '',
  lease_written_u: '',
  lease_written_volume: '',
  lease_closed_u: '',
  lease_closed_volume: '',
  refer_u: '',
  refer_volume: '',
  average_sale_price: '',
  kw_start_date: '',
  languages_spoken: '',
  facebook: '',
  twitter: '',
  youtube: '',
  linkedin: '',
  google_plus: '',
  instagram: '',
  preferred_communication_method: '',
  time_zone: '',
  referral_opt_in: true,
  channels: [],
  profile_display_options: {
    memberships: false,
    languages: false,
    closed_units: false,
    listings_sold_units: false,
    buy_sales_closed_units: false,
    lease_closed_units: false,
    time_with_kw: false
  }
}
export const commentMockObject: CommentInterface = {
  id: '61a0f2c1f48c2600181c8ad2',
  creatorId: '61a0f31f48c2600181c8add',
  createdAt: '2021-11-26T14:44:17.187Z',
  type: 'STANDARD',
  creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
  creatorLastName: 'Murphy',
  creatorFirstName: 'Irene',
  deleted: false,
  postId: '61a0f2c1f48c2600181c8add',
  updatedAt: '2021-11-26T14:44:17.187Z',
  detail: {
    content: 'test comment',
    edited: false,
    likesCount: 0,
    userHasAlreadyLiked: false,
    media: null
  }
}

export const groupMockObject: GroupInterface = {
  id: '1',
  description: 'description',
  icon: {
    filename: 'hello.jpg',
    id: '1',
    url: 'https://avatar.kwconnect.com/556397.jpeg'
  },
  membersCount: 1,
  name: 'Test',
  postCount: 1,
  status: 1
}
