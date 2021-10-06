import { axiosInstanceTokens } from './config'

export default {
  getUsrProfile: async (usrId: number) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.get(`/connect/profile/${usrId}`, {})
  }
}
