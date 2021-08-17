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
        const storageResponse: StorageLogInResponse = signInResponse

        if (signInResponse.error) {
          dispatch({ type: LOG_IN_FAILURE, payload: signInResponse.error })
        } else {
          await Storage.save({
            key: LOGIN.SESSION,
            value: storageResponse
          })
          dispatch({ type: LOG_IN_SUCCESS, payload: signInResponse })
          return true
        }
      } catch (error) {
        dispatch({ type: LOG_IN_FAILURE, payload: error })
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
  setUser: (id_token: string) => async (dispatch: AppDispatch) => {
    const { LOG_IN, LOG_IN_SUCCESS } = LOGIN_TYPES

    dispatch({ type: LOG_IN })
    dispatch({ type: LOG_IN_SUCCESS, payload: { id_token } })
  }
}

export default actionCreators
