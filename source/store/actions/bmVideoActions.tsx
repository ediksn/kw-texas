import { bmService } from '~/services'
import { VIDEO_BM_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getVideosBm: (page: number) => async (dispatch: AppDispatch) => {
    const { GET_VIDEOS_BM, GET_VIDEOS_BM_SUCCESS, GET_VIDEOS_BM_FAILURE } = VIDEO_BM_TYPES
    dispatch({ type: GET_VIDEOS_BM })
    try {
      const response = await bmService.getVideosBm(page)
      dispatch({
        type: GET_VIDEOS_BM_SUCCESS,
        payload: {
          searchScriptMeetingBm: response?.data.data.searchScriptMeeting
        }
      })
    } catch (error) {
      dispatch({ type: GET_VIDEOS_BM_FAILURE, payload: error })
    }
  },
  refreshVideosBm: () => async (dispatch: AppDispatch) => {
    const { REFRESH_BM_VIDEOS, REFRESH_VIDEOS_BM_SUCCESS, REFRESH_VIDEOS_BM_FAILURE } = VIDEO_BM_TYPES
    dispatch({ type: REFRESH_BM_VIDEOS })
    try {
      const response = await bmService.getVideosBm(0)
      dispatch({
        type: REFRESH_VIDEOS_BM_SUCCESS,
        payload: {
          searchScriptMeetingBm: response?.data.data.searchScriptMeeting
        }
      })
    } catch (error) {
      dispatch({ type: REFRESH_VIDEOS_BM_FAILURE, payload: error })
    }
  }
}

export default actionCreators
