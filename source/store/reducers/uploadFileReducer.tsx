import produce from 'immer'
import { UPLOADFILE_TYPES } from '../types'
import { UploadFileProduceProps, UploadFileReducerProps } from '~/interfaces/uploadFileInterface'
import { UPLOADFILE_INITIAL_STATE } from '../model/uploadFileModel'

const { FILE_UPLOAD, FILE_UPLOAD_SUCCESS, FILE_UPLOAD_FAILURE } = UPLOADFILE_TYPES

const REDUCERS = {
  [FILE_UPLOAD]: ({ draftState }: UploadFileReducerProps) => {
    draftState.isLoading = true
  },
  [FILE_UPLOAD_SUCCESS]: ({ draftState, payload }: UploadFileReducerProps) => {
    draftState.isLoading = false
    draftState.url = payload
  },
  [FILE_UPLOAD_FAILURE]: ({ draftState }: UploadFileReducerProps) => {
    draftState.isLoading = false
  }
}

export default (state = UPLOADFILE_INITIAL_STATE, { type, payload }: UploadFileProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
