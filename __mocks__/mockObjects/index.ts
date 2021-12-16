import { PostInterface } from '~/interfaces/postInterface'
import { CommentInterface } from '~/interfaces/commentInterface'

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
