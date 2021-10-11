import { useSelector } from 'react-redux'
import { act } from '@testing-library/react-native'
import { postsResponse } from '../../../__mocks__/mockResponses'
import store from '../../../__mocks__/mockStore'
import { homeActions } from '~/store/actions'
import { RootState } from '~/store'
import { HOME_TYPES } from '~/store/types'
import { homeReducer } from '~/store/reducers'
import { ProduceProps } from '~/interfaces/reducerInterface'

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

const LIMIT = 10
const { GET_POSTS, GET_POSTS_SUCCESS } = HOME_TYPES
const expectedActions: ProduceProps[] = [
  {
    type: GET_POSTS
  },
  {
    type: GET_POSTS_SUCCESS,
    payload: {
      data: postsResponse,
      limitDefault: LIMIT,
      limit: LIMIT
    }
  }
]

it('should create an action GET_POSTS_SUCCESS when user go to Home', async () => {
  // const promise = Promise.resolve(homeActions.getPosts(LIMIT))
  // await act(() => promise)
  store.dispatch(homeActions.getPosts(LIMIT))
  expect(store.getActions()).toEqual(expectedActions)
})

// it('should return array of posts in state', () => {
//   const oldStore: any = store.getState()
//   const expectedStore = { ...oldStore }
//   const mockAction: any = expectedActions.find(action => action.type === GET_POSTS_SUCCESS)
//   expectedStore.home.posts = { ...oldStore.home.posts, ...mockAction?.payload }
//   expectedStore.home.posts.isLoading = false

//   expect(homeReducer(oldStore, mockAction)).toEqual(expectedStore)
// })
