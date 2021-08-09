import produce from 'immer'
import { LOGIN_TYPES } from '../types'
import LOGIN_INITIAL_STATE from '../model/loginModel'

interface Props {
  type: any
  draftState: any
  payload: any
}

const { LOG_IN_SUCCESS, LOG_IN_FAILURE } = LOGIN_TYPES

const REDUCERS = {
  [LOG_IN_SUCCESS]: ({ draftState, payload }: Props) => {
    draftState.isLogged = true
    draftState.user = payload
  },
  [LOG_IN_FAILURE]: ({ draftState, payload }: Props) => {
    draftState.error = payload
  }
}

export default (state = LOGIN_INITIAL_STATE, { type, payload }: Props) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type](draftState, payload) : state))
