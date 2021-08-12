/* eslint-disable no-param-reassign */
import produce from 'immer'
import { VIDEO_TYPES } from '../types'
import { VideoProduceProps, VideoReducerProps } from '../../interfaces/videoInterfaces'

const { GET_VIDEOS_SUCCESS } = VIDEO_TYPES

const VIDEO_INITIAL_STATE = {}
const REDUCERS = {
  [GET_VIDEOS_SUCCESS]: ({ draftState, payload }: VideoReducerProps) => {
    draftState.data = payload
  }
}

export default (state = VIDEO_INITIAL_STATE, { type, payload }: VideoProduceProps) =>
  produce(state, draftState => (REDUCERS[type] ? REDUCERS[type]({ draftState, payload }) : state))
