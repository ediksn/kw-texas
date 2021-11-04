import axios from 'axios'
import storeModels from '../../../__mocks__/mockStore'
import { HOME_TYPES } from '~/store/types'
import { homeReducer } from '~/store/reducers'
import { ProduceProps } from '~/interfaces/reducerInterface'
import { homeActions } from '~/store/actions'
import {
  deletePostResponse,
  createPostResponse,
  postsResponse,
  addBookmarkPostResponse
} from '../../../__mocks__/mockResponses/index'
import { PostInterface } from '../../../source/interfaces/postInterface'

jest.mock(
  'rn-fetch-blob',
  () => {
    return {
      DocumentDir: () => {},
      ImageCache: {
        get: {
          clear: () => {}
        }
      },
      fs: {
        exists: jest.fn(),
        dirs: {
          MainBundleDir: () => {},
          CacheDir: () => {},
          DocumentDir: () => {}
        }
      }
    }
  },
  { virtual: true }
)

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn(), goBack: jest.fn() })
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

jest.mock('axios')

jest.mock('@react-native-community/async-storage', () => ({
  AsyncStorage: jest.fn()
}))

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('Home', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  const LIMIT = 10
  const {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    ADD_BOOKMARK_POST,
    ADD_BOOKMARK_POST_SUCCESS
  } = HOME_TYPES

  const expectedGetPostsActions: ProduceProps[] = [
    {
      type: GET_POSTS,
      payload: false
    },
    {
      type: GET_POSTS_SUCCESS,
      payload: {
        data: postsResponse?.data.data.getPosts,
        limitDefault: LIMIT,
        limit: LIMIT
      }
    }
  ]

  it('Action GET_POSTS_SUCCESS', async () => {
    mockedAxios.post.mockResolvedValue(postsResponse)
    await storeModels.dispatch(homeActions.getPosts(LIMIT))
    expect(storeModels.getActions()).toEqual(expectedGetPostsActions)
    expect(mockedAxios.post).toHaveBeenCalledTimes(1)
  })

  it('Store GET_POSTS_SUCCESS', () => {
    const mockAction: any = expectedGetPostsActions.find(action => action.type === GET_POSTS_SUCCESS)
    const oldStore: any = storeModels.getState()
    const expectedStore = { ...oldStore }
    expectedStore.home.posts = { ...oldStore.home.posts, ...mockAction?.payload }
    expectedStore.home.posts.isLoading = false

    expect(homeReducer(oldStore.home, mockAction)).toEqual(expectedStore.home)
  })

  const postId = createPostResponse.data.createPost

  const newPostsAfterAddBookmark: PostInterface[] = postsResponse.data.data.getPosts.map((post: PostInterface) =>
    post.id === postId ? { ...post, userHasAlreadyBookmarked: true } : post
  )
  const expectedAddBookmarkPostActions: ProduceProps[] = [
    {
      type: ADD_BOOKMARK_POST
    },
    {
      type: ADD_BOOKMARK_POST_SUCCESS,
      payload: newPostsAfterAddBookmark
    }
  ]
  it('Action ADD_BOOKMARK_POST_SUCCESS', async () => {
    storeModels.clearActions()
    const currentStore: any = storeModels.getState()
    currentStore.home.posts.data = postsResponse.data.data.getPosts
    mockedAxios.post.mockResolvedValue({ data: addBookmarkPostResponse })
    await storeModels.dispatch(homeActions.addBookmark(postId))
    expect(storeModels.getActions()).toEqual(expectedAddBookmarkPostActions)
    expect(mockedAxios.post).toHaveBeenCalledTimes(2)
  })

  it('Store ADD_BOOKMARK_POST_SUCCESS', () => {
    const mockAction: any = expectedAddBookmarkPostActions.find(action => action.type === ADD_BOOKMARK_POST_SUCCESS)
    const oldStore: any = storeModels.getState()
    const expectedStore = { ...oldStore }
    expectedStore.home.posts.data = mockAction?.payload
    expectedStore.home.posts.isLoading = false
    expect(homeReducer(oldStore.home, mockAction)).toEqual(expectedStore.home)
  })

  const newPostsAfterDeleted: PostInterface[] = postsResponse.data.data.getPosts.filter(
    (post: PostInterface) => post.id !== postId
  )
  const expectedDeletePostActions: ProduceProps[] = [
    {
      type: DELETE_POST
    },
    {
      type: DELETE_POST_SUCCESS,
      payload: newPostsAfterDeleted
    }
  ]
  it('Action DELETE_POST_SUCCESS', async () => {
    storeModels.clearActions()
    const currentStore: any = storeModels.getState()
    currentStore.home.posts.data = postsResponse.data.data.getPosts
    mockedAxios.post.mockResolvedValue({ data: deletePostResponse })
    await storeModels.dispatch(homeActions.deletePost(postId))
    expect(storeModels.getActions()).toEqual(expectedDeletePostActions)
    expect(mockedAxios.post).toHaveBeenCalledTimes(3)
  })

  it('Store DELETE_POST_SUCCESS', () => {
    const mockAction: any = expectedDeletePostActions.find(action => action.type === DELETE_POST_SUCCESS)
    const oldStore: any = storeModels.getState()
    const expectedStore = { ...oldStore }
    expectedStore.home.posts.data = mockAction?.payload
    expectedStore.home.posts.isLoading = false
    // expect(homeReducer(oldStore.home, mockAction)).toEqual(expectedStore.home)
  })
})
