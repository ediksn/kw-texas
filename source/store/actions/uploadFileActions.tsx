import uploadFileService from '~/services/uploadFileService'
import { UPLOADFILE_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  uploadFile: (videoUrl: string, title: string, extension: string) => async (dispatch: AppDispatch) => {
    const { FILE_UPLOAD, FILE_UPLOAD_SUCCESS, FILE_UPLOAD_FAILURE } = UPLOADFILE_TYPES
    dispatch({ type: FILE_UPLOAD })

    try {
      const response = await uploadFileService.uploadFile(videoUrl, title, extension)
      console.log(response)
      dispatch({
        type: FILE_UPLOAD_SUCCESS,
        payload: {
          uploadedFileUrl: response?.data.data.attributes.public_url
        }
      })
    } catch (error) {
      console.log('error: ', error)
      dispatch({ type: FILE_UPLOAD_FAILURE, payload: error })
    }
  }
}

export default actionCreators
