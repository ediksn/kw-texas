/* eslint-disable no-param-reassign */
import produce from 'immer'
import { EventsReducerProps, EventsProduceProps } from '~/interfaces'
import { eventsModel } from '../model'
import { eventsTypes } from '~/store/types'

const {
  GET_TODAY_EVENTS,
  GET_TODAY_EVENTS_SUCCESS,
  GET_TODAY_EVENTS_FAILURE,
  GET_TOMORROW_EVENTS,
  GET_TOMORROW_EVENTS_SUCCESS,
  GET_TOMORROW_EVENTS_FAILURE
} = eventsTypes
const EVENTS_INITIAL_STATE = eventsModel

const REDUCERS = {
  [GET_TODAY_EVENTS]: ({ draftState, payload }: EventsReducerProps) => {
    draftState.today.isLoading = true
    draftState.today.hasMoreLoading = payload
  },
  [GET_TODAY_EVENTS_SUCCESS]: ({ draftState, payload }: EventsReducerProps) => {
    draftState.today.data = payload.data
    draftState.today.limit = payload.limit
    draftState.today.isLoading = false
    draftState.today.hasMoreLoading = false
  },
  [GET_TODAY_EVENTS_FAILURE]: ({ draftState }: EventsReducerProps) => {
    draftState.today.isLoading = false
    draftState.today.hasMoreLoading = false
  },
  [GET_TOMORROW_EVENTS]: ({ draftState, payload }: EventsReducerProps) => {
    draftState.tomorrow.isLoading = true
    draftState.tomorrow.hasMoreLoading = payload
  },
  [GET_TOMORROW_EVENTS_SUCCESS]: ({ draftState, payload }: EventsReducerProps) => {
    draftState.tomorrow.data = payload.data
    draftState.tomorrow.limit = payload.limit
    draftState.tomorrow.isLoading = false
    draftState.tomorrow.hasMoreLoading = false
  },
  [GET_TOMORROW_EVENTS_FAILURE]: ({ draftState }: EventsReducerProps) => {
    draftState.tomorrow.isLoading = false
    draftState.tomorrow.hasMoreLoading = false
  }
}

export default (state = EVENTS_INITIAL_STATE, { type, payload }: EventsProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
