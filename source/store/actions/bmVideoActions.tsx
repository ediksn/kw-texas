import { bookmarkedService } from '~/services'
import { VIDEO_BM_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getVideosBm: (page: number) => async (dispatch: AppDispatch) => {
    const { GET_BOOKMARKED_VIDEOS, GET_BOOKMARKED_VIDEOS_SUCCESS, GET_BOOKMARKED_VIDEOS_FAILURE } = VIDEO_BM_TYPES
    dispatch({ type: GET_BOOKMARKED_VIDEOS })
    try {
      const response = await bookmarkedService.getVideosBm(page)
      dispatch({
        type: GET_BOOKMARKED_VIDEOS_SUCCESS,
        payload: {
          searchScriptMeetingBm: response?.data.data.searchScriptMeeting
        }
      })
    } catch (error) {
      dispatch({ type: GET_BOOKMARKED_VIDEOS_FAILURE, payload: error })
    }
  },
  refreshVideosBm: () => async (dispatch: AppDispatch) => {
    const { REFRESH_BOOKMARKED_VIDEOS, REFRESH_BOOKMARKED_VIDEOS_SUCCESS, REFRESH_BOOKMARKED_VIDEOS_FAILURE } =
      VIDEO_BM_TYPES
    dispatch({ type: REFRESH_BOOKMARKED_VIDEOS })
    try {
      const response = await bookmarkedService.getVideosBm(0)
      dispatch({
        type: REFRESH_BOOKMARKED_VIDEOS_SUCCESS,
        payload: {
          searchScriptMeetingBm: response?.data.data.searchScriptMeeting
        }
      })
    } catch (error) {
      dispatch({ type: REFRESH_BOOKMARKED_VIDEOS_FAILURE, payload: error })
    }
  }
}

export default actionCreators
