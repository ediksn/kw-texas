import axios from 'axios'
// import Config from 'react-native-config'

export const axiosInstance = axios.create({
  baseURL: 'https://qa-kong.command-api.kw.com/', // Config.baseURL,
  headers: { 'Content-Type': 'application/json' }
})
