/* eslint-disable no-param-reassign */
import produce from 'immer'
import { VIDEO_BM_TYPES } from '../types'
import { VideoProduceBmProps, VideoReducerBmProps } from '../../interfaces/videoInterfaces'
import { VIDEO_INITIAL_STATE } from '../model/bmModel'

const {
  GET_BOOKMARKED_VIDEOS_SUCCESS,
  GET_BOOKMARKED_VIDEOS,
  GET_BOOKMARKED_VIDEOS_FAILURE,
  REFRESH_BOOKMARKED_VIDEOS,
  REFRESH_BOOKMARKED_VIDEOS_SUCCESS,
  REFRESH_BOOKMARKED_VIDEOS_FAILURE
} = VIDEO_BM_TYPES

const REDUCERS = {
  [GET_BOOKMARKED_VIDEOS]: ({ draftState }: VideoReducerBmProps) => {
    draftState.isLoading = true
  },
  [GET_BOOKMARKED_VIDEOS_SUCCESS]: ({ draftState, payload }: VideoReducerBmProps) => {
    draftState.isLoading = false
    draftState.searchScriptMeeting = draftState.searchScriptMeeting.concat(payload?.searchScriptMeetingBm)
    draftState.page += 1
  },
  [GET_BOOKMARKED_VIDEOS_FAILURE]: ({ draftState }: VideoReducerBmProps) => {
    draftState.isLoading = false
  },
  [REFRESH_BOOKMARKED_VIDEOS]: ({ draftState }: VideoReducerBmProps) => {
    draftState.isLoading = true
  },
  [REFRESH_BOOKMARKED_VIDEOS_SUCCESS]: ({ draftState, payload }: VideoReducerBmProps) => {
    draftState.isLoading = false
    draftState.searchScriptMeeting = payload?.searchScriptMeetingBm
    draftState.page = 1
  },
  [REFRESH_BOOKMARKED_VIDEOS_FAILURE]: ({ draftState }: VideoReducerBmProps) => {
    draftState.isLoading = false
  }
}

export default (state = VIDEO_INITIAL_STATE, { type, payload }: VideoProduceBmProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
