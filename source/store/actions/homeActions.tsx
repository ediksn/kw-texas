import { homeService } from '~/services'
import { HOME_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getPickPrompts: () => async (dispatch: AppDispatch) => {
    const { GET_PICK_PROMPTS, GET_PICK_PROMPTS_SUCCESS, GET_PICK_PROMPTS_FAILURE } = HOME_TYPES
    dispatch({ type: GET_PICK_PROMPTS })
    try {
      const response = homeService.getPickPrompts()
      dispatch({
        type: GET_PICK_PROMPTS_SUCCESS,
        payload: {
          prompts: response,
          page: 0
        }
      })
    } catch (error) {
      dispatch({ type: GET_PICK_PROMPTS_FAILURE, payload: error })
    }
  }
}

export default actionCreators
