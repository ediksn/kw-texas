import { videoService } from '~/services'
import { VIDEO_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getVideos: (page: number) => async (dispatch: AppDispatch) => {
    const { GET_VIDEOS, GET_VIDEOS_SUCCESS, GET_VIDEOS_FAILURE } = VIDEO_TYPES
    dispatch({ type: GET_VIDEOS })
    try {
      const signInResponse = await videoService.getVideos(page)
      dispatch({
        type: GET_VIDEOS_SUCCESS,
        payload: {
          searchScriptMeeting: signInResponse?.data.searchScriptMeeting
        }
      })
    } catch (error) {
      dispatch({ type: GET_VIDEOS_FAILURE, payload: error })
    }
  },
  refreshVideos: () => async (dispatch: AppDispatch) => {
    const { GET_VIDEOS, REFRESH_VIDEOS_SUCCESS, GET_VIDEOS_FAILURE } = VIDEO_TYPES
    dispatch({ type: GET_VIDEOS })
    try {
      const signInResponse = await videoService.getVideos(0)
      dispatch({
        type: REFRESH_VIDEOS_SUCCESS,
        payload: {
          searchScriptMeeting: signInResponse?.data.searchScriptMeeting
        }
      })
    } catch (error) {
      dispatch({ type: GET_VIDEOS_FAILURE, payload: error })
    }
  }
}

export default actionCreators
