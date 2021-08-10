/* eslint-disable no-param-reassign */
import produce from 'immer'
import { LOGIN_TYPES } from '../types'
import LOGIN_INITIAL_STATE from '../model/loginModel'
import { LogInProduceProps, LogInReducerProps } from '../../interfaces/loginInterface'

const { LOG_IN_SUCCESS, LOG_IN_FAILURE } = LOGIN_TYPES

const REDUCERS = {
  [LOG_IN_SUCCESS]: ({ draftState }: LogInReducerProps) => {
    draftState.isLogged = true
  },
  [LOG_IN_FAILURE]: ({ draftState, payload }: LogInReducerProps) => {
    draftState.error = payload
  }
}

export default (state = LOGIN_INITIAL_STATE, { type, payload }: LogInProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
