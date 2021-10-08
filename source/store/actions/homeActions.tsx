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
        payload: response
      })
    } catch (error) {
      dispatch({ type: GET_PICK_PROMPTS_FAILURE, payload: error })
    }
  },
  getPosts: (limit: number) => async (dispatch: AppDispatch) => {
    const { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } = HOME_TYPES
    dispatch({ type: GET_POSTS })
    try {
      const response = await homeService.getPosts(limit)
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: {
          data: response?.data.results,
          limit
        }
      })
    } catch (error) {
      dispatch({ type: GET_POSTS_FAILURE, payload: error })
    }
  }
}

export default actionCreators
