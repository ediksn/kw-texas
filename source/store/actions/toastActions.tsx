import TOAST_TYPES from '../types/toastTypes'
import { AppDispatch } from '../index'
import { TOAST_TYPE } from '~/components/Toast/constants'

const { SHOW_TOAST, HIDE_TOAST, STORE_MENU_HEIGHT } = TOAST_TYPES

const actionCreators = {
  showErrorToast: (title: string) => (dispatch: AppDispatch) => {
    dispatch({ type: SHOW_TOAST, payload: { title, type: TOAST_TYPE.ERROR } })
  },
  showSuccessToast: (title: string) => (dispatch: AppDispatch) => {
    dispatch({ type: SHOW_TOAST, payload: { title, type: TOAST_TYPE.SUCCESS } })
  },
  hideToast: () => (dispatch: AppDispatch) => {
    dispatch({ type: HIDE_TOAST })
  },
  storeMenuHeight: (menuHeight: number) => (dispatch: AppDispatch) =>
    dispatch({ type: STORE_MENU_HEIGHT, payload: menuHeight })
}

export default actionCreators
