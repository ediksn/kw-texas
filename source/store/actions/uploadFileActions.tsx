import uploadFileService from '~/services/uploadFileService'
import { UPLOADFILE_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  uploadFile: (formData: any) => async (dispatch: AppDispatch) => {
    const { FILE_UPLOAD, FILE_UPLOAD_SUCCESS, FILE_UPLOAD_FAILURE } = UPLOADFILE_TYPES
    dispatch({ type: FILE_UPLOAD })

    try {
      const response = await uploadFileService.uploadFile(formData)
      dispatch({
        type: FILE_UPLOAD_SUCCESS,
        payload: {
          uploadedFileUrl: response?.data.data.attributes.public_url
        }
      })
    } catch (error) {
      dispatch({ type: FILE_UPLOAD_FAILURE, payload: error })
    }
  }
}

export default actionCreators
