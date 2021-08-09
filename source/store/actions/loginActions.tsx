import { loginService } from '~/services'
import { LOGIN_TYPES } from '~/store/types'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
import { NAVIGATION } from '../../constants'

const actionCreators = {
  logIn: (data, navigation) => async dispatch => {
    const { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } = LOGIN_TYPES
    dispatch({ type: LOG_IN })
    const { username, password } = data

    try {
      const signInResponse = await loginService.logIn(username, password)

      if (signInResponse.status === 200) {
        const { LOGIN } = STORAGE_CONSTANTS
        Storage.save({
          key: LOGIN.SESSION,
          value: ({ access_token, refresh_token, id_token, expires_in, session_token } = signInResponse)
        })
        dispatch({ type: LOG_IN_SUCCESS, payload: signInResponse.data })
        navigation.navigate(NAVIGATION.SCREEN.HOME)
      }
    } catch (error) {
      dispatch({ type: LOG_IN_FAILURE, payload: error })
    }
  },
  logOut: () => async dispatch => {
    const { LOG_OUT } = LOGIN_TYPES
    dispatch({ type: LOG_OUT })
    Storage.remove({ key: LOGIN.SESSION })
    navigation.navigate(NAVIGATION.SCREEN.LOGIN)
  }
}

export default actionCreators
