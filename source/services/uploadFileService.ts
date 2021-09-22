import RNFetchBlob from 'rn-fetch-blob'
import { StorageLogInResponse } from '~/interfaces/loginInterface'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'
// import { axiosInstanceTokens } from './config'

export default {
  uploadFile: async (videoUrl: string, title: string, extension: string) => {
    const getToken = async () => {
      const { LOGIN } = STORAGE_CONSTANTS
      const session: StorageLogInResponse = await Storage.get({ key: LOGIN.SESSION })
      return `${session.token_type} ${session.access_token}`
    }
    const token = await getToken()
    // const formData = new FormData()
    // formData.append('file', {
    //   uri: videoUrl,
    //   type: 'video/mp4',
    //   name: `${title}-${Date.now()}.${extension}`
    // })
    // formData.append(
    //   'data',
    //   JSON.stringify({
    //     data: {
    //       attributes: {
    //         origin_id: 1,
    //         type_id: 1
    //       }
    //     }
    //   })
    // )
    // const config = {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // }

    const response = await RNFetchBlob.fetch(
      'POST',
      'https://qa-kong.command-api.kw.com/kw-attachment-svc/api/v2/attachment',
      {
        'Authorization': token,
        'Content-Type': 'multipart/form-data'
      },
      [{ name: title, filename: `${title}.${extension}`, type: 'type:video/mp4', data: RNFetchBlob.wrap(videoUrl) }]
    )
    console.log('response: ', response)
    // const axiosInstance = await axiosInstanceTokens()
    // return axiosInstance.post(
    //   'https://qa-kong.command-api.kw.com/kw-attachment-svc/api/v2/attachment',
    //   formData,
    //   config
    // )
  }
}
