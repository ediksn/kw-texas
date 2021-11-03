import moment from 'moment'

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

export const postResponse = {
  id: '6172c50ac8a0fb001c4ddf0a',
  content: 'Great2',
  type: 'FILE',
  likedBy: [],
  likesCount: 0,
  repliesCount: 0,
  bookmarksCount: 0,
  creatorId: '60ca46ca877e063418825130',
  creatorfirstName: 'Irene',
  creatorLastName: 'Murphy',
  creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
  createdAt: '2021-10-22T14:04:58.171Z',
  deleted: false,
  pinned: false,
  userHasAlreadyLiked: false,
  userHasAlreadyBookmarked: false,
  groupId: '60f5dc9b71551e6b786910a0'
}

export const postsResponse = {
  data: {
    data: {
      getPosts: [
        {
          id: '6172c50ac8a0fb001c4ddf0a',
          content: 'Great2',
          type: 'FILE',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-10-22T14:04:58.171Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupId: '60f5dc9b71551e6b786910a0'
        },
        {
          id: '6172c4fca2d4ad0018929d59',
          content: 'Great!',
          type: 'LINK',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-10-22T14:04:44.202Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupId: '60f5dc9b71551e6b786910a0'
        },
        {
          id: '61729509c8a0fb001c4dde6b',
          content:
            '{"blocks":[{"key":"eea1k","text":"test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'POLL',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-10-22T10:40:09.360Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupId: '60f5c7224ad3ae0019a91973'
        },
        {
          id: '617284e6a2d4ad0018929cc1',
          content: 'some test2',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-10-22T09:31:18.517Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupId: '615fdfd0a003080022b59608'
        },
        {
          id: '6171b06ec8a0fb001c4dde59',
          content: 'Proving it works cool22!',
          type: 'FILE',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-10-21T18:24:46.655Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupId: '60f5dc9b71551e6b786910a0'
        },
        {
          id: '6171aa3ba2d4ad0018929ca2',
          content: 'Proving it works cool!',
          type: 'FILE',
          likedBy: ['60ca46ca877e063418825130'],
          likesCount: 1,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-10-21T17:58:19.815Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: true,
          userHasAlreadyBookmarked: false,
          groupId: '60f5dc9b71551e6b786910a0'
        },
        {
          id: '6171aa1dc8a0fb001c4dde57',
          content: 'Cool Demo video!',
          type: 'LINK',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-10-21T17:57:49.327Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupId: '60f5dc9b71551e6b786910a0'
        },
        {
          id: '6171a11ba2d4ad0018929c9f',
          content:
            '{"blocks":[{"key":"34ove","text":"Post2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-10-21T17:19:23.581Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupId: '60f5c7224ad3ae0019a91973'
        },
        {
          id: '6171a095c8a0fb001c4dde56',
          content:
            '{"blocks":[{"key":"34ove","text":"Post 1","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-10-21T17:17:09.386Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupId: '60ca46fc877e063418825131'
        },
        {
          id: '61717f7da2358b001df12d2c',
          content: 'some test2',
          type: 'STANDARD',
          likedBy: [],
          likesCount: 0,
          repliesCount: 0,
          bookmarksCount: 0,
          creatorId: '60ca46ca877e063418825130',
          creatorfirstName: 'Irene',
          creatorLastName: 'Murphy',
          creatorPhoto: 'https://avatar.kwconnect.com/556397.jpeg',
          createdAt: '2021-10-21T14:55:57.033Z',
          deleted: false,
          pinned: false,
          userHasAlreadyLiked: false,
          userHasAlreadyBookmarked: false,
          groupId: '615fdfd0a003080022b59608'
        }
      ]
    }
  }
}

export const createPostResponse = {
  data: {
    createPost: '6172ee6bc8a0fb001c4ddf4e'
  }
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
