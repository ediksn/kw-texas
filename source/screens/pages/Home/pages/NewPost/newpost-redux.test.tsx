import axios from 'axios'
import { createPostResponse } from '../../../../../../__mocks__/mockResponses'
import { FormPostInterface } from '~/interfaces/postInterface'
import { ProduceProps } from '~/interfaces/reducerInterface'
import { homeActions } from '~/store/actions'
import { homeReducer } from '~/store/reducers'
import { HOME_TYPES } from '~/store/types'
import storeModels from '~/../__mocks__/mockStore'

describe('New Post Action', () => {
  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
  }))

  const mockedAxios = axios as jest.Mocked<typeof axios>
  const form: FormPostInterface = { group: '1', text: 'New test Post' }
  const newPost: any = { groupId: form.group, content: form.text, id: createPostResponse.data.createPost }
  const { CREATE_POST, CREATE_POST_SUCCESS, GET_POSTS, GET_POSTS_SUCCESS } = HOME_TYPES
  const expectedActions: ProduceProps[] = [
    {
      type: CREATE_POST
    },
    {
      type: CREATE_POST_SUCCESS
    },
    {
      type: GET_POSTS,
      payload: false
    },
    {
      type: GET_POSTS_SUCCESS,
      payload: {
        data: [],
        limit: 10,
        limitDefault: 10
      }
    }
  ]

  it('should create an action CREATE_POST_SUCCESS when user create new Post', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: createPostResponse })
    await storeModels.dispatch(homeActions.createPost(form))
    expect(storeModels.getActions()).toEqual(expectedActions)
    expect(mockedAxios.post).toHaveBeenCalledTimes(2)
  })

  it('should return array of posts in state', () => {
    const oldStore: any = storeModels.getState()
    const expectedStore = { ...oldStore }
    expectedStore.home.posts.isLoading = false
    expect(homeReducer(oldStore.home, newPost)).toEqual(expectedStore.home)
  })

  it('should retrieve all groups', async () => {
    storeModels.dispatch(homeActions.getMyGroups()).then(() => {
      const storeState = storeModels.getState()
      const { groups } = storeState.home
      expect(groups.data.length).toBeGreaterThan(10)
    })
  })
})
