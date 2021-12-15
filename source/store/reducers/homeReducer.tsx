/* eslint-disable no-param-reassign */
import produce from 'immer'
import { PickPromptsReducerProps } from '~/interfaces/pickPromptsInterface'
import { PostReducerProps } from '~/interfaces/postInterface'
import { ProduceProps } from '~/interfaces/reducerInterface'
import homeModel from '../model/homeModel'
import { HOME_TYPES } from '~/store/types'

const {
  GET_PICK_PROMPTS_SUCCESS,
  GET_PICK_PROMPTS,
  GET_PICK_PROMPTS_FAILURE,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_GROUPS,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_FAILURE,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  SELECT_POST,
  GET_POST_COMMENTS,
  GET_POST_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_FAILURE,
  ADD_COMMENT_POST_SUCCESS
} = HOME_TYPES
const HOME_INITIAL_STATE = homeModel

const REDUCERS = {
  [GET_PICK_PROMPTS]: ({ draftState }: PickPromptsReducerProps) => {
    draftState.pickPrompts.isLoading = true
  },
  [GET_PICK_PROMPTS_SUCCESS]: ({ draftState, payload }: PickPromptsReducerProps) => {
    draftState.pickPrompts.isLoading = false
    draftState.pickPrompts.prompts = payload
  },
  [GET_PICK_PROMPTS_FAILURE]: ({ draftState }: PickPromptsReducerProps) => {
    draftState.pickPrompts.isLoading = false
  },
  [GET_POSTS]: ({ draftState, payload }: PostReducerProps) => {
    draftState.posts.isLoading = !payload
    draftState.posts.hasMoreLoading = payload
  },
  [GET_POSTS_SUCCESS]: ({ draftState, payload }: PostReducerProps) => {
    draftState.posts = { ...draftState.posts, ...payload }
    draftState.posts.isLoading = false
  },
  [GET_POSTS_FAILURE]: ({ draftState }: PostReducerProps) => {
    draftState.posts.isLoading = false
  },
  [GET_GROUPS]: ({ draftState }: PostReducerProps) => {
    draftState.groups.isLoading = true
  },
  [GET_GROUPS_SUCCESS]: ({ draftState, payload }: PostReducerProps) => {
    draftState.groups = { ...draftState.groups, ...payload }
    draftState.groups.isLoading = false
  },
  [GET_GROUPS_FAILURE]: ({ draftState }: PostReducerProps) => {
    draftState.groups.isLoading = false
  },
  [CREATE_POST]: ({ draftState }: PostReducerProps) => {
    draftState.posts.isLoading = true
  },
  [CREATE_POST_SUCCESS]: ({ draftState }: any) => {
    draftState.posts.isLoading = false
  },
  [CREATE_POST_FAILURE]: ({ draftState }: PostReducerProps) => {
    draftState.posts.isLoading = false
  },
  [DELETE_POST]: ({ draftState }: PostReducerProps) => {
    draftState.posts.isLoading = true
  },
  [DELETE_POST_SUCCESS]: ({ draftState, payload }: PostReducerProps) => {
    draftState.posts.data = payload
    draftState.posts.isLoading = false
  },
  [DELETE_POST_FAILURE]: ({ draftState }: PostReducerProps) => {
    draftState.posts.isLoading = false
  },
  [SELECT_POST]: ({ draftState, payload }: PostReducerProps) => {
    draftState.comments.selectedPost = payload
    draftState.comments.selectedPostComments = []
  },
  [GET_POST_COMMENTS]: ({ draftState }: PostReducerProps) => {
    draftState.comments.loadingComments = true
  },
  [GET_POST_COMMENTS_SUCCESS]: ({ draftState, payload }: PostReducerProps) => {
    draftState.comments.selectedPostComments = payload.data
    draftState.comments.limit = payload.limit
    draftState.comments.loadingComments = false
  },
  [GET_POST_COMMENTS_FAILURE]: ({ draftState }: PostReducerProps) => {
    draftState.comments.loadingComments = false
  },
  [ADD_COMMENT_POST_SUCCESS]: ({ draftState, payload }: PostReducerProps) => {
    draftState.posts.data = payload
  }
}

export default (state = HOME_INITIAL_STATE, { type, payload }: ProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
