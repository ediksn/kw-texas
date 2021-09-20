import { uploadVideoService } from '~/services'
import { UPLOAD_VIDEOS_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  uploadVideo: (videoUrl: any, title: string, description: string) => async (dispatch: AppDispatch) => {
    const { POST_VIDEOS, POST_VIDEOS_SUCCESS, POST_VIDEOS_FAILURE } = UPLOAD_VIDEOS_TYPES
    dispatch({ type: POST_VIDEOS })
    try {
      const response = await uploadVideoService.uploadVideos(videoUrl, title, description)
      dispatch({
        type: POST_VIDEOS_SUCCESS,
        payload: {
          uploadedVideo: response?.data.data.createMeeting
        }
      })
    } catch (error) {
      dispatch({ type: POST_VIDEOS_FAILURE, payload: error })
    }
  }
}

export default actionCreators
