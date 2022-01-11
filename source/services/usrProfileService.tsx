import { axiosInstanceTokens } from './config'

export default {
  getKwuId: async () => {
    const axiosInstance = await axiosInstanceTokens()
    const response = await axiosInstance.get('/users/me')
    return response.data.data.id
  },
  getAccounts: async (kwuId: number) => {
    const axiosInstance = await axiosInstanceTokens()
    const response = await axiosInstance.get(`/pno/api/v2/people/${kwuId}/orgs?org_type_id=7,9&include_members=true`)
    return response.data.data
  },
  getUser: async (kwuId: number) => {
    const axiosInstance = await axiosInstanceTokens()
    const response = await axiosInstance.get(`/pno/api/v2/people/${kwuId}`)
    return response.data.data
  },
  getProfile: async () => {
    const axiosInstance = await axiosInstanceTokens()
    const response = await axiosInstance.get('mkt-profile-mgr/api/v1/profile')
    return response.data.marketing_profile
  },
  getProfileDetails: async (kwuId: number) => {
    const axiosInstance = await axiosInstanceTokens()
    const response = await axiosInstance.get(`connect/profile/${kwuId}`)
    return response.data
  }
}
