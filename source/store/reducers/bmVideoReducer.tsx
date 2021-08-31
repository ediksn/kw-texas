/* eslint-disable no-param-reassign */
import produce from 'immer'
import { VIDEO_BM_TYPES } from '../types'
import { VideoProduceBmProps, VideoReducerBmProps } from '../../interfaces/videoInterfaces'
import { VIDEO_INITIAL_STATE } from '../model/bmModel'

const {
  GET_VIDEOS_BM_SUCCESS,
  GET_VIDEOS_BM,
  GET_VIDEOS_BM_FAILURE,
  REFRESH_BM_VIDEOS,
  REFRESH_VIDEOS_BM_SUCCESS,
  REFRESH_VIDEOS_BM_FAILURE
} = VIDEO_BM_TYPES

const REDUCERS = {
  [GET_VIDEOS_BM]: ({ draftState }: VideoReducerBmProps) => {
    draftState.isLoading = true
  },
  [GET_VIDEOS_BM_SUCCESS]: ({ draftState, payload }: VideoReducerBmProps) => {
    draftState.isLoading = false
    draftState.searchScriptMeetingBm = draftState.searchScriptMeetingBm.concat(payload?.searchScriptMeetingBm)
    draftState.page += 1
  },
  [GET_VIDEOS_BM_FAILURE]: ({ draftState }: VideoReducerBmProps) => {
    draftState.isLoading = false
  },
  [REFRESH_BM_VIDEOS]: ({ draftState }: VideoReducerBmProps) => {
    draftState.isLoading = true
  },
  [REFRESH_VIDEOS_BM_SUCCESS]: ({ draftState, payload }: VideoReducerBmProps) => {
    draftState.isLoading = false
    draftState.searchScriptMeetingBm = payload?.searchScriptMeetingBm
    draftState.page = 1
  },
  [REFRESH_VIDEOS_BM_FAILURE]: ({ draftState }: VideoReducerBmProps) => {
    draftState.isLoading = false
  }
}

export default (state = VIDEO_INITIAL_STATE, { type, payload }: VideoProduceBmProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
