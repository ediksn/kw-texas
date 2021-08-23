import { promptVideoService } from '~/services'
import { PROMT_VIDEO_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getVideos: (page: number) => async (dispatch: AppDispatch) => {
    const { GET_PROMPT_VIDEOS, GET_PROMPT_VIDEOS_SUCCESS, GET_PROMPT_VIDEOS_FAILURE } = PROMT_VIDEO_TYPES
    dispatch({ type: GET_PROMPT_VIDEOS })
    try {
      const response = await promptVideoService.getPromptVideos(page)
      dispatch({
        type: GET_PROMPT_VIDEOS_SUCCESS,
        payload: {
          searchScriptMeeting: response?.data.data.searchScriptMeeting
        }
      })
    } catch (error) {
      dispatch({ type: GET_PROMPT_VIDEOS_FAILURE, payload: error })
    }
  }
}

export default actionCreators
