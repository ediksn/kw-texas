import { videoService } from '~/services'
import { VIDEO_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getVideos: (page: number) => async (dispatch: AppDispatch) => {
    const { GET_VIDEOS, GET_VIDEOS_SUCCESS, GET_VIDEOS_FAILURE } = VIDEO_TYPES
    dispatch({ type: GET_VIDEOS })
    try {
      const response = await videoService.getVideos(page)
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
      const response = await videoService.getVideos(0)
      dispatch({
        type: REFRESH_VIDEOS_SUCCESS,
        payload: {
          searchScriptMeeting: response?.data.data.searchScriptMeeting
        }
      })
    } catch (error) {
      dispatch({ type: REFRESH_VIDEOS_FAILURE, payload: error })
    }
  },
  likeVideo: (storedId: number, backendId: number) => async (dispatch: AppDispatch) => {
    const { LIKE_VIDEO, LIKE_VIDEO_FAILURE, LIKE_VIDEO_SUCCESS } = VIDEO_TYPES
    dispatch({ type: LIKE_VIDEO })
    try {
      await videoService.postLike(backendId, true)
      dispatch({
        type: LIKE_VIDEO_SUCCESS,
        payload: {
          storedId
        }
      })
    } catch (error) {
      dispatch({ type: LIKE_VIDEO_FAILURE })
    }
  },
  dislikeVideo: (storedId: number, backendId: number) => async (dispatch: AppDispatch) => {
    const { DISLIKE_VIDEO, DISLIKE_VIDEO_FAILURE, DISLIKE_VIDEO_SUCCESS } = VIDEO_TYPES
    dispatch({ type: DISLIKE_VIDEO })
    try {
      await videoService.postLike(backendId, false)
      dispatch({
        type: DISLIKE_VIDEO_SUCCESS,
        payload: {
          storedId
        }
      })
    } catch (error) {
      dispatch({ type: DISLIKE_VIDEO_FAILURE })
    }
  },
  bookmarkVideo: (storedId: number, backendId: number, bookmark: boolean) => async (dispatch: AppDispatch) => {
    const { BOOKMARK_VIDEO, BOOKMARK_VIDEO_SUCCESS, BOOKMARK_VIDEO_FAILURE } = VIDEO_TYPES
    dispatch({ type: BOOKMARK_VIDEO })
    try {
      await videoService.postBookmark(backendId, bookmark)
      dispatch({
        type: BOOKMARK_VIDEO_SUCCESS,
        payload: {
          storedId,
          bookmark
        }
      })
    } catch (error) {
      dispatch({ type: BOOKMARK_VIDEO_FAILURE })
    }
  }
}

export default actionCreators
