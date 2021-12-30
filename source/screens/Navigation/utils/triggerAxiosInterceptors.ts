/** @format */

import axios from 'axios'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
import { axiosInstance } from '~/services/config'

interface TokenDataInterface {
  refreshToken: any
  token: any
  expiresIn: any
}

export const triggerAxiosInterceptors = (
  saveRefreshToken: (tokenRefreshed: TokenDataInterface) => void,
  logout: () => void
) => {
  axios.interceptors.response.use(
    response => {
      return response
    },
    // eslint-disable-next-line consistent-return
    async error => {
      if (error.response?.status !== 401) {
        return Promise.reject(error)
      }

      try {
        const { LOGIN } = STORAGE_CONSTANTS
        const storedLogin = await Storage.get({ key: LOGIN.SESSION })

        const response = await axiosInstance.post(
          '/refresh-token',
          {},
          {
            params: { refresh_token: storedLogin?.refresh_token }
          }
        )

        const refreshedTokenData: TokenDataInterface = {
          refreshToken: response.data.refresh_token,
          token: response.data.access_token,
          expiresIn: response.data.expires_in
        }

        saveRefreshToken(refreshedTokenData)

        const originalRequest = error.config
        if (axios.defaults?.headers?.common?.Authorization) {
          axios.defaults.headers.common.Authorization = `Bearer ${refreshedTokenData.token}`
        }
        originalRequest.headers.Authorization = `Bearer ${refreshedTokenData.token}`

        return await Promise.resolve(axios(originalRequest))
      } catch (err) {
        logout()
      }
    }
  )
}
