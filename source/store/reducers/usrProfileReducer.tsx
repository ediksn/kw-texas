/* eslint-disable no-param-reassign */
import produce from 'immer'
import { USR_TYPES } from '../types'
import { UsrProfileProduceProps, UsrProfileReducerProps } from '~/interfaces/usrInterface'
import { USRPROFILE_INITIAL_STATE } from '../model/usrProfileModel'

const { GET_USRPROFILE, GET_USRPROFILE_SUCCESS, GET_USRPROFILE_FAILURE } = USR_TYPES

const REDUCERS = {
  [GET_USRPROFILE]: ({ draftState }: UsrProfileReducerProps) => {
    draftState.isLoading = true
  },
  [GET_USRPROFILE_SUCCESS]: ({ draftState, payload }: UsrProfileReducerProps) => {
    draftState.isLoading = false
    draftState.profiles = [payload]
  },
  [GET_USRPROFILE_FAILURE]: ({ draftState }: UsrProfileReducerProps) => {
    draftState.isLoading = false
  }
}

export default (state = USRPROFILE_INITIAL_STATE, { type, payload }: UsrProfileProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
