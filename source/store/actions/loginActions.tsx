import { loginService } from '~/services'
import { LOGIN_TYPES } from '~/store/types'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
import { LogInProps, LogInResponse } from '~/interfaces/loginInterface'
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
        const storageResponse: LogInResponse = signInResponse

        Storage.save({
          key: LOGIN.SESSION,
          value: storageResponse
        })
        dispatch({ type: LOG_IN_SUCCESS, payload: signInResponse })
      } catch (error) {
        dispatch({ type: LOG_IN_FAILURE, payload: error })
      }
    },
  logOut: () => async (dispatch: AppDispatch) => {
    const { LOG_OUT } = LOGIN_TYPES
    const { LOGIN } = STORAGE_CONSTANTS

    dispatch({ type: LOG_OUT })
    Storage.remove({ key: LOGIN.SESSION })
  }
}

export default actionCreators
