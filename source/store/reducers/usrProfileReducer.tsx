/* eslint-disable no-param-reassign */
import produce from 'immer'
import { USR_TYPES } from '../types'
import { UsrProfileProduceProps, UsrProfileReducerProps } from '~/interfaces/usrInterface'
import { USRPROFILE_INITIAL_STATE } from '../model/usrProfileModel'

const {
  GET_USRPROFILE,
  GET_USRPROFILE_SUCCESS,
  GET_USRPROFILE_FAILURE,
  GET_ACCOUNTS,
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_FAILURE,
  CHANGE_ACTIVE_ACCOUNT_SUCCESS,
  UPDATE_USERPROFILE
} = USR_TYPES

const REDUCERS = {
  [GET_USRPROFILE]: ({ draftState }: UsrProfileReducerProps) => {
    draftState.isLoading = true
  },
  [GET_USRPROFILE_SUCCESS]: ({ draftState, payload }: UsrProfileReducerProps) => {
    draftState.isLoading = false
    draftState.profiles = payload
  },
  [GET_USRPROFILE_FAILURE]: ({ draftState }: UsrProfileReducerProps) => {
    draftState.isLoading = false
  },
  [GET_ACCOUNTS]: ({ draftState }: UsrProfileReducerProps) => {
    draftState.isLoading = true
  },
  [GET_ACCOUNTS_SUCCESS]: ({ draftState, payload }: UsrProfileReducerProps) => {
    draftState.isLoading = false
    draftState.accounts = payload
  },
  [GET_ACCOUNTS_FAILURE]: ({ draftState }: UsrProfileReducerProps) => {
    draftState.isLoading = false
  },
  [CHANGE_ACTIVE_ACCOUNT_SUCCESS]: ({ draftState, payload }: UsrProfileReducerProps) => {
    draftState.activeAccount = payload
  },
  [UPDATE_USERPROFILE]: ({ draftState, payload }: UsrProfileReducerProps) => {
    draftState.profileDetail = payload.profileDetail
    draftState.profiles[payload.index] = {
      ...draftState.profiles[payload.index],
      profileDetail: payload.profileDetail
    }
  }
}

export default (state = USRPROFILE_INITIAL_STATE, { type, payload }: UsrProfileProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
