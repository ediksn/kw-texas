import { loginService } from '~/services'
import { LOGIN_TYPES } from '~/store/types'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
import { LogInProps, StorageLogInResponse } from '~/interfaces/loginInterface'
import { AppDispatch } from '..'

const actionCreators = {
  logIn:
    ({ username, password }: LogInProps) =>
    async (dispatch: AppDispatch) => {
      const { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } = LOGIN_TYPES
      dispatch({ type: LOG_IN })

      try {
        const signInResponse = await loginService.logIn({ username, password })
        const { LOGIN } = STORAGE_CONSTANTS
        const storageResponse: StorageLogInResponse = signInResponse?.data

        await Storage.save({
          key: LOGIN.SESSION,
          value: storageResponse
        })
        dispatch({ type: LOG_IN_SUCCESS, payload: signInResponse?.data })
        return true
      } catch (error) {
        if (error?.response?.data) dispatch({ type: LOG_IN_FAILURE, payload: error.response?.data })
        else
          dispatch({
            type: LOG_IN_FAILURE,
            payload: { error_description: 'Network not available', error: 'network_failed' }
          })
      }
      return false
    },
  logOut: () => async (dispatch: AppDispatch) => {
    const { LOG_OUT, LOG_OUT_SUCCESS } = LOGIN_TYPES
    const { LOGIN } = STORAGE_CONSTANTS

    dispatch({ type: LOG_OUT })
    await Storage.remove({ key: LOGIN.SESSION })
    dispatch({ type: LOG_OUT_SUCCESS })
  },
  afterLogin: () => async (dispatch: AppDispatch) => {
    const { SET_LOGGED_SUCCESS } = LOGIN_TYPES
    dispatch({ type: SET_LOGGED_SUCCESS })
  },
  setUser: (id_token: string) => async (dispatch: AppDispatch) => {
    const { SET_SESSION_USER, SET_SESSION_USER_SUCCESS } = LOGIN_TYPES

    dispatch({ type: SET_SESSION_USER })
    dispatch({ type: SET_SESSION_USER_SUCCESS, payload: { id_token } })
  }
}

export default actionCreators
