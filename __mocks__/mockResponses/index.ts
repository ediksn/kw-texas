import moment from 'moment'
import { PostInterface } from '~/interfaces/postInterface'

export const videoResponse = {
  id: 2230,
  title: 'zzz',
  description: 'zzz',
  videoUrl: 'file:///data/user/0/com.connectmobile/cache/Camera/b52e283c-40a5-40d0-9cf9-9a51843ec654.mp4',
  imageUrl: null,
  status: 'FINISHED',
  privacy: 'PUBLIC',
  publishedBy: null,
  liked: false,
  createdAt: '1630700559000',
  likesDetail: { likes: 0, __typename: 'Like' },
  bookmarked: false,
  timeRecorded: 1,
  views: 2,
  agents: [
    {
      id: 556397,
      kwUid: 556397,
      firstName: 'Irene',
      lastName: 'Murphy',
      __typename: 'Agent'
    }
  ],
  creatorHashtags: [],
  scripts: [
    {
      videoUrl: 'https://storage.googleapis.com/script-hub-practice-prod-bc0f/5_Waive_the_Appraisal_OBJ_1_low.mp4',
      videoResponseUrl:
        'https://storage.googleapis.com/script-hub-practice-prod-bc0f/5_Waive_the_Appraisal_RESPONSE_1_low.mp4',
      shortDescription:
        'I am hearing that people are waiving their appraisals and I do not want to do that, what does that even mean?',
      hashtags: [
        {
          id: 9,
          description: 'Appointment',
          tag: 'Appointment',
          __typename: 'Hashtag'
        }
      ],
      topics: [
        {
          id: 1,
          title: 'Lead Generation',
          __typename: 'Topic'
        }
      ],
      __typename: 'Script'
    }
  ],
  formats: [],
  __typename: 'ScriptMeeting'
}

export const profileResponse = {
  id: 532768,
  assigneeId: '556397',
  name: 'Kelle Test Team',
  sortName: 'Kelle Test Team',
  role: 'Buyer Specialist',
  photo: 'https://storage.googleapis.com/attachment-qa-eeac/556398/c5dd00kacb05iv34efp0.jpg',
  isPersonal: false,
  isDefault: true,
  members: [28947, 183149],
  userProfile: {
    photo: 'https://avatar.kwconnect.com/556397.jpeg',
    kw_uid: 556397,
    username: 'kelle2',
    first_name: 'Irene',
    last_name: 'Murphy',
    kw_email: null,
    default_org_id: 532768,
    recovery_email: 'kelle2@kw.com',
    email: 'kelle2@kw.com',
    marketing_email: 'tssv@kw.com',
    kw_start_dt: moment('2019-01-14'),
    re_start_dt: null,
    phone: '512-327-3070',
    mobile_phone: null,
    license: null,
    address_1: '1221 South Mopac Expy',
    address_2: 'Ste 400',
    city: 'Austin',
    country: 'US',
    state: 'TX',
    postal_code: '78746'
  }
}

export const postResponse: PostInterface = {
  id: '6172c50ac8a0fb001c4ddf0a',
  content: 'Great2',
  type: 'FILE',
  likedBy: [],
  likesCount: 0,
  repliesCount: 0,
  bookmarksCount: 0,
  isUserCreatorOfThePost: true,
  creatorId: '60ca46ca877e063418825130',
  creatorfirstName: 'Irene',
  creatorLastName: 'Murphy',
  creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
  createdAt: '2021-10-22T14:04:58.171Z',
  deleted: false,
  pinned: false,
  userHasAlreadyLiked: false,
  userHasAlreadyBookmarked: false,
  groupInfo: {
    id: '60f603104d8d7a001ac9ec79',
    name: 'Aanother Best Test Group 2021-08-30T07:11.000Z'
  },
  detail: {
    links: [
      {
        url: 'https://www.youtube.com/channel/UCDlujZcssCwV4P9XItrhC0A'
      }
    ]
  }
}

