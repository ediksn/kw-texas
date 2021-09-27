import RNFetchBlob from 'rn-fetch-blob'
import Config from 'react-native-config'
import { Platform } from 'react-native'
import { getToken } from './config'

export default {
  uploadFile: async (videoUrl: string, title: string, extension: string) => {
    const realPath = Platform.OS === 'ios' ? videoUrl.replace('file://', '') : videoUrl
    const token = await getToken()
    const url = `${Config.BASE_URL}/kw-attachment-svc/api/v2/attachment`

    const response = await RNFetchBlob.fetch(
      'POST',
      url,
      {
        'Authorization': token,
        'Content-Type': 'multipart/form-data'
      },
      [
        { name: 'file', filename: `${title}.${extension}`, data: RNFetchBlob.wrap(realPath) },
        {
          name: 'data',
          data: JSON.stringify({
            data: { attributes: { type_id: 1, origin_id: 1, attachment_name: `${title}.${extension}` } }
          })
        }
      ]
    )
    const parsedResponse = JSON.parse(response.data)
    return parsedResponse.data.attributes.public_url
  }
}
