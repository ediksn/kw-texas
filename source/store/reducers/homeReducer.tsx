/* eslint-disable no-param-reassign */
import produce from 'immer'
import { PickPromptsReducerProps, PickPromptsProduceProps } from '~/interfaces/pickPromptsInterface'
import homeModel from '../model/homeModel'
import { HOME_TYPES } from '~/store/types'

const { GET_PICK_PROMPTS_SUCCESS, GET_PICK_PROMPTS, GET_PICK_PROMPTS_FAILURE } = HOME_TYPES
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
  }
}

export default (state = HOME_INITIAL_STATE, { type, payload }: PickPromptsProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
