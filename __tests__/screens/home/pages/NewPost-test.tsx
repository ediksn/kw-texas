import React from 'react'
import axios from 'axios'
import { render, cleanup, RenderAPI } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import { createPostResponse } from '~/../__mocks__/mockResponses'
import storeModels from '~/../__mocks__/mockStore'
import createTestStore from '~/../__mocks__/store'
import { homeActions } from '~/store/actions'
import { HOME_TYPES } from '~/store/types'
import { homeReducer } from '~/store/reducers'
import { ProduceProps } from '~/interfaces/reducerInterface'
import NewPost from '~/screens/pages/Home/pages/NewPost'
import { FormPostInterface } from '../../../../source/interfaces/postInterface'

afterEach(cleanup)

jest.mock('@react-navigation/native', () => ({
  createNavigatorFactory: jest.fn(),
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
    goBack: jest.fn(),
    setOptions: jest.fn()
  }),
  useRoute: () => ({
    params: {
      editMode: false,
      idPost: '1',
      groupId: '1'
    }
  }),
  useFocusEffect: jest.fn()
}))

jest.mock('@react-navigation/material-top-tabs', () => ({
  createMaterialTopTabNavigator: () => ({
    Navigator: jest.mock,
    Screen: jest.mock
  })
}))

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => ({
    Navigator: jest.mock,
    Screen: jest.mock
  })
}))

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: () => ({
    Navigator: jest.mock,
    Screen: jest.mock
  })
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key })
}))

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
        data: undefined,
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
})

describe('Render New Post Test', () => {
  let component: RenderAPI
  let storeReducers

  beforeEach(() => {
    storeReducers = createTestStore()
    component = render(
      <Provider store={storeReducers}>
        <NewPost />
      </Provider>
    )
  })

  it('Renders correctly', () => {
    expect(component).toBeDefined()
  })
})
