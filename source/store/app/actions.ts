import { ACTION } from '~/constants'

export function login() {
  return { type: ACTION.APP.LOGIN }
}

export function logout() {
  return { type: ACTION.APP.LOGOUT }
}
