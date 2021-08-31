import { videoService } from '~/services'
import { VIDEO_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getVideos: (page: number) => async (dispatch: AppDispatch) => {
    const { GET_VIDEOS, GET_VIDEOS_SUCCESS, GET_VIDEOS_FAILURE } = VIDEO_TYPES
    dispatch({ type: GET_VIDEOS })
    try {
      const response = await videoService.getVideos(page, true)
      dispatch({
        type: GET_VIDEOS_SUCCESS,
        payload: {
          searchScriptMeeting: response?.data.data.searchScriptMeeting
        }
      })
    } catch (error) {
      dispatch({ type: GET_VIDEOS_FAILURE, payload: error })
    }
  },
  refreshVideos: () => async (dispatch: AppDispatch) => {
    const { REFRESH_VIDEOS, REFRESH_VIDEOS_SUCCESS, REFRESH_VIDEOS_FAILURE } = VIDEO_TYPES
    dispatch({ type: REFRESH_VIDEOS })
    try {
      const response = await videoService.getVideos(0, true)
      dispatch({
        type: REFRESH_VIDEOS_SUCCESS,
        payload: {
          searchScriptMeeting: response?.data.data.searchScriptMeeting
        }
      })
    } catch (error) {
      dispatch({ type: REFRESH_VIDEOS_FAILURE, payload: error })
    }
  }
}

export default actionCreators