export const postsResponse = {
  data: {
    data: {
      getPosts: [
        {
          id: '6193d00ade67e4001bbba16e',
          content:
            '{"blocks":[{"key":"1l4c3","text":"J","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          isUserCreatorOfThePost: false,
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-11-16T15:36:42.438Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupInfo: { id: '60f603104d8d7a001ac9ec79', name: 'Aanother Best Test Group 2021-08-30T07:11.000Z' }
        },
        {
          id: '61923b6cee9a52001cc268ec',
          content:
            '{"blocks":[{"key":"8kmh4","text":"Now posr ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60f5b6cbc08afb001d3ba9bc',
          isUserCreatorOfThePost: true,
          creatorfirstName: 'Michael',
          creatorLastName: 'Reid',
          creatorPhoto: 'https://avatar.kwconnect.com/556398.jpeg',
          createdAt: '2021-11-15T10:50:20.180Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupInfo: { id: '610a9219d330e7001a0c8627', name: 'test_closed' }
        },
        {
          id: '618c0d7912357f001a886ba3',
          content:
            '{"blocks":[{"key":"dovh7","text":"Check out these new homes!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'FILE',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          isUserCreatorOfThePost: false,
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-11-10T18:20:41.473Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupInfo: { id: '61672a0c51c4f9001b9bec9b', name: 'Demo Market Center' }
        },
        {
          id: '618c0ce1d55ede00191adaab',
          content:
            '{"blocks":[{"key":"ehu3r","text":"Hey, Demo Market Center!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          isUserCreatorOfThePost: false,
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-11-10T18:18:09.317Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupInfo: { id: '61672a0c51c4f9001b9bec9b', name: 'Demo Market Center' }
        },
        {
          id: '618c0b51d55ede00191adaa9',
          content:
            '{"blocks":[{"key":"9892l","text":"Hey, this is a post!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'STANDARD',
          likedBy: ['60ca46ca877e063418825130'],
          likesCount: 1,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          isUserCreatorOfThePost: false,
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-11-10T18:11:29.901Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupInfo: { id: '61672a0c51c4f9001b9bec9a', name: 'Keller Williams Realty International' }
        },
        {
          id: '618af740d55ede00191ada36',
          content:
            '{"blocks":[{"key":"q97e","text":"I\'m sharing something!","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          isUserCreatorOfThePost: false,
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-11-09T22:33:36.127Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupInfo: { id: '61672a0c51c4f9001b9bec9a', name: 'Keller Williams Realty International' }
        },
        {
          id: '618978615de222001c15c163',
          content:
            '{"blocks":[{"key":"2r209","text":"https://www.youtube.com/watch?v=aV2Dfcz20xQ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":43,"key":0}],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"href":"https://www.youtube.com/watch?v=aV2Dfcz20xQ","rel":"noopener noreferrer","target":"_blank","url":"https://www.youtube.com/watch?v=aV2Dfcz20xQ"}}}}',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60f5b6cbc08afb001d3ba9bc',
          isUserCreatorOfThePost: true,
          creatorfirstName: 'Michael',
          creatorLastName: 'Reid',
          creatorPhoto: 'https://avatar.kwconnect.com/556398.jpeg',
          createdAt: '2021-11-08T19:20:01.313Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupInfo: { id: '60f603104d8d7a001ac9ec79', name: 'Aanother Best Test Group 2021-08-30T07:11.000Z' }
        },
        {
          id: '618973876c44c0001e5ba233',
          content:
            '{"blocks":[{"key":"bjpoc","text":"https://www.youtube.com/watch?v=daE2-3T5iiU","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60f5b6cbc08afb001d3ba9bc',
          isUserCreatorOfThePost: true,
          creatorfirstName: 'Michael',
          creatorLastName: 'Reid',
          creatorPhoto: 'https://avatar.kwconnect.com/556398.jpeg',
          createdAt: '2021-11-08T18:59:19.164Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupInfo: { id: '60f603104d8d7a001ac9ec79', name: 'Aanother Best Test Group 2021-08-30T07:11.000Z' }
        },
        {
          id: '61896dc55de222001c15c161',
          content:
            '{"blocks":[{"key":"eeaik","text":"Hello Irene Murphy ! What\'s going on? #kw","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":6,"length":12,"key":0}],"data":{}}],"entityMap":{"0":{"type":"mention","mutability":"SEGMENTED","data":{"mention":{"name":"Irene Murphy","avatar":"https://avatar.kwconnect.com/556397.jpeg","link":"https://avatar.kwconnect.com/556397.jpeg"}}}}}',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60f5b6cbc08afb001d3ba9bc',
          isUserCreatorOfThePost: true,
          creatorfirstName: 'Michael',
          creatorLastName: 'Reid',
          creatorPhoto: 'https://avatar.kwconnect.com/556398.jpeg',
          createdAt: '2021-11-08T18:34:45.856Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupInfo: { id: '60f603104d8d7a001ac9ec79', name: 'Aanother Best Test Group 2021-08-30T07:11.000Z' }
        },
        {
          id: '61854d2a77f135001cee788b',
          content:
            '{"blocks":[{"key":"99lm1","text":"r","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'FILE',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          isUserCreatorOfThePost: false,
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-11-05T15:26:34.237Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupInfo: { id: '610a9fc5d330e7001a0c868b', name: 'test_public_with_members' }
        }
      ]
    }
  }
}

export const createPostResponse = {
  data: {
    createPost: '6172c50ac8a0fb001c4ddf0a'
  }
}

export const addCommentToPostResponse = {
  data: {
    replyPost: '61b899362f3ef4001a768d59'
  }
}

export const eventResponse = {
  bookmarked: true,
  ends: moment('2021-10-11 19:00:00'),
  id: 857429,
  instructors: [
    {
      firstName: 'Gabi',
      lastName: 'Holmberg'
    }
  ],
  location: 'Online',
  name: 'Online Event for KW Texas Agents',
  price: '0',
  published: true,
  slug: null,
  starts: moment('2021-10-10 11:00:00')
}

