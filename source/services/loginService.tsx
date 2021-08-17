import { LogInProps } from '~/interfaces/loginInterface'
import { axiosInstance } from './config'

export default {
  logIn: async ({ username, password }: LogInProps) =>
    axiosInstance.post('/login', {
      username,
      password
    })
}
