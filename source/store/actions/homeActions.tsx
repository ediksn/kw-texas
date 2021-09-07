import { homeService } from '~/services'
import { HOME_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getPickPrompts: (page: number) => async (dispatch: AppDispatch) => {
    const { GET_PICK_PROMPTS, GET_PICK_PROMPTS_SUCCESS, GET_PICK_PROMPTS_FAILURE } = HOME_TYPES
    dispatch({ type: GET_PICK_PROMPTS })
    try {
      const response = await homeService.getPickPrompts(page)
      dispatch({
        type: GET_PICK_PROMPTS_SUCCESS,
        payload: {
          getSoloScripts: response?.data
        }
      })
    } catch (error) {
      dispatch({ type: GET_PICK_PROMPTS_FAILURE, payload: error })
    }
  }
}

export default actionCreators
