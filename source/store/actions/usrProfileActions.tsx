import { usrProfileService } from '~/services'
import { USR_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getUsrProfile: (usrId: number) => async (dispatch: AppDispatch) => {
    const { GET_USRPROFILE, GET_USRPROFILE_SUCCESS, GET_USRPROFILE_FAILURE } = USR_TYPES
    dispatch({ type: GET_USRPROFILE })
    try {
      const response = await usrProfileService.getUsrProfile(usrId)
      dispatch({
        type: GET_USRPROFILE_SUCCESS,
        payload: {
          usrProfile: response?.data
        }
      })
    } catch (error) {
      dispatch({ type: GET_USRPROFILE_FAILURE, payload: error })
    }
  }
}

export default actionCreators
