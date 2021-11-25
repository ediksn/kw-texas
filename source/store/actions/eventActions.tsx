import moment from 'moment'
import { eventService } from '~/services'
import { eventsTypes } from '~/store/types'
import { AppDispatch } from '..'

const calculateLimit = (hasMoreLoading: boolean, dataLength: number, limit: number, limitDefault: number) => {
  if (hasMoreLoading || limit === 0) {
    return limit + (dataLength < limit ? 0 : 10)
  }

  return limitDefault
}

const actionCreators = {
  getTodayEvents:
    (hasMoreLoading: boolean = false) =>
    async (dispatch: AppDispatch, getState: any) => {
      const { GET_TODAY_EVENTS, GET_TODAY_EVENTS_SUCCESS, GET_TODAY_EVENTS_FAILURE } = eventsTypes
      dispatch({ type: GET_TODAY_EVENTS, payload: hasMoreLoading })

      const { limitDefault } = getState().events
      const { data, limit } = getState().events.today
      const limitToday = calculateLimit(hasMoreLoading, data.length, limit, limitDefault)
      const startDate = moment().format('YYYY-MM-DD')
      const endDate = startDate

      try {
        const response = await eventService.getEvents(limitToday, startDate, endDate)
        dispatch({
          type: GET_TODAY_EVENTS_SUCCESS,
          payload: {
            data: response?.data.data.searchOnlineEvents,
            limit: limitToday
          }
        })
      } catch (error) {
        dispatch({ type: GET_TODAY_EVENTS_FAILURE, payload: error })
      }
    },
  getTomorrowEvents:
    (hasMoreLoading: boolean = false) =>
    async (dispatch: AppDispatch, getState: any) => {
      const { limitDefault } = getState().events
      const { data, limit } = getState().events.today
      const limitTomorrow = calculateLimit(hasMoreLoading, data.length, limit, limitDefault)
      const { GET_TOMORROW_EVENTS, GET_TOMORROW_EVENTS_SUCCESS, GET_TOMORROW_EVENTS_FAILURE } = eventsTypes
      dispatch({ type: GET_TOMORROW_EVENTS, payload: hasMoreLoading })
      const startDate = moment().add(1, 'd').format('YYYY-MM-DD')
      const endDate = startDate

      try {
        const response = await eventService.getEvents(limitTomorrow, startDate, endDate)
        dispatch({
          type: GET_TOMORROW_EVENTS_SUCCESS,
          payload: {
            data: response?.data.data.searchOnlineEvents,
            limit: limitTomorrow
          }
        })
      } catch (error) {
        dispatch({ type: GET_TOMORROW_EVENTS_FAILURE, payload: error })
      }
    }
}

export default actionCreators
