import axios from 'axios'
import Config from 'react-native-config'
import { StorageLogInResponse } from '~/interfaces/loginInterface'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'

export const getToken = async () => {
  const { LOGIN } = STORAGE_CONSTANTS
  const session: StorageLogInResponse = await Storage.get({ key: LOGIN.SESSION })
  return `${session.token_type} ${session.access_token}`
}

export const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

export const axiosInstanceTokens = async () =>
  axios.create({
    baseURL: Config.BASE_URL,
    headers: { 'Content-Type': 'application/json', 'Authorization': await getToken() }
  })
