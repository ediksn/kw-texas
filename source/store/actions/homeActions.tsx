import { FormPostInterface, PostInterface } from '~/interfaces/postInterface'
import { homeService } from '~/services'
import { HOME_TYPES } from '~/store/types'
import { AppDispatch } from '..'
import { GroupInterface } from '~/interfaces/groupInterface'

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
    (limit: number, hasMoreLoading: boolean = false, filterFlagged: boolean = false) =>
    async (dispatch: AppDispatch) => {
      const { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } = HOME_TYPES
      dispatch({ type: GET_POSTS, payload: hasMoreLoading })
      try {
        const response = await homeService.getPosts(limit)
        let posts: PostInterface[] = response?.data.data.getPosts || []

        if (filterFlagged) {
          posts = posts.filter(post => !post.userHasAlreadyFlagged)
        }

        dispatch({
          type: GET_POSTS_SUCCESS,
          payload: {
            data: posts,
            limitDefault: 10,
            limit
          }
        })
      } catch (error) {
        dispatch({ type: GET_POSTS_FAILURE, payload: error })
      }
    },
  getCommentsOfPost:
    (postId: string, limit: number, hasMoreLoading: boolean = false) =>
    async (dispatch: AppDispatch) => {
      const { GET_POST_COMMENTS, GET_POST_COMMENTS_SUCCESS, GET_POST_COMMENTS_FAILURE } = HOME_TYPES
      dispatch({ type: GET_POST_COMMENTS, payload: hasMoreLoading })
      try {
        const response = await homeService.getCommentsOfPost(postId, limit)
        const comments = response?.data.data.getPostReplies || []

        dispatch({
          type: GET_POST_COMMENTS_SUCCESS,
          payload: {
            data: comments,
            limitDefault: 10,
            limit
          }
        })
      } catch (error) {
        dispatch({ type: GET_POST_COMMENTS_FAILURE, payload: error })
      }
    },
  addCommentPost: (comment: string, postId: string) => async (dispatch: any, getState: any) => {
    const { ADD_COMMENT_POST, ADD_COMMENT_POST_SUCCESS, ADD_COMMENT_POST_FAILURE } = HOME_TYPES
    dispatch({ type: ADD_COMMENT_POST, payload: { comment, postId } })
    try {
      const { limit } = getState().home.comments
      await homeService.addCommentToPost(postId, comment)
      const posts: PostInterface[] = getState().home.posts.data
      const newPosts = posts.map((post: PostInterface) =>
        post.id === postId ? { ...post, repliesCount: post.repliesCount + 1 } : post
      )
      dispatch({ type: ADD_COMMENT_POST_SUCCESS, payload: newPosts })
      await dispatch(actionCreators.getCommentsOfPost(postId, limit))
      return true
    } catch (error) {
      dispatch({ type: ADD_COMMENT_POST_FAILURE, payload: error })
    }
    return false
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
  getCommunity: (communityId: string) => async (dispatch: AppDispatch) => {
    const { GET_COMMUNITY_INFO, GET_COMMUNITY_INFO_SUCCESS, GET_COMMUNITY_INFO_FAILURE } = HOME_TYPES
    dispatch({ type: GET_COMMUNITY_INFO })
    try {
      const response = await homeService.getCommunity(communityId)
      dispatch({
        type: GET_COMMUNITY_INFO_SUCCESS,
        payload: response.data?.data.community
      })
      return response.data?.data.community
    } catch (error) {
      dispatch({ type: GET_COMMUNITY_INFO_FAILURE, payload: error })
    }
    return null
  },
  selectPost: (post: PostInterface) => (dispatch: any) => {
    const { SELECT_POST } = HOME_TYPES
    dispatch({ type: SELECT_POST, payload: post })
  },
  selectCommunity: (group: GroupInterface) => (dispatch: any) => {
    const { SELECT_COMMUNITY } = HOME_TYPES
    dispatch({ type: SELECT_COMMUNITY, payload: group })
  },
  fetchSelectedCommunityPosts:
    (limit: number, communityId: string, hasMoreLoading: boolean = false) =>
    async (dispatch: AppDispatch) => {
      const { GET_COMMUNITY_POSTS, GET_COMMUNITY_POSTS_SUCCESS, GET_COMMUNITY_POSTS_FAILURE } = HOME_TYPES
      dispatch({ type: GET_COMMUNITY_POSTS, payload: hasMoreLoading })
      try {
        const response = await homeService.getPostsByCommunityId(limit, communityId)
        const posts: PostInterface[] = response?.data.data.getPosts || []

        dispatch({
          type: GET_COMMUNITY_POSTS_SUCCESS,
          payload: {
            data: posts,
            limitDefault: 10,
            limit
          }
        })
      } catch (error) {
        dispatch({ type: GET_COMMUNITY_POSTS_FAILURE, payload: error })
      }
    },
  setScrolled: (scrolling: boolean) => (dispatch: any) => {
    const { SET_SCROLLED } = HOME_TYPES
    dispatch({ type: SET_SCROLLED, payload: scrolling })
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
  editPost:
    (form: FormPostInterface, postId: string, originalFiles?: any[], newFiles?: any[]) =>
    async (dispatch: any, getState: any) => {
      const { EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE } = HOME_TYPES
      const { limitDefault }: any = getState().home.posts
      dispatch({ type: EDIT_POST })

      try {
        const response =
          (form.hasImages && form.images) || (originalFiles && originalFiles.length > 0)
            ? await homeService.editPostWithMedia(form, postId, originalFiles, newFiles)
            : await homeService.editPost(form, postId)
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
        const newPosts = posts?.filter((post: PostInterface) => post.id !== postId)

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
  flag: (postId: string) => async (dispatch: any, getState: any) => {
    const { FLAG_POST, FLAG_POST_SUCCESS, FLAG_POST_FAILURE } = HOME_TYPES
    dispatch({ type: FLAG_POST })

    try {
      const {
        data: {
          data: { toggleFlagPost }
        }
      } = await homeService.flagPost(postId)
      if (toggleFlagPost) {
        const posts: PostInterface[] = getState().home.posts.data
        const newPosts = posts?.filter((post: PostInterface) => post.id !== postId)

        dispatch({
          type: FLAG_POST_SUCCESS,
          payload: newPosts
        })
        return true
      }
      dispatch({ type: FLAG_POST_FAILURE, payload: `Error on Flag Post ${postId}` })
    } catch (error) {
      dispatch({ type: FLAG_POST_FAILURE, payload: error })
    }
    return false
  },
  addBookmark: (postId: string) => async (dispatch: any) => {
    const { ADD_BOOKMARK_POST, ADD_BOOKMARK_POST_SUCCESS, ADD_BOOKMARK_POST_FAILURE } = HOME_TYPES
    dispatch({ type: ADD_BOOKMARK_POST })

    try {
      const {
        data: {
          data: { toggleBookmarkPost }
        }
      } = await homeService.addBookmarkPost(postId)
      if (toggleBookmarkPost) {
        dispatch({
          type: ADD_BOOKMARK_POST_SUCCESS
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
    dispatch({ type: REMOVE_BOOKMARK_POST, payload: postId })
    const { limit } = getState().home.bookmarkedPosts

    try {
      const {
        data: {
          data: { toggleBookmarkPost }
        }
      } = await homeService.removeBookmarkPost(postId)
      if (toggleBookmarkPost) {
        dispatch(actionCreators.getBookmarkedPosts({ limit }))
        dispatch({
          type: REMOVE_BOOKMARK_POST_SUCCESS
        })
        return true
      }
      dispatch({ type: REMOVE_BOOKMARK_POST_FAILURE, payload: `Error on Remove Bookmark Post ${postId}` })
    } catch (error) {
      dispatch({ type: REMOVE_BOOKMARK_POST_FAILURE, payload: error })
    }
    return false
  },
  getBookmarkedPosts:
    ({ limit, isLoading = false, hasMoreLoading = false }: any) =>
    async (dispatch: AppDispatch) => {
      const { GET_BOOKMARKED_POSTS, GET_BOOKMARKED_POSTS_SUCCESS, GET_BOOKMARKED_POSTS_FAILURE } = HOME_TYPES
      dispatch({ type: GET_BOOKMARKED_POSTS, payload: { isLoading, hasMoreLoading } })
      try {
        const response = await homeService.getBookmarkedPosts(limit)
        dispatch({
          type: GET_BOOKMARKED_POSTS_SUCCESS,
          payload: {
            data: response?.data.data.getPosts,
            limit
          }
        })
      } catch (error) {
        dispatch({ type: GET_BOOKMARKED_POSTS_FAILURE, payload: error })
      }
    },
  addLike: (postId: string) => async (dispatch: AppDispatch) => {
    const { ADD_LIKE_POST, ADD_LIKE_POST_SUCCESS, ADD_LIKE_POST_FAILURE } = HOME_TYPES
    dispatch({ type: ADD_LIKE_POST })

    try {
      const {
        data: { data: toggleLikePost }
      } = await homeService.toggleLikePost(postId)
      if (toggleLikePost) {
        dispatch({
          type: ADD_LIKE_POST_SUCCESS
        })
      } else {
        dispatch({ type: ADD_LIKE_POST_FAILURE, payload: `Error on Like Post ${postId}` })
      }
    } catch (error) {
      dispatch({ type: ADD_LIKE_POST_FAILURE, payload: error })
    }
    return false
  },
  removeLike: (postId: string) => async (dispatch: AppDispatch) => {
    const { REMOVE_LIKE_POST, REMOVE_LIKE_POST_SUCCESS, REMOVE_LIKE_POST_FAILURE } = HOME_TYPES
    dispatch({ type: REMOVE_LIKE_POST })

    try {
      const {
        data: { data: toggleLikePost }
      } = await homeService.toggleLikePost(postId)
      if (toggleLikePost) {
        dispatch({
          type: REMOVE_LIKE_POST_SUCCESS
        })
      } else {
        dispatch({ type: REMOVE_LIKE_POST_FAILURE, payload: `Error on Remove Like Post ${postId}` })
      }
    } catch (error) {
      dispatch({ type: REMOVE_LIKE_POST_FAILURE, payload: error })
    }
    return false
  },
  showDropDown: () => (dispatch: AppDispatch) => dispatch({ type: HOME_TYPES.SHOW_DROP_DOWN_HOME }),
  hideDropDown: () => (dispatch: AppDispatch) => dispatch({ type: HOME_TYPES.HIDE_DROP_DOWN_HOME })
}

export default actionCreators
