import { videoService } from '~/services'
import { VIDEO_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getVideos: () => async (dispatch: AppDispatch) => {
    const { GET_VIDEOS, GET_VIDEOS_SUCCESS, GET_VIDEOS_FAILURE } = VIDEO_TYPES
    dispatch({ type: GET_VIDEOS })
    try {
      const signInResponse = await videoService.getVideos()
      dispatch({ type: GET_VIDEOS_SUCCESS, payload: signInResponse?.data })
    } catch (error) {
      dispatch({ type: GET_VIDEOS_FAILURE, payload: error })
    }
  }
}

export default actionCreators
