import { ACTION } from '~/constants'

interface Action {
  type: string
}

const initialState = {
  isLogged: false
}

export const appReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ACTION.APP.LOGIN:
      return { ...state, isLogged: true }

    case ACTION.APP.LOGOUT:
      return { ...state, isLogged: false }

    default:
      return state
  }
}
