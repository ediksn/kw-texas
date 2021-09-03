import produce from 'immer'
import { UPLOAD_VIDEOS_TYPES } from '../types'
import { UploadVideoProduceProps, UploadVideoReducerProps } from '~/interfaces/uploadVideoInterfase'
import { UPLOAD_INITIAL_STATE } from '../model/uploadVideoModel'

const { POST_VIDEOS, POST_VIDEOS_SUCCESS, POST_VIDEOS_FAILURE } = UPLOAD_VIDEOS_TYPES

const REDUCERS = {
  [POST_VIDEOS]: ({ draftState }: UploadVideoReducerProps) => {
    draftState.isPosting = true
  },
  [POST_VIDEOS_SUCCESS]: ({ draftState, payload }: UploadVideoReducerProps) => {
    draftState.isPosting = false
    draftState.uploadedVideo = draftState.uploadedVideo.concat(payload?.uploadedVideo)
  },
  [POST_VIDEOS_FAILURE]: ({ draftState }: UploadVideoReducerProps) => {
    draftState.isPosting = false
  }
}

export default (state = UPLOAD_INITIAL_STATE, { type, payload }: UploadVideoProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
