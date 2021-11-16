/* eslint-disable no-param-reassign */
import produce from 'immer'
import { toastTypes as TOAST_TYPES } from '../types'
import TOAST_INITIAL_STATE from '../model/toastModel'
import { ToastReducerProps, ToastProduceProps } from '~/interfaces/toastInterface'

const { SHOW_TOAST, HIDE_TOAST, STORE_MENU_HEIGHT } = TOAST_TYPES

const REDUCERS = {
  [SHOW_TOAST]: ({ draftState, payload }: ToastReducerProps) => {
    draftState.open = true
    draftState.title = payload.title
    draftState.type = payload.type
  },
  [HIDE_TOAST]: ({ draftState }: ToastReducerProps) => {
    const { menuHeight } = draftState
    return { ...TOAST_INITIAL_STATE, menuHeight }
  },
  [STORE_MENU_HEIGHT]: ({ draftState, payload }: ToastReducerProps) => {
    draftState.menuHeight = payload
  }
}

export default (state = TOAST_INITIAL_STATE, { type, payload }: ToastProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
