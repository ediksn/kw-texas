import Config from 'react-native-config'
import { axiosInstanceTokens } from './config'

export default {
  getUsrProfile: async (usrId: number) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.get(`${Config.BASE_URL}/connect/profile/${usrId}`, {})
  }
}
