/* eslint-disable no-param-reassign */
import produce from 'immer'
import { UPLOAD_VIDEOS_TYPES } from '../types'
import { UploadVideoProduceProps, UploadVideoReducerProps } from '~/interfaces/uploadVideoInterfase'
import { UPLOAD_INITIAL_STATE } from '../model/uploadVideoModel'

const { POST_VIDEOS, POST_VIDEOS_SUCCESS, POST_VIDEOS_FAILURE } = UPLOAD_VIDEOS_TYPES

const REDUCERS = {
  [POST_VIDEOS]: ({ draftState }: UploadVideoReducerProps) => {
    draftState.isLoading = true
  },
  [POST_VIDEOS_SUCCESS]: ({ draftState }: UploadVideoReducerProps) => {
    draftState.isLoading = false
  },
  [POST_VIDEOS_FAILURE]: ({ draftState }: UploadVideoReducerProps) => {
    draftState.isLoading = false
  }
}

export default (state = UPLOAD_INITIAL_STATE, { type }: UploadVideoProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState }) : state))
