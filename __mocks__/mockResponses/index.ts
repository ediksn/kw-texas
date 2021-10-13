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
  kw_uid: 556397,
  name: 'Irene Murphy',
  username: 'kelle2',
  first_name: 'Irene',
  last_name: 'Murphy',
  photo_url: 'https://storage.googleapis.com/kwconnect-core-qa-cd67/uploads/profile/photo_60e2b87c8b895.jpg',
  phone: '5122034500',
  email: 'i_rizky-itaik@kw.com',
  location: { city: 'Austin', state: 'TX' },
  roles: ['MC Manager', 'KWRI Staff', 'Listing Specialist', 'Buyer Specialist'],
  following: false,
  mobile_phone: '51220345900',
  service_area: 'Austin, TX;miami',
  bio: 'Bio',
  banner: '//storage.googleapis.com/kwconnect-core-qa-cd67/uploads/profile/banner_5c534d083fbae.jpg',
  closed_volume: null,
  closed_units: null,
  contracts_written_u: null,
  contracts_written_volume: null,
  listings_taken_u: null,
  listings_taken_dl: null,
  listings_sold_u: null,
  listings_sold_dl: null,
  listings_written_u: null,
  listings_written_volume: null,
  listings_closed_u: null,
  listings_closed_volume: null,
  buy_sales_closed_u: null,
  buy_sales_closed_volume: null,
  lease_written_u: null,
  lease_written_volume: null,
  lease_closed_u: null,
  lease_closed_volume: null,
  refer_u: null,
  refer_volume: null,
  average_sale_price: null,
  kw_start_date: null,
  languages_spoken: null,
  facebook: 'https://pl-pl.facebook.com/',
  twitter: 'https://twitter.com/?lang=en',
  youtube: 'https://www.youtube.com/channel/UCDlujZcssCwV4P9XItrhC0A',
  linkedin: 'https://en.linkedin.com/',
  google_plus: 'https://www.google.com/',
  instagram: null,
  preferred_communication_method: null,
  time_zone: null,
  referral_opt_in: true,
  channels: [],
  profile_display_options: {
    memberships: false,
    languages: false,
    closed_units: true,
    listings_sold_units: true,
    buy_sales_closed_units: true,
    lease_closed_units: true,
    time_with_kw: true
  }
}

export const postResponse = {
  id: '611187e83ff2cf15dd5c7613',
  title: 'Do you like food?',
  type: 'poll',
  url: 'do-you-like-food',
  status: 'closed',
  content: 'Do you like food?',
  image_medium: null,
  image_large: null,
  favorite: true,
  followed: false,
  liked: false,
  pinned: false,
  edited: false,
  follower: false,
  likes_count: 0,
  replies_count: 0,
  created_at: '2021-08-09 19:54:16',
  updated_at: '2021-08-16 21:25:18',
  created_by: {
    user_id: 250291,
    email: 'kelle2@kw.com',
    kw_uid: 556397,
    first_name: 'Irene',
    last_name: 'Murphy',
    photo_url: 'https://storage.googleapis.com/kwconnect-core-qa-cd67/uploads/profile/photo_60e2b87c8b895.jpg',
    avatar: 'https://storage.googleapis.com/kwconnect-core-qa-cd67/uploads/profile/photo_60e2b87c8b895.jpg',
    market_center: 'Demo Market Center',
    location: 'Austin, TX'
  },
  group: {
    id: 1772522,
    name: '01 Onboarding',
    slug: '01-onboarding',
    type: null,
    owner: 250291,
    url: 'https://console-qa.command.kw.com/connect/groups/group?group=01-onboarding'
  },
  channel: {
    id: 41478,
    name: 'main',
    channel_id: null,
    group_id: 1772522,
    creator_id: 250291,
    created_at: '2021-05-03 21:07:55',
    updated_at: '2021-05-03 21:07:55'
  },
  tags: [],
  mentions: [],
  poll_options: [
    {
      id: '611187e83ff2cf15dd5c7614',
      text: 'hamburguer',
      votes_count: 0,
      percent: 0
    },
    {
      id: '611187e83ff2cf15dd5c7615',
      text: 'pizza',
      votes_count: 1,
      percent: 50
    },
    {
      id: '611187e83ff2cf15dd5c7616',
      text: 'hot dog',
      votes_count: 1,
      percent: 50
    }
  ],
  voted_options: ['611187e83ff2cf15dd5c7615', '611187e83ff2cf15dd5c7616'],
  voted: true,
  poll_votes_count: 2,
  multiple: true,
  expired: true,
  duration: 1,
  replies: [],
  permissions: ['CAN_LIKE_POST', 'CAN_FAVORITE_POST', 'CAN_EDIT_POST', 'CAN_DELETE_POST', 'CAN_PIN_POST'],
  topics: []
}

export const postsResponse = [
  {
    id: '615e386e8a1690341f605de9',
    title: 'Does anyone know how to find the list of...',
    type: 'post',
    url: 'does-anyone-know-how-to-find-the-list-of',
    status: 'opened',
    content: "Does anyone know how to find the list of UNSUBSCRIBED within our contacts so we can purge if we'd like?",
    image_medium: null,
    image_large: null,
    favorite: false,
    followed: false,
    liked: false,
    pinned: false,
    edited: false,
    follower: false,
    likes_count: 0,
    replies_count: 0,
    created_at: '2021-10-06 23:59:42',
    updated_at: '2021-10-06 23:59:42',
    created_by: {
      user_id: 98750,
      email: 'michellemenna@gmail.com',
      kw_uid: 222497,
      first_name: 'Michelle',
      last_name: 'Menna',
      photo_url: '//avatar.kwconnect.com/222497.jpeg',
      avatar: '//avatar.kwconnect.com/222497.jpeg',
      market_center: 'JV',
      location: 'Austin, TX'
    },
    group: {
      id: 33204,
      name: 'Command Lab',
      slug: 'command-lab',
      type: null,
      owner: 286762,
      url: 'https://console.command.kw.com/connect/groups/group?group=command-lab'
    },
    channel: {
      id: 33171,
      name: 'main',
      channel_id: null,
      group_id: 33204,
      creator_id: 279663,
      created_at: '2018-12-04 17:19:35',
      updated_at: '2018-12-04 17:19:35'
    },
    tags: [
      {
        id: '5c084d9a9175fb7378315f7a',
        tag: 'placeholder',
        created_at: '2018-12-05 22:13:46'
      }
    ],
    mentions: [],
    poll_options: [],
    voted_options: [],
    voted: false,
    poll_votes_count: 0,
    multiple: false,
    expired: false,
    duration: null,
    replies: [],
    permissions: ['CAN_LIKE_POST', 'CAN_FAVORITE_POST'],
    topics: []
  }
]
