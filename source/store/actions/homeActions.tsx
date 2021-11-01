import { FormPostInterface } from '~/interfaces/postInterface'
import { homeService } from '~/services'
import { HOME_TYPES } from '~/store/types'
import { AppDispatch } from '..'

const actionCreators = {
  getPickPrompts: () => async (dispatch: AppDispatch) => {
    const { GET_PICK_PROMPTS, GET_PICK_PROMPTS_SUCCESS, GET_PICK_PROMPTS_FAILURE } = HOME_TYPES
    dispatch({ type: GET_PICK_PROMPTS })
    try {
      const response = homeService.getPickPrompts()
      dispatch({
        type: GET_PICK_PROMPTS_SUCCESS,
        payload: response
      })
    } catch (error) {
      dispatch({ type: GET_PICK_PROMPTS_FAILURE, payload: error })
    }
  },
  getPosts: (limit: number) => async (dispatch: AppDispatch) => {
    const { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } = HOME_TYPES
    dispatch({ type: GET_POSTS })
    try {
      const response = await homeService.getPosts(limit)
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: {
          data: response?.data.data.getPosts,
          limitDefault: 10,
          limit
        }
      })
    } catch (error) {
      dispatch({ type: GET_POSTS_FAILURE, payload: error })
    }
  },
  getGroups: (limit: number) => async (dispatch: AppDispatch) => {
    const { GET_GROUPS, GET_GROUPS_SUCCESS, GET_GROUPS_FAILURE } = HOME_TYPES
    dispatch({ type: GET_GROUPS })
    try {
      const response = await homeService.getGroups(limit)
      dispatch({
        type: GET_GROUPS_SUCCESS,
        payload: {
          data: response?.data.data.getListOfJoinedGroups,
          limitDefault: 10,
          limit
        }
      })
    } catch (error) {
      dispatch({ type: GET_GROUPS_FAILURE, payload: error })
    }
  },
  getGroupInfo: (id: string) => async (dispatch: AppDispatch) => {
    const { GET_GROUP_INFO, GET_GROUP_INFO_SUCCESS, GET_GROUP_INFO_FAILURE } = HOME_TYPES
    dispatch({ type: GET_GROUP_INFO })
    try {
      const response = await homeService.getGroupInfo(id)
      dispatch({
        type: GET_GROUP_INFO_SUCCESS,
        payload: response.data?.data.getGroupInfo
      })
      return response.data?.data.getGroupInfo
    } catch (error) {
      dispatch({ type: GET_GROUP_INFO_FAILURE, payload: error })
    }
    return null
  },
  createPost: (form: FormPostInterface) => async (dispatch: AppDispatch) => {
    const { CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE } = HOME_TYPES
    dispatch({ type: CREATE_POST })

    try {
      const {
        data: {
          data: { createPost }
        }
      } = await homeService.createPost(form)

      if (createPost) {
        dispatch({
          type: CREATE_POST_SUCCESS,
          payload: {
            data: { ...form, id: createPost }
          }
        })
      } else {
        dispatch({ type: CREATE_POST_FAILURE, payload: 'Error on Create Post' })
      }
    } catch (error) {
      dispatch({ type: CREATE_POST_FAILURE, payload: error })
    }
  },
  editPost: (form: FormPostInterface) => async (dispatch: AppDispatch) => {
    const { EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE } = HOME_TYPES
    dispatch({ type: EDIT_POST })
    try {
      const response = await homeService.editPost(form)
      dispatch({
        type: EDIT_POST_SUCCESS,
        payload: {
          data: response?.data
        }
      })
    } catch (error) {
      dispatch({ type: EDIT_POST_FAILURE, payload: error })
    }
  }
}

export default actionCreators
