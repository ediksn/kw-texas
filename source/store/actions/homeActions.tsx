import { FormPostInterface, PostInterface } from '~/interfaces/postInterface'
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
  getPosts:
    (limit: number, hasMoreLoading: boolean = false) =>
    async (dispatch: AppDispatch) => {
      const { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } = HOME_TYPES
      dispatch({ type: GET_POSTS, payload: hasMoreLoading })
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
  getAllGroups: () => async (dispatch: AppDispatch) => {
    const { GET_GROUPS, GET_GROUPS_SUCCESS, GET_GROUPS_FAILURE } = HOME_TYPES
    dispatch({ type: GET_GROUPS })
    try {
      const response = await homeService.getAllGroups()
      dispatch({
        type: GET_GROUPS_SUCCESS,
        payload: {
          data: response?.data.data.getListOfJoinedGroups
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
  createPost: (form: FormPostInterface) => async (dispatch: any, getState: any) => {
    const { CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE } = HOME_TYPES
    const { limitDefault }: any = getState().home.posts
    dispatch({ type: CREATE_POST })

    try {
      const {
        data: {
          data: { createPost }
        }
      } =
        form.hasImages && form.images ? await homeService.createPostWithMedia(form) : await homeService.createPost(form)

      if (createPost) {
        dispatch({
          type: CREATE_POST_SUCCESS
        })
        await dispatch(actionCreators.getPosts(limitDefault))
        return true
      }
      dispatch({ type: CREATE_POST_FAILURE, payload: 'Error on Create Post' })
    } catch (error) {
      dispatch({ type: CREATE_POST_FAILURE, payload: error })
    }
    return false
  },
  editPost: (form: FormPostInterface) => async (dispatch: any, getState: any) => {
    const { EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE } = HOME_TYPES
    const { limitDefault }: any = getState().home.posts
    dispatch({ type: EDIT_POST })

    try {
      const response = await homeService.editPost(form)

      if (response) {
        dispatch({
          type: EDIT_POST_SUCCESS,
          payload: {
            data: form
          }
        })
        await dispatch(actionCreators.getPosts(limitDefault))
        return true
      }
      dispatch({ type: EDIT_POST_FAILURE, payload: 'Error on Edit Post' })
    } catch (error) {
      dispatch({ type: EDIT_POST_FAILURE, payload: error })
    }
    return false
  },
  deletePost: (postId: string) => async (dispatch: any, getState: any) => {
    const { DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE } = HOME_TYPES
    dispatch({ type: DELETE_POST })

    try {
      const {
        data: {
          data: { deletePost }
        }
      } = await homeService.deletePost(postId)
      if (deletePost) {
        const posts: PostInterface[] = getState().home.posts.data
        const newPosts = posts.filter((post: PostInterface) => post.id !== postId)

        dispatch({
          type: DELETE_POST_SUCCESS,
          payload: newPosts
        })
        return true
      }
      dispatch({ type: DELETE_POST_FAILURE, payload: `Error on Delete Post ${postId}` })
    } catch (error) {
      dispatch({ type: DELETE_POST_FAILURE, payload: error })
    }
    return false
  },
  addBookmark: (postId: string) => async (dispatch: any, getState: any) => {
    const { ADD_BOOKMARK_POST, ADD_BOOKMARK_POST_SUCCESS, ADD_BOOKMARK_POST_FAILURE } = HOME_TYPES
    dispatch({ type: ADD_BOOKMARK_POST })

    try {
      const {
        data: {
          data: { toggleBookmarkPost }
        }
      } = await homeService.addBookmarkPost(postId)
      if (toggleBookmarkPost) {
        const posts: PostInterface[] = getState().home.posts.data
        const newPosts = posts.map((post: PostInterface) =>
          post.id === postId ? { ...post, userHasAlreadyBookmarked: true } : post
        )

        dispatch({
          type: ADD_BOOKMARK_POST_SUCCESS,
          payload: newPosts
        })
        return true
      }
      dispatch({ type: ADD_BOOKMARK_POST_FAILURE, payload: `Error on Add Bookmark Post ${postId}` })
    } catch (error) {
      dispatch({ type: ADD_BOOKMARK_POST_FAILURE, payload: error })
    }
    return false
  },
  removeBookmark: (postId: string) => async (dispatch: any, getState: any) => {
    const { REMOVE_BOOKMARK_POST, REMOVE_BOOKMARK_POST_SUCCESS, REMOVE_BOOKMARK_POST_FAILURE } = HOME_TYPES
    dispatch({ type: REMOVE_BOOKMARK_POST })

    try {
      const {
        data: {
          data: { toggleBookmarkPost }
        }
      } = await homeService.removeBookmarkPost(postId)
      if (toggleBookmarkPost) {
        const posts: PostInterface[] = getState().home.posts.data
        const newPosts = posts.map((post: PostInterface) =>
          post.id === postId ? { ...post, userHasAlreadyBookmarked: false } : post
        )

        dispatch({
          type: REMOVE_BOOKMARK_POST_SUCCESS,
          payload: newPosts
        })
        return true
      }
      dispatch({ type: REMOVE_BOOKMARK_POST_FAILURE, payload: `Error on Remove Bookmark Post ${postId}` })
    } catch (error) {
      dispatch({ type: REMOVE_BOOKMARK_POST_FAILURE, payload: error })
    }
    return false
  },
  addLike: (postId: string) => async (dispatch: AppDispatch, getState: any) => {
    const { ADD_LIKE_POST, ADD_LIKE_POST_SUCCESS, ADD_LIKE_POST_FAILURE } = HOME_TYPES
    dispatch({ type: ADD_LIKE_POST })

    try {
      const {
        data: { data: toggleLikePost }
      } = await homeService.toggleLikePost(postId)
      if (toggleLikePost) {
        const posts: PostInterface[] = getState().home.posts.data
        const newPosts = posts.map((post: PostInterface) =>
          post.id === postId ? { ...post, userHasAlreadyLiked: true } : post
        )

        dispatch({
          type: ADD_LIKE_POST_SUCCESS,
          payload: newPosts
        })
      } else {
        dispatch({ type: ADD_LIKE_POST_FAILURE, payload: `Error on Like Post ${postId}` })
      }
    } catch (error) {
      dispatch({ type: ADD_LIKE_POST_FAILURE, payload: error })
    }
    return false
  },
  removeLike: (postId: string) => async (dispatch: AppDispatch, getState: any) => {
    const { REMOVE_LIKE_POST, REMOVE_LIKE_POST_SUCCESS, REMOVE_LIKE_POST_FAILURE } = HOME_TYPES
    dispatch({ type: REMOVE_LIKE_POST })

    try {
      const {
        data: { data: toggleLikePost }
      } = await homeService.toggleLikePost(postId)
      if (toggleLikePost) {
        const posts: PostInterface[] = getState().home.posts.data
        const newPosts = posts.map((post: PostInterface) =>
          post.id === postId ? { ...post, userHasAlreadyLiked: false } : post
        )
        dispatch({
          type: REMOVE_LIKE_POST_SUCCESS,
          payload: newPosts
        })
      } else {
        dispatch({ type: REMOVE_LIKE_POST_FAILURE, payload: `Error on Remove Like Post ${postId}` })
      }
    } catch (error) {
      dispatch({ type: REMOVE_LIKE_POST_FAILURE, payload: error })
    }
    return false
  }
}

export default actionCreators
