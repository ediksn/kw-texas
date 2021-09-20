import { axiosInstanceTokens } from './config'

export default {
  uploadFile: async (formData: any) => {
    const axiosInstance = await axiosInstanceTokens()
    return axiosInstance.post('https://qa-kong.command-api.kw.com/kw-attachment-svc/api/v2/attachment', formData)
  }
}
