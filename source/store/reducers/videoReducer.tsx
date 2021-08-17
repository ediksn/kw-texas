/* eslint-disable no-param-reassign */
import produce from 'immer'
import { VIDEO_TYPES } from '../types'
import { VideoProduceProps, VideoReducerProps } from '../../interfaces/videoInterfaces'

const { GET_VIDEOS_SUCCESS, GET_VIDEOS, GET_VIDEOS_FAILURE } = VIDEO_TYPES

const VIDEO_INITIAL_STATE = {
  searchScriptMeeting: [],
  isLoading: false,
  page: 0
}
const REDUCERS = {
  [GET_VIDEOS]: ({ draftState }: VideoReducerProps) => {
    draftState.isLoading = true
  },
  [GET_VIDEOS_SUCCESS]: ({ draftState, payload }: VideoReducerProps) => {
    draftState.isLoading = false
    if (!!payload && payload.page > 0) {
      draftState.searchScriptMeeting = draftState.searchScriptMeeting.concat(payload.searchScriptMeeting)
      draftState.page = payload?.page + 1
    } else {
      draftState.searchScriptMeeting = payload?.searchScriptMeeting
      draftState.page = 1
    }
  },
  [GET_VIDEOS_FAILURE]: ({ draftState }: VideoReducerProps) => {
    draftState.isLoading = false
  }
}

export default (state = VIDEO_INITIAL_STATE, { type, payload }: VideoProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
