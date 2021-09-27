import RNFetchBlob from 'rn-fetch-blob'
import { StorageLogInResponse } from '~/interfaces/loginInterface'
import { Storage, STORAGE_CONSTANTS } from '~/utils/storage'

export default {
  uploadFile: async (videoUrl: string, title: string, extension: string) => {
    const getToken = async () => {
      const { LOGIN } = STORAGE_CONSTANTS
      const session: StorageLogInResponse = await Storage.get({ key: LOGIN.SESSION })
      return `${session.token_type} ${session.access_token}`
    }
    const token = await getToken()

    const response = await RNFetchBlob.fetch(
      'POST',
      'https://qa-kong.command-api.kw.com/kw-attachment-svc/api/v2/attachment',
      {
        'Authorization': token,
        'Content-Type': 'multipart/form-data'
      },
      [
        { name: 'file', filename: `${title}.${extension}`, data: RNFetchBlob.wrap(videoUrl) },
        {
          name: 'data',
          data: JSON.stringify({ data: { attributes: { type_id: 1, origin_id: 1, attachment_name: 'vid.mp4' } } })
        }
      ]
    )
    const parsedResponse = JSON.parse(response.data)
    return parsedResponse.data.attributes.public_url
  }
}
