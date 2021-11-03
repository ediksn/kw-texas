import axios from 'axios'
import store from '~/../__mocks__/mockStore'
import { loginResponse, idTokenJWT } from '~/../__mocks__/mockResponses'
import { LOGIN_TYPES } from '~/store/types'
import { loginActions } from '~/store/actions'
import { loginReducer } from '~/store/reducers'
import { LogInProduceProps } from '~/interfaces/loginInterface'

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

jest.mock('jwt-decode', () => () => ({
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
}))

describe('Testing redux login', () => {
  const username = 'username'
  const password = 'password'

  const { LOG_IN, LOG_IN_SUCCESS, SET_LOGGED_SUCCESS } = LOGIN_TYPES

  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue({ data: loginResponse })

  const expectedActions: LogInProduceProps[] = [
    {
      type: LOG_IN
    },
    {
      type: LOG_IN_SUCCESS,
      payload: loginResponse
    },
    {
      type: SET_LOGGED_SUCCESS
    }
  ]

  it('testing login actions', async () => {
    await store.dispatch(loginActions.logIn({ username, password }))
    await store.dispatch(loginActions.afterLogin())
    expect(store.getActions()).toEqual(expectedActions)
    expect(mockedAxios.post).toHaveBeenCalledTimes(1)
  })

  it('testing store', () => {
    const oldStore = store.getState()
    const expectedStore = { ...oldStore }
    const mockActionLogIn: LogInProduceProps = expectedActions.find(action => action.type === LOG_IN_SUCCESS) || {
      type: 'error'
    }
    expectedStore.login = { ...oldStore.login, user: idTokenJWT, isLogged: false }
    expect(loginReducer(oldStore.login, mockActionLogIn)).toEqual(expectedStore.login)
    const mockActionLoggedIn: LogInProduceProps = expectedActions.find(
      action => action.type === SET_LOGGED_SUCCESS
    ) || {
      type: 'error'
    }
    expectedStore.login.isLogged = true
    expect(loginReducer(expectedStore.login, mockActionLoggedIn)).toEqual(expectedStore.login)
  })
})
