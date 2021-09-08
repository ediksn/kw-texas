import { axiosInstanceTokens } from './config'

export default {
  getUsrProfile: async (usrId: number) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.get(`https://qa-kong.command-api.kw.com/connect/profile/${usrId}`, {})
  }
}
