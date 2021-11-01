import axios from 'axios'
import { postsResponse } from '../../../__mocks__/mockResponses'
import storeModels from '../../../__mocks__/mockStore'
import { HOME_TYPES } from '~/store/types'
import { homeReducer } from '~/store/reducers'
import { ProduceProps } from '~/interfaces/reducerInterface'
import { homeActions } from '~/store/actions'

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

describe('Home', () => {
  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
  }))

  const mockedAxios = axios as jest.Mocked<typeof axios>
  const LIMIT = 10
  const { GET_POSTS, GET_POSTS_SUCCESS } = HOME_TYPES
  const expectedActions: ProduceProps[] = [
    {
      type: GET_POSTS
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

  it('should create an action GET_POSTS_SUCCESS when user go to Home', async () => {
    mockedAxios.post.mockResolvedValue(postsResponse)
    await storeModels.dispatch(homeActions.getPosts(LIMIT))
    expect(storeModels.getActions()).toEqual(expectedActions)
    expect(mockedAxios.post).toHaveBeenCalledTimes(1)
  })

  it('should return array of posts in state', () => {
    const mockAction: any = expectedActions.find(action => action.type === GET_POSTS_SUCCESS)
    const oldStore: any = storeModels.getState()
    const expectedStore = { ...oldStore }
    expectedStore.home.posts = { ...oldStore.home.posts, ...mockAction?.payload }
    expectedStore.home.posts.isLoading = false

    expect(homeReducer(oldStore.home, mockAction)).toEqual(expectedStore.home)
  })
})