export const eventsResponse = {
  data: {
    searchOnlineEvents: [
      {
        id: 857784,
        name: 'AT By API_2021-11-01T07:08:31.613',
        location: 'Online',
        starts: '2021-11-01 08:08:31',
        ends: '2021-11-03 11:18:31',
        slug: null,
        price: '123.12',
        instructors: [
          {
            firstName: 'Chris',
            lastName: 'Mondoux'
          }
        ],
        bookmarked: false,
        published: true
      },
      {
        id: 857788,
        name: 'AT By API_2021-11-01T07:08:36.352',
        location: 'Online',
        starts: '2021-11-01 08:08:36',
        ends: '2021-11-03 11:18:36',
        slug: null,
        price: '123.12',
        instructors: [
          {
            firstName: 'Chris',
            lastName: 'Mondoux'
          }
        ],
        bookmarked: true,
        published: true
      },
      {
        id: 857789,
        name: 'AT By API_2021-11-01T07:08:36.734',
        location: 'Online',
        starts: '2021-11-01 08:08:36',
        ends: '2021-11-03 11:18:36',
        slug: null,
        price: '123.12',
        instructors: [
          {
            firstName: 'Chris',
            lastName: 'Mondoux'
          }
        ],
        bookmarked: false,
        published: true
      },
      {
        id: 857790,
        name: 'AT By API_2021-11-01T07:08:38.294',
        location: 'Online',
        starts: '2021-11-01 08:08:38',
        ends: '2021-11-03 11:18:38',
        slug: null,
        price: '123.12',
        instructors: [
          {
            firstName: 'Chris',
            lastName: 'Mondoux'
          }
        ],
        bookmarked: true,
        published: true
      },
      {
        id: 857791,
        name: 'AT By API_2021-11-01T07:08:40.191',
        location: 'Online',
        starts: '2021-11-01 08:08:40',
        ends: '2021-11-03 11:18:40',
        slug: null,
        price: '123.12',
        instructors: [
          {
            firstName: 'Chris',
            lastName: 'Mondoux'
          }
        ],
        bookmarked: false,
        published: true
      },
      {
        id: 857792,
        name: 'AT By API_2021-11-01T07:08:41.628',
        location: 'Online',
        starts: '2021-11-01 08:08:41',
        ends: '2021-11-03 11:18:41',
        slug: null,
        price: '123.12',
        instructors: [
          {
            firstName: 'Chris',
            lastName: 'Mondoux'
          }
        ],
        bookmarked: false,
        published: true
      },
      {
        id: 857488,
        name: 'THAT IS Test5555',
        location: 'Online',
        starts: '2021-11-01 11:00:00',
        ends: '2021-11-01 18:00:00',
        slug: null,
        price: '90',
        instructors: [
          {
            firstName: 'Chris',
            lastName: 'Mondoux'
          }
        ],
        bookmarked: false,
        published: true
      },
      {
        id: 857277,
        name: 'Recurring event for daily',
        location: 'Online',
        starts: '2021-11-01 23:00:00',
        ends: '2021-11-02 00:00:00',
        slug: null,
        price: '0',
        instructors: [
          {
            firstName: 'Chris',
            lastName: 'Mondoux'
          }
        ],
        bookmarked: false,
        published: true
      },
      {
        id: 857793,
        name: 'AT By API_2021-11-02T07:08:33.065',
        location: 'Online',
        starts: '2021-11-02 08:08:33',
        ends: '2021-11-04 11:18:33',
        slug: null,
        price: '123.12',
        instructors: [
          {
            firstName: 'Chris',
            lastName: 'Mondoux'
          }
        ],
        bookmarked: false,
        published: true
      },
      {
        id: 857796,
        name: 'AT By API_2021-11-02T07:08:38.056',
        location: 'Online',
        starts: '2021-11-02 08:08:38',
        ends: '2021-11-04 11:18:38',
        slug: null,
        price: '123.12',
        instructors: [
          {
            firstName: 'Chris',
            lastName: 'Mondoux'
          }
        ],
        bookmarked: true,
        published: true
      }
    ]
  }
}
export const deletePostResponse = {
  data: { deletePost: true }
}

export const addBookmarkPostResponse = {
  data: { toggleBookmarkPost: true }
}

export const addLikePostResponse = {
  data: { toggleLikePost: true }
}

export const loginResponse = {
  id_token: 'id_token'
}

export const idTokenJWT = {
  at_hash: 'at_hash',
  sub: 'sub',
  kwoid: 'kwoid',
  auditTrackingId: 'auditTrackingId',
  iss: 'iss',
  tokenName: 'id_token',
  preferred_username: 'preferred_username',
  given_name: 'given_name',
  aud: 'aud',
  azp: 'azp',
  auth_time: 1634927734,
  name: 'name',
  realm: 'realm',
  exp: 1634931334,
  tokenType: 'tokenType',
  family_name: 'family_name',
  iat: 1634927734,
  email: 'email@kw.com',
  kwuid: 'kwuid'
}

export const pickerResponse = [
  {
    type: 'image/jpg',
    fileName: 'image1.jpg',
    width: 3000,
    height: 2002,
    uri: 'http://placehold.it/120x120&text=image1',
    fileSize: 6581432
  },
  {
    type: 'image/jpg',
    fileName: 'image2.jpg',
    width: 3000,
    height: 2002,
    uri: 'http://placehold.it/120x120&text=image2',
    fileSize: 6581432
  }
]
