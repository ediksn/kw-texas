/* eslint-disable no-param-reassign */
import produce from 'immer'
import jwt, { JwtPayload } from 'jwt-decode'
import { LOGIN_TYPES } from '../types'
import LOGIN_INITIAL_STATE from '../model/loginModel'
import { LogInProduceProps, LogInReducerProps } from '../../interfaces/loginInterface'

const { LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_SUCCESS, LOGGED_IN } = LOGIN_TYPES

const REDUCERS = {
  [LOG_IN_SUCCESS]: ({ draftState, payload }: LogInReducerProps) => {
    draftState.user = jwt<JwtPayload>(payload.id_token)
  },
  [LOG_IN_FAILURE]: ({ draftState, payload }: LogInReducerProps) => {
    draftState.error = payload
  },
  [LOG_OUT_SUCCESS]: ({ draftState }: LogInReducerProps) => {
    draftState.user = null
    draftState.isLogged = false
  },
  [LOGGED_IN]: ({ draftState }: LogInReducerProps) => {
    draftState.isLogged = true
  }
}

export default (state = LOGIN_INITIAL_STATE, { type, payload }: LogInProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
