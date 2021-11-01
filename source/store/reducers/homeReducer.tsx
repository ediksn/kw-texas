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
  CREATE_POST_FAILURE
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
  [GET_POSTS]: ({ draftState }: PostReducerProps) => {
    draftState.posts.isLoading = true
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
  [CREATE_POST_SUCCESS]: ({ draftState, payload }: any) => {
    draftState.posts.data = [...draftState.posts.data, payload]
    draftState.posts.isLoading = false
  },
  [CREATE_POST_FAILURE]: ({ draftState }: PostReducerProps) => {
    draftState.posts.isLoading = false
  }
}

export default (state = HOME_INITIAL_STATE, { type, payload }: ProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
