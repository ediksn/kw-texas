import axios from 'axios'
import Config from 'react-native-config'
import { StorageLogInResponse } from '~/interfaces/loginInterface'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'

export const getToken = async () => {
  const { LOGIN } = STORAGE_CONSTANTS
  const session: StorageLogInResponse = await Storage.get({ key: LOGIN.SESSION })
  return `${session?.token_type} ${session?.access_token}`
}

export const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

export const axiosInstanceFormTokens = async () => {
  axios.defaults.baseURL = Config.BASE_URL
  axios.defaults.headers = { 'Content-Type': 'multipart/form-data', 'Authorization': await getToken() }
  axios.defaults.timeout = 10000
  return axios
}

export const axiosInstanceTokens = async () => {
  axios.defaults.baseURL = Config.BASE_URL
  axios.defaults.headers = { 'Content-Type': 'application/json', 'Authorization': await getToken() }
  return axios
}
