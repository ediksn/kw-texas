/* eslint-disable no-param-reassign */
import produce from 'immer'
import { VIDEO_TYPES } from '../types'
import { VideoProduceProps, VideoReducerProps } from '../../interfaces/videoInterfaces'
import { VIDEO_INITIAL_STATE } from '../model/videoModel'

const { GET_VIDEOS_SUCCESS, GET_VIDEOS, GET_VIDEOS_FAILURE, REFRESH_VIDEOS_SUCCESS } = VIDEO_TYPES

const REDUCERS = {
  [GET_VIDEOS]: ({ draftState }: VideoReducerProps) => {
    draftState.isLoading = true
  },
  [GET_VIDEOS_SUCCESS]: ({ draftState, payload }: VideoReducerProps) => {
    draftState.isLoading = false
    draftState.searchScriptMeeting = draftState.searchScriptMeeting.concat(payload?.searchScriptMeeting)
    draftState.page += 1
  },
  [REFRESH_VIDEOS_SUCCESS]: ({ draftState, payload }: VideoReducerProps) => {
    draftState.isLoading = false
    draftState.searchScriptMeeting = payload?.searchScriptMeeting
    draftState.page = 1
  },
  [GET_VIDEOS_FAILURE]: ({ draftState }: VideoReducerProps) => {
    draftState.isLoading = false
  }
}

export default (state = VIDEO_INITIAL_STATE, { type, payload }: VideoProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
