/* eslint-disable no-param-reassign */
import produce from 'immer'
import { PROMT_VIDEO_TYPES } from '../types'
import { PromptVideoReducerProps, PromptVideoProduceProps } from '~/interfaces/promptVideoInterface'
import PROMPT_VIDEO_INITIAL_STATE from '../model/promptVideoModel'

const { GET_PROMPT_VIDEOS_SUCCESS, GET_PROMPT_VIDEOS, GET_PROMPT_VIDEOS_FAILURE } = PROMT_VIDEO_TYPES

const REDUCERS = {
  [GET_PROMPT_VIDEOS]: ({ draftState }: PromptVideoReducerProps) => {
    draftState.isLoading = true
  },
  [GET_PROMPT_VIDEOS_SUCCESS]: ({ draftState, payload }: PromptVideoReducerProps) => {
    draftState.isLoading = false
    draftState.getSoloScripts = payload?.getSoloScripts
    draftState.page += 1
  },
  [GET_PROMPT_VIDEOS_FAILURE]: ({ draftState }: PromptVideoReducerProps) => {
    draftState.isLoading = false
  }
}

export default (state = PROMPT_VIDEO_INITIAL_STATE, { type, payload }: PromptVideoProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
